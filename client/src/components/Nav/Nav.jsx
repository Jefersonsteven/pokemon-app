import "./Nav.scss";
import React from "react";
import { Pokeball } from "../index";


function Nav() {

    return (
        <nav className="NavBar">
            <Pokeball />
            <div className="botonMenu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}

export default Nav;