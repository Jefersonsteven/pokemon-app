import React from "react";
import { Link } from "react-router-dom";

function Card({ id, image, name, types }) {
    return ( 
        <div className="CardPokemon">
            {/* <img className="Image" src={image} alt={name} /> */}
            <div className="Info">
                <h3 className="Name">
                    <Link to={`/pokemon/${id}`}>{name}</Link>
                </h3>
                <div className="Types">
                    {
                        types?.length > 0 && 
                        types?.map((type, index) => ( 
                            <span key={index + "UUID"}>{type}</span> 
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;