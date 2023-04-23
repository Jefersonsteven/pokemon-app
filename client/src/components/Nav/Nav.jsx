import "./Nav.scss";
import React from "react";
import { Pokeball, GitHub } from "../index";
import { Link } from "react-router-dom";


function Nav({ handleBotonMenu }) {

    return (
        <nav className="NavBar">
            <Link to="/">
                <Pokeball />
            </Link>
            <a href="https://github.com/Jefersonsteven/pokemon-app.git" target="_blank" rel="noopener noreferrer">
                <GitHub />
            </a>
            <div className="botonMenu" onClick={handleBotonMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}

export default Nav;