import './Card.scss';

import React from "react";
import { Link } from "react-router-dom";
import { setPokemon } from '../../redux/actions';
import { useDispatch } from 'react-redux';

function Card({ id, image, name, types }) {
    const dispatch = useDispatch();

    function getColorPerType(type) {
        switch(type) {
            case 'normal':
                return '#444242'

            default:
                return '#000'
        }
    }

    return ( 
        <div className="CardPokemon">
            <img className="Image" src={image} alt={name} />
            <div className="Info">
                <h3 className="Name" onClick={() => dispatch(setPokemon())}>
                    <Link to={`/pokemon/${id}`}>{name}</Link>
                </h3>
                <div className="Types">
                    {
                        types?.length > 0 && 
                        types?.map((type, index) => ( 
                            <span key={index + "UUID"} style={{backgroundColor: getColorPerType(type)}}>{type}</span> 
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;