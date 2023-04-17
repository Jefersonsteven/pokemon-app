import './Menu.scss';

import React from "react";
import  { Exit, Close_icon } from "../index";
import { Link } from "react-router-dom";

function Menu({ handleBotonMenu }) {

    return ( 
        <div className="Menu">
            <div className="Menu_Container">
                <div onClick={handleBotonMenu}>
                    <Close_icon/>
                </div>

                <ul>
                    <li>
                        <Link to="/home">HOME</Link>
                    </li>
                    <li>
                        <Link to="/pokemon/create-pokemon">CREATE POKEMON</Link>
                    </li>
                    <li>
                        <Link to="/">EXIT</Link>
                        <Exit />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;