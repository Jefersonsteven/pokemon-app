import React, { useEffect } from "react";
import { Card } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions";

function Page({pokemons}) {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.currentPage); //* la primer pagina es la 0
    let count = [];
    const numberOfPokemonsPerPages = 12 // * numero de pokemons por pagina
    for (let i = 1; i < (pokemons.length / numberOfPokemonsPerPages) + 1 ; i++) {
        count.push(i); // * cuento el  numero de paginas que necesito
    }

    const Start = currentPage * numberOfPokemonsPerPages; // * numero de inicio para el slice
    const End = Start + numberOfPokemonsPerPages; // * numero de final para el slice
    const pagina = pokemons.slice(Start, End); // * el slice me devuelve una copia de una parte del array
    // * la forma en que determina que parte del array copia es recibiendo el numero de la posicion desde donde va a iniciar a copiar
    // * hasta la cantidad de elementos que quiere copiar

    return ( 
        <div className="Page">
            {pokemons.length === 0 && <span>Loading...</span>}
            {
                pokemons.length > 0 &&
                pagina.map(({ id, image, name, Types }) => <Card key={id} image={image} name={name} types={Types} />)
            }
            <div>
                {
                currentPage > 0 &&
                <button 
                    onClick={(event => dispatch(setCurrentPage(currentPage - 1)))}
                >⬅️</button>
                }
                <div className="PageNavigator">
                    {
                        count?.length > 0 &&
                        count?.map((num, index) => {
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
                currentPage < count.length - 1 &&
                <button 
                    onClick={(() => dispatch(setCurrentPage(currentPage + 1)))}
                >➡️</button>
                }
            </div>
        </div>
    );
}

export default Page;