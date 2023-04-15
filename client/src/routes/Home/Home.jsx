import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Page, FilterAndOrder, Nav, SearchBar } from "../../components";
import { findPokemons, findTypes } from '../../redux/actions';

function Home() {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
    const types = useSelector(state => state.types);

    if(types.length === 0 && pokemons.length === 0) {
        dispatch(findPokemons('http://localhost:3001/api/pokemons'));
        dispatch(findTypes('http://localhost:3001/api/pokemons/types/'));
    }

    return ( 
        <div className="Home">
            <Nav />
            <SearchBar/>.          
            <FilterAndOrder/>
            <Page/>
        </div>
    );
}

export default Home;