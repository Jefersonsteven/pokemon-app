import './Home.scss';

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Page, FilterAndOrder, Nav, SearchBar, Menu } from "../../components";
import { findPokemons, findTypes } from '../../redux/actions';

function Home() {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
    const types = useSelector(state => state.types);

    useEffect(() => {
        if (types.length === 0 & pokemons.length === 0) {
            dispatch(findPokemons());
            dispatch(findTypes());
        }
    }, [])

    const [openMenu, setOpenMenu] = useState(false);

    function handleBotonMenu() {
        openMenu ? setOpenMenu(false) : setOpenMenu(true);
    }

    return (
        <div className="Home">
            <Nav setOpenMenu={setOpenMenu} openMenu={openMenu} handleBotonMenu={handleBotonMenu} />
            {openMenu && <Menu handleBotonMenu={handleBotonMenu} />}
            <SearchBar />
            <FilterAndOrder />
            <Page />
        </div>
    );
}

export default Home;