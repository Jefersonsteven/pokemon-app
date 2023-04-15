import "./Nav.scss";
import React from "react";
import { Pokeball } from "../index";
import { Link } from "react-router-dom";


function Nav() {

    return (
        <nav className="NavBar">
            <Link to="/">
                <Pokeball />
            </Link>
            <div className="botonMenu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}

export default Nav;