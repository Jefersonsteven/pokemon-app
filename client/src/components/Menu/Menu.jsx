import React from "react";
import  { Close_icon, Exit } from "../index";
import { Link } from "react-router-dom";

function Menu() {
    return ( 
        <div className="Menu">
            <div className="Background"></div>
            <div className="Menu_Container">
                <ul>
                    <li>
                        <Link to="/home">HOME</Link>
                    </li>
                    <li>
                        <Link to="/pokemon/create-pokemon">CREATE POKEMON</Link>
                    </li>
                    <li>
                        <Link to="/">EXIT</Link>
                        <Exit/>.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;