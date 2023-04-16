import './Home.scss';

import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Page, FilterAndOrder, Nav, SearchBar, Menu } from "../../components";
import { findPokemons, findTypes } from '../../redux/actions';

function Home() {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
    const types = useSelector(state => state.types);

    if(types.length === 0 && pokemons.length === 0) {
        dispatch(findPokemons('http://localhost:3001/api/pokemons'));
        dispatch(findTypes('http://localhost:3001/api/pokemons/types/'));
    }

    const [ openMenu, setOpenMenu ] = useState(false);

    return ( 
        <div className="Home">
            <Nav setOpenMenu={setOpenMenu} openMenu={openMenu}/>
            {openMenu && <Menu/>}
            <SearchBar/>          
            <FilterAndOrder/>
            <Page/>
        </div>
    );
}

export default Home;