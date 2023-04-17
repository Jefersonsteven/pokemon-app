import "./Nav.scss";
import React from "react";
import { Pokeball } from "../index";
import { Link } from "react-router-dom";


function Nav({handleBotonMenu}) {

    return (
        <nav className="NavBar">
            <Link to="/">
                <Pokeball />
            </Link>
            <div className="botonMenu" onClick={handleBotonMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}

export default Nav;