export const FIND_POKEMONS = "FIND_POKEMONS";
export const FIND_POKEMON_BY_ID = "FIND_POKEMON_BY_ID";
export const FIND_POKEMON_BY_NAME = "FIND_POKEMON_BY_NAME";
export const FIND_TYPES = "FIND_TYPES";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const FILTER_PER_TYPES = "FILTER_PER_TYPES";
export const FILTER_PER_ORIGIN = "FILTER_PER_ORIGIN";
export const ORDER_ASCENDENT_OR_DESCENDENT = "ORDER_ASCENDENT_OR_DESCENDENT";
export const ORDER_A_Z_OR_Z_A = "ORDER_A_Z_OR_Z_A";
export const ORDER_ATTACK = "ORDER_ATTACK";
export const SET_POKEMON = "SET_POKEMON";
export const SET_POKEMON_DETAIL = "SET_POKEMON_DETAIL";

//export const URL = "http://localhost:3001/api/pokemons";
export const URL = "https://pokemon-api-jeffer.onrender.com/api/pokemons";

//* async
export const findPokemons = (route = URL) => {
    return (dispatch) => {
        fetch(route)
            .then((response) => response.json())
            .then((pokemons) =>
                dispatch({ type: FIND_POKEMONS, payload: pokemons })
            )
            .catch((error) => console.log(error));
    };
};

export const findPokemonByName = (name, route = URL) => {
    return async (dispatch) => {
        try {
            if (name) {
                const data = await fetch(`${route}/name/?name=${name}`);
                const pokemon = await data.json();
                if (pokemon.name) {
                    return dispatch({
                        type: FIND_POKEMON_BY_NAME,
                        payload: pokemon,
                    });
                }
                if (pokemon.errorDB && pokemon.errorAPI) {
                    return dispatch({
                        type: FIND_POKEMON_BY_NAME,
                        payload: { message: "Not found" },
                    });
                }
            }
        } catch (error) {
            return dispatch({
                type: FIND_POKEMON_BY_NAME,
                payload: { message: error },
            });
        }
    };
};

export const findPokemonByID = (id, route = URL) => {
    return async (dispatch) => {
        try {
            const data = await fetch(`${route}/${id}`);
            const pokemon = await data.json();
            return dispatch({ type: FIND_POKEMON_BY_ID, payload: pokemon });
        } catch (error) {
            return dispatch({ type: FIND_POKEMON_BY_ID, payload: error });
        }
    };
};

export const findTypes = (route = `${URL}/types/`) => {
    return async (dispatch) => {
        try {
            const data = await fetch(route);
            const types = await data.json();
            return dispatch({ type: FIND_TYPES, payload: types });
        } catch (error) {
            return dispatch({ type: FIND_TYPES, payload: error });
        }
    };
};

//* sync
export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, payload: currentPage };
};

export const filterPerTypes = (type) => {
    return { type: FILTER_PER_TYPES, payload: type };
};

export const filterPerOrigin = (origin) => {
    return { type: FILTER_PER_ORIGIN, payload: origin };
};

export const orderAscendentOrDescendent = (filter) => {
    return { type: ORDER_ASCENDENT_OR_DESCENDENT, payload: filter };
};

export const orderAZorZA = (filter) => {
    return { type: ORDER_A_Z_OR_Z_A, payload: filter };
};

export const orderAttack = (filter) => {
    return { type: ORDER_ATTACK, payload: filter };
};

export const setPokemon = () => {
    return { type: SET_POKEMON, payload: {} };
};

export const setPokemonDetail = () => {
    return { type: SET_POKEMON_DETAIL, payload: {} };
};
