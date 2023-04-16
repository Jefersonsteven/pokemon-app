import './Page.scss';

import React, { useEffect, useState } from "react";
import { Arrow, Card } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions";

function Page() {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.currentPage);
    const pokemons = useSelector(state => state.filterAndOrder);
    const numberOfPokemonsPerPages = 12;

    // * ❔
    let countPage = [];
    for (let i = 1; i < (pokemons.length / numberOfPokemonsPerPages) + 1 ; i++) {
        countPage.push(i);
    }

    const Start = currentPage * numberOfPokemonsPerPages;
    const End = Start + numberOfPokemonsPerPages;
    const page = pokemons.slice(Start, End);

    return (
        <div className="Page">
            <div className='Page_container'>
                {pokemons.length === 0 && <span>Loading...</span>}
                {
                    pokemons.length > 0 &&
                    page.map(({ id, image, name, Types }) => <Card key={id} id={id} image={image} name={name} types={Types} />)
                }
            </div>
            
            <div className="PageNavigator">


                <button
                    style={{ transform: 'rotate(-90deg)' }}
                    className='Previous'
                    onClick={(() => currentPage > 0 &&  dispatch(setCurrentPage(currentPage - 1)))}
                >
                    <Arrow />
                </button>

                <div className="PageNumber">
                    {
                        countPage.length > 0 &&
                        countPage.map(num => {
                            return (
                            <button
                                disabled={false}
                                onClick={(event => dispatch(setCurrentPage(event.target.value - 1)))}
                                key={num} 
                                value={num}
                                style={num === (currentPage + 1) ? { backgroundColor: '#ffffff' }: { backgroundColor: '#554D79', color: '#fff' } }
                            > 
                                {num}
                            </button>
                            )
                        })
                    }
                </div>


                    <button
                        style={{ transform: 'rotate(90deg)' }}
                        className='Next'
                        onClick={(() => currentPage < countPage.length - 1 && dispatch(setCurrentPage(currentPage + 1)))}
                    >
                        <Arrow />
                    </button>

            </div>
        </div>
    );
}

export default Page;