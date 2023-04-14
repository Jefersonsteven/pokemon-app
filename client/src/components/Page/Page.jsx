import React, { useEffect, useState } from "react";
import { Card } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions";

function Page({pokemons}) {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.currentPage);
    const filterAndOrder = useSelector(state => state.filterAndOrder);
    const numberOfPokemonsPerPages = 12;

    //* ❔
    let countPage = [];
    for (let i = 1; i < (pokemons.length / numberOfPokemonsPerPages) + 1 ; i++) {
        countPage.push(i);
    }

        const Start = currentPage * numberOfPokemonsPerPages;
        const End = Start + numberOfPokemonsPerPages;
        const page = filterAndOrder.slice(Start, End);

    return ( 
        <div className="Page">
            {pokemons.length === 0 && <span>Loading...</span>}
            {
                pokemons.length > 0 &&
                page.map(({ id, image, name, Types }) => <Card key={id} image={image} name={name} types={Types} />)
            }
            <div className="PageNavigator">
                {
                currentPage > 0 &&
                <button 
                    onClick={(event => dispatch(setCurrentPage(currentPage - 1)))}
                >⬅️</button>
                }
                <div className="PageNumber">
                    {
                        countPage.length > 0 &&
                        countPage.map((num, index) => {
                            return (
                            <button
                                onClick={(event => dispatch(setCurrentPage(event.target.value - 1)))}
                                key={(num * index) + "UUID"} 
                                value={num}
                            >
                                {num}
                            </button>
                            )
                        })
                    }
                </div>
                {
                currentPage < countPage.length - 1 &&
                <button 
                    onClick={(() => dispatch(setCurrentPage(currentPage + 1)))}
                >➡️</button>
                }
            </div>
        </div>
    );
}

export default Page;