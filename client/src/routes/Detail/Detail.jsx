import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { findPokemonByID } from "../../redux/actions"
import { Arrow, StatItem } from "../../components";
import { Link } from "react-router-dom";

function Detail() {
    const { pokemonId } = useParams();
    const dispatch = useDispatch();
    const pd = useSelector(state => state.pokemonDetail[0]);
    const BASE_URL = 'http://localhost:3001/api/pokemons'

    useEffect(() => {
        dispatch(findPokemonByID(pokemonId, BASE_URL));
    },[])

    

    return (
        <div className="PokemonDetail_container">
            <Link to="/home">
                <Arrow/>
            </Link>
            {pd &&
                <div className="PokemonDetail">
                    {/* <img src={pd.image} alt="pd.name"/> */}
                    <h2>{`${pd.name}`}</h2>
                    <div className="Stats">
                        <StatItem title="Up" stat={pd.up}/>
                        <StatItem title="Attack" stat={pd.attack}/>
                        <StatItem title="Defense" stat={pd.defense}/>
                        {pd.speed && <StatItem title="Speed" stat={pd?.speed}/>}
                    </div>
                    <div>
                        <div className="Types">
                            <p>types</p>
                            <div className="Types_container">
                                {pd?.Types.map((type, index) => <p key={index + pd.up}>{type}</p>)}
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