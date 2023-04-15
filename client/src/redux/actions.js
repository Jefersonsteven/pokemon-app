export const FIND_POKEMONS = 'FIND_POKEMONS';
export const FIND_POKEMON_BY_ID = 'FIND_POKEMON_BY_ID';
export const FIND_POKEMON_BY_NAME = 'FIND_POKEMON_BY_NAME';
export const FIND_TYPES = 'FIND_TYPES';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const FILTER_PER_TYPES = 'FILTER_PER_TYPES';
export const FILTER_PER_ORIGIN = 'FILTER_PER_ORIGIN';
export const ORDER_ASCENDENT_OR_DESCENDENT = 'ORDER_ASCENDENT_OR_DESCENDENT';
export const ORDER_A_Z_OR_Z_A = 'ORDER_A_Z_OR_Z_A';
export const ORDER_ATTACK = 'ORDER_ATTACK';

//* async
export const findPokemons = (route) => {

    return async (dispatch) => {
        const data = await fetch(route);
        const pokemons = await data.json();
        return dispatch({ type: FIND_POKEMONS, payload: pokemons });
    }
}

export const findPokemonByName = (name, route) => {

    return async (dispatch) => {
            if (name) {
                const data = await fetch(`${route}/name/?name=${name}`);
                const pokemon = await data.json();
                if(pokemon.name) {
                    return dispatch({ type: FIND_POKEMON_BY_NAME, payload: pokemon });
                }
            }
            return dispatch({ type: FIND_POKEMON_BY_NAME, payload: { message: 'Not found' } })
    }
}

export const findPokemonByID = (id, route) => {

    return async (dispatch) => {
        const data = await fetch(`${route}/${id}`);
        const pokemon = await data.json();
        return dispatch({ type: FIND_POKEMON_BY_ID, payload: pokemon });
    }
}

export const findTypes = (route) => {

    return async (dispatch) => {
        const data = await fetch(route);
        const types = await data.json();
        return dispatch({ type: FIND_TYPES, payload: types });
    }
}

//* sync
export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, payload: currentPage }
}

export const filterPerTypes = (type) => {
    return { type: FILTER_PER_TYPES, payload: type }
}

export const filterPerOrigin = (origin) => {
    return { type: FILTER_PER_ORIGIN, payload: origin }
}

export const orderAscendentOrDescendent = (filter) => {
    return { type: ORDER_ASCENDENT_OR_DESCENDENT, payload: filter }
}

export const orderAZorZA = (filter) => {
    return { type: ORDER_A_Z_OR_Z_A, payload: filter }
}

export const orderAttack = (filter) => {
    return { type: ORDER_ATTACK, payload: filter }
}