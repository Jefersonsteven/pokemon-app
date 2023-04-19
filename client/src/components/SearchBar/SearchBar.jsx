import "./SearchBar.scss";

import React, { useState } from "react";
import Search_icon from "../svgs/Search_icon";
import { useDispatch, useSelector } from 'react-redux';
import { findPokemonByName, setPokemon } from "../../redux/actions";
import { Card, Close_icon } from '../index';
import { setNamePokemonForBD } from "../../assets/setName";

function SearchBar() {
    const dispatch = useDispatch();
    const [ searchValue, setSearchValue ] = useState('');
    const [ openResult, setOpenResult ] = useState(false);
    const [ buttonDisabled, setbuttonDisabled ] = useState(true);
    const pokemon = useSelector(state => state.pokemon);

    function handleInput(event) {
        if(event.target.value) {
            setbuttonDisabled(false);
        } else {
            setbuttonDisabled(true);
        }
        setSearchValue(event.target.value);
    }

    function handleOpenResult() {
        if(openResult && pokemon[0]) dispatch(setPokemon());
        openResult ? setOpenResult(false) : setOpenResult(true);
    }

    return ( 
        <div className="Search_container">
            <div className="SearchBar">
                <input
                    onChange={handleInput}
                    type="text"
                    placeholder="Search pokemon"
                    value={searchValue}
                />
                <button
                    disabled={buttonDisabled}
                    onClick={() => {
                        handleOpenResult()
                        setSearchValue('')
                        dispatch(findPokemonByName(setNamePokemonForBD(searchValue)))
                    }}
                >
                    <Search_icon />
                </button>
            </div>
            
            {openResult &&
            <div className="SearchResult">
                <div onClick={handleOpenResult}>
                    <Close_icon/>
                </div>
                {!pokemon[0] && <span>Loading...</span>}
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