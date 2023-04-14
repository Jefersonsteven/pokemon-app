export const FIND_POKEMONS = 'FIND_POKEMONS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

//* async
export const findPokemons = (route) => {

    return async (dispatch) => {
        const data = await fetch(route);
        const pokemons = await data.json();
        return dispatch({ type: FIND_POKEMONS, payload: pokemons });
    }
}

//* sync
export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, payload: currentPage }
}