import './App.scss';

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Pokemon_logo, Pikachu_ash, } from './components/index';
import { useDispatch, useSelector } from 'react-redux';
import { findPokemons, findTypes } from './redux/actions';


function App() {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);
    const pokemons = useSelector(state => state.pokemons);

    useEffect(() => {
        if (types.length === 0 & pokemons.length === 0) {
            dispatch(findPokemons());
            dispatch(findTypes());
        }
    }, [])

    return (
        <>
            <div className='App'>
                <section>
                    <h1>ポケットモンスター</h1>
                    <Pokemon_logo />
                    <Link to="/home">
                        <Home />
                        <p>Home</p>
                    </Link>
                </section>
                <section>
                    <div>
                        <img src="./assets/images/pickachu-ash.png" alt="pikachu and ash" />
                    </div>
                </section>
            </div>
        </>
    );
}

export default App;