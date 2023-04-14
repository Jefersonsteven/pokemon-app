import {
    FIND_POKEMONS,
    FIND_TYPES,
    SET_CURRENT_PAGE,
    FILTER_PER_TYPES,
    FILTER_PER_ORIGIN,
    ORDER_ASCENDENT_OR_DESCENDENT,
    ORDER_A_Z_OR_Z_A,
    ORDER_ATTACK,
} from "./actions";

const initialState = {
    pokemons: [],
    filterAndOrder: [],
    types: [],
    currentPage: 0,
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FIND_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                filterAndOrder: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case FIND_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case FILTER_PER_TYPES:
            if(action.payload === 'Alls types') {
                return {
                    ...state,
                    filterAndOrder: state.pokemons
                }
            } else {
                return {
                    ...state,
                    filterAndOrder: state.pokemons.filter(pokemon => {
                        return pokemon.Types?.includes(action.payload);
                    })
                }
            }
        case FILTER_PER_ORIGIN:
            if(action.payload === 'Alls Origins') {
                return {
                    ...state,
                    filterAndOrder: state.pokemons
                }
            }
            if(action.payload === 'API') {
                return {
                    ...state,
                    filterAndOrder: state.pokemons.filter(pokemon => {
                        return typeof pokemon.id === typeof 1
                    })
                }
            } else {
                return {
                    ...state,
                    filterAndOrder: state.pokemons.filter(pokemon => {
                        return typeof pokemon.id === typeof "1"
                    })
                }
            }
        case ORDER_ASCENDENT_OR_DESCENDENT:
            if(action.paylaod === 'Ascendent') {
                return {
                    ...state,
                    filterAndOrder: state.filterAndOrder.sort((a, b) => a.id - b.id),
                    currentPage:  1
                }
            } else {
                return {
                    ...state,
                    filterAndOrder: state.filterAndOrder.sort((a, b) => b.id - a.id)
                }
            }


        default:
            return {
                ...state,
            };
    }
}

export default rootReducer;
