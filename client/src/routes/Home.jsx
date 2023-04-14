import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Page, FilterAndOrder, Nav, SearchBar } from "../components";
import { findPokemons, findTypes } from '../redux/actions';

function Home() {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
    const types = useSelector(state => state.types);
    const filterAndOrder = useSelector(state => state.filterAndOrder);

    useEffect(() => {
        dispatch(findPokemons('http://localhost:3001/api/pokemons'));
        dispatch(findTypes('http://localhost:3001/api/pokemons/types/'));
    },[])

    return ( 
        <div className="Home">
            <Nav />
            <SearchBar/>.          
            <FilterAndOrder types={types}/>
            <Page pokemons={filterAndOrder}/>
        </div>
    );
}

export default Home;