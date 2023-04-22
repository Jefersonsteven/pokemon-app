import './Card.scss';

import React from "react";
import { Link } from "react-router-dom";
import { setPokemon } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import getColorPerType from '../../assets/getColorPerType';

function Card({ id, image, name, types }) {
    const dispatch = useDispatch();

    return (
        <div className="CardPokemon">
            <Link to={`/pokemon/${id}`}>
                <img className="Image" src={image} alt={name} onError={(event) => event.target.src = '../../assets/images/default-card.png'} />
            </Link>
            <div className="Info">
                <h3 className="Name" onClick={() => dispatch(setPokemon())}>
                    {name}
                </h3>
                <div className="Types">
                    {
                        types?.length > 0 &&
                        types?.map((type, index) => (
                            <span key={index + "UUID"} style={{ backgroundColor: getColorPerType(type) }}>{type}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;