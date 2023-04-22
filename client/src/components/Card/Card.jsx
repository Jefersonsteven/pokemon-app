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
            {!image && <span>Loading</span>}
            <img className="Image" src={image} alt={name} onerror="this.src='../../assets/images/default-card.png';" />
            <div className="Info">
                <h3 className="Name" onClick={() => dispatch(setPokemon())}>
                    <Link to={`/pokemon/${id}`}>{name}</Link>
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