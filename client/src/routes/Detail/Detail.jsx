import './Detail.scss';

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { findPokemonByID, setPokemonDetail } from "../../redux/actions"
import { Arrow, Loading, StatItem } from "../../components";
import { Link } from "react-router-dom";
import getColorPerType from '../../assets/getColorPerType';

function Detail() {
    const { pokemonId } = useParams();
    const dispatch = useDispatch();
    const pd = useSelector(state => state.pokemonDetail[0]);

    useEffect(() => {
        dispatch(findPokemonByID(pokemonId));
    }, [])

    return (
        <div className="PokemonDetail_container">
            <div onClick={() => dispatch(setPokemonDetail())}>
                <Link to="/home">
                    <Arrow />
                </Link>
            </div>
            {!pd && <Loading />}
            {pd &&
                <div className="PokemonDetail">
                    <div>
                        <img src={pd.image} alt="pd.name" />
                    </div>
                    <h2>{`${pd.name}`}</h2>
                    <div className="Stats">
                        <StatItem title="Up" stat={pd.up} color={'#27AE60'} />
                        <StatItem title="Attack" stat={pd.attack} color={'#EB5757'} />
                        <StatItem title="Defense" stat={pd.defense} color={'#2D9CDB'} />
                        {pd.speed && <StatItem title="Speed" stat={pd?.speed} color={'#F2C94C'} />}
                    </div>
                    <div className='MoreStats'>
                        <div className="Types">
                            <p>types</p>
                            <div className="Types_Container">
                                {pd?.Types.map((type, index) => <span key={index + pd.up} style={{ backgroundColor: getColorPerType(type) }}>{type}</span>)}
                            </div>
                        </div>
                        <div className="MasInfo">
                            <div className="Height">
                                <p>Height</p>
                                <p>{pd?.height}</p>
                            </div>
                            <div className="Weight">
                                <p>Weight</p>
                                <p>{pd?.weight}</p>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    );
}

export default Detail;