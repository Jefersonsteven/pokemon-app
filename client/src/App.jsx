import './App.scss';

import React from "react";
import { Link } from "react-router-dom";
import { Home, Pokemon_logo, Pikachu_ash, } from './components/index';


function App() {
    return ( 
        <>
            <div className='App'>
                <section>
                    <h1>ポケットモンスター</h1>
                    <Pokemon_logo/>
                    <Link to="/home">
                        <Home/>
                        <p>Home</p>
                    </Link>
                </section>
                <section>
                    <div>
                        <Pikachu_ash/>
                    </div>
                </section>
            </div>
        </>
    );
}

export default App;