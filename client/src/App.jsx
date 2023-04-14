import './App.scss';

import React from "react";
import { Link } from "react-router-dom";
import { Home, Pokemon_logo, Pikachu_ash, } from './components/index';


function App() {
    return ( 
        <>
            <div className='App_Con'>
                <section>
                    <h1>ポケットモンスター</h1>
                    <Pokemon_logo/>
                    <Link to="/home">
                        <Home/>
                        Home
                    </Link>
                </section>
                <section>
                    <Pikachu_ash/>
                </section>
            </div>
        </>
    );
}

export default App;