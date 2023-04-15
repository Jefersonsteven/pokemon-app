import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Page, FilterAndOrder, Nav, SearchBar } from "../components";
import { findPokemons, findTypes } from '../redux/actions';

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findPokemons('http://localhost:3001/api/pokemons'));
        dispatch(findTypes('http://localhost:3001/api/pokemons/types/'));
    },[])

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