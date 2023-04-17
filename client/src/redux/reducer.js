import {
    FIND_POKEMONS,
    FIND_POKEMON_BY_NAME,
    FIND_POKEMON_BY_ID,
    FIND_TYPES,
    SET_CURRENT_PAGE,
    FILTER_PER_TYPES,
    FILTER_PER_ORIGIN,
    ORDER_ASCENDENT_OR_DESCENDENT,
    ORDER_A_Z_OR_Z_A,
    ORDER_ATTACK,
    SET_POKEMON,
    SET_POKEMON_DETAIL
} from "./actions";

const initialState = {
    pokemons: [],
    filterAndOrder: [],
    types: [],
    currentPage: 0,
    pokemon: [],
    pokemonDetail: [],

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
            if(action.payload === 'Ascendent') {
                return {
                    ...state,
                    filterAndOrder: [...state.filterAndOrder.sort((a, b) => b.id - a.id)],
                    
                }
            } else {
                return {
                    ...state,
                    filterAndOrder: [...state.filterAndOrder.sort((a, b) => a.id - b.id)]
                }
            }

        case ORDER_A_Z_OR_Z_A:
            if(action.payload === "A-Z") {
                return {
                    ...state,
                    filterAndOrder: [...state.filterAndOrder.sort((a, b) => {
                        if(a.name < b.name) {
                            return -1;
                        }
                        if(a.name > b.name) {
                            return 1;
                        }
                        return 0;
                    })]
                }
            }
            if(action.payload === "Z-A") {
                return {
                    ...state,
                    filterAndOrder: [...state.filterAndOrder.sort((a, b) => {
                        if(b.name < a.name) {
                            return -1;
                        }
                        if(b.name > a.name) {
                            return 1;
                        }
                        return 0;
                    })]
                }
            }

            case ORDER_ATTACK:
                if(action.payload === 'Lesser attack') {
                    return {
                        ...state,
                        filterAndOrder: [...state.filterAndOrder.sort((a, b) => a.attack - b.attack)],
                        
                    }
                } else {
                    return {
                        ...state,
                        filterAndOrder: [...state.filterAndOrder.sort((a, b) => b.attack - a.attack)]
                    }
                }

            
            case FIND_POKEMON_BY_NAME:
                return {
                    ...state,
                    pokemon: [ action.payload ]
                }

            
            case FIND_POKEMON_BY_ID:
                return {
                    ...state,
                    pokemonDetail: [ action.payload ]
                }

            case SET_POKEMON:
                return {
                    ...state,
                    pokemon: action.payload
                }

            case SET_POKEMON_DETAIL:
                return {
                    ...state,
                    pokemonDetail: action.payload
                }


        default:
            return {
                ...state,
            };
    }
}

export default rootReducer;
