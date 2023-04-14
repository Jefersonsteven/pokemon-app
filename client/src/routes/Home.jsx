import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Page, FilterAndOrder, Nav, SearchBar } from "../components";
import { findPokemons } from '../redux/actions';

function Home() {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);

    useEffect(() => {
        dispatch(findPokemons('http://localhost:3001/api/pokemons'));
    },[])

    return ( 
        <div className="Home">
            <Nav />
            <SearchBar/>.          
            <FilterAndOrder/>
            <Page pokemons={pokemons}/>
        </div>
    );
}

export default Home;