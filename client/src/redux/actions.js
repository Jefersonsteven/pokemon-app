export const FIND_POKEMONS = 'FIND_POKEMONS';
export const FIND_TYPES = 'FIND_TYPES';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const FILTER_PER_TYPES = 'FILTER_PER_TYPES';
export const FILTER_PER_ORIGIN = 'FILTER_PER_ORIGIN';

//* async
export const findPokemons = (route) => {

    return async (dispatch) => {
        const data = await fetch(route);
        const pokemons = await data.json();
        return dispatch({ type: FIND_POKEMONS, payload: pokemons });
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