import React, { useState } from "react";
import Search_icon from "../svgs/Search_icon";
import { useDispatch, useSelector } from 'react-redux';
import { findPokemonByName } from "../../redux/actions";
import { Card, Close_icon } from '../index';

function SearchBar() {
    const dispatch = useDispatch();
    const [ searchValue, setSearchValue ] = useState('');
    const pokemon = useSelector(state => state.pokemon);

    const BASE_URL = 'http://localhost:3001/api/pokemons'

    function handlerInput(event) {
        setSearchValue(event.target.value);
    }

    return ( 
        <div className="SearchBar">
            <input onChange={handlerInput} type="text" placeholder="search pokemon"/>
            <button onClick={() => dispatch(findPokemonByName(searchValue, BASE_URL))}>
                <Search_icon/>
            </button>
            
            <div className="Result">
                <Close_icon/>
                {pokemon[0]?.message && <span>{pokemon[0]?.message}</span>}
                {pokemon[0]?.name &&
                    pokemon.map(({ id, image, name, Types }) => {
                        return (
                            <Card key={id} id={id} image={image} name={name} types={Types} />
                        )
                    })
                }
            </div>
            
        </div>
    );
}

export default SearchBar;