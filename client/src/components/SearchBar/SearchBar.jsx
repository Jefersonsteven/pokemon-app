import React, { useState } from "react";
import Search_icon from "../svgs/Search_icon";
import { useDispatch, useSelector } from 'react-redux';
import { findPokemonByName } from "../../redux/actions";
import { Card, Close_icon } from '../index';

function SearchBar() {
    const dispatch = useDispatch();
    const [ searchValue, setSearchValue ] = useState('');
    const [ openResult, setOpenResult ] = useState(false);
    const [ buttonDisabled, setbuttonDisabled ] = useState(true);
    const pokemon = useSelector(state => state.pokemon);

    const BASE_URL = 'http://localhost:3001/api/pokemons';

    function handleInput(event) {
        if(event.target.value) {
            setbuttonDisabled(false);
        } else {
            setbuttonDisabled(true);
        }
        setSearchValue(event.target.value);
    }

    function handleOpenResult() {
        openResult ? setOpenResult(false) : setOpenResult(true)
    }

    return ( 
        <div className="SearchBar">
            <input 
                onChange={handleInput} 
                type="text" 
                placeholder="search pokemon"
                value={searchValue}
            />
            <button 
                disabled={buttonDisabled}
                onClick={() => {
                    handleOpenResult()
                    setSearchValue('')
                    dispatch(findPokemonByName(searchValue, BASE_URL))
                }}
                >
                <Search_icon/>
            </button>
            
            {openResult &&
            <div className="Result">
                <div onClick={handleOpenResult}>
                    <Close_icon/>
                </div>
                {pokemon[0]?.message && <span>{pokemon[0]?.message}</span>}
                {pokemon[0]?.name &&
                    pokemon.map(({ id, image, name, Types }) => {
                        return (
                            <Card key={id} id={id} image={image} name={name} types={Types} />
                        )
                    })
                }
            </div>}
            
        </div>
    );
}

export default SearchBar;