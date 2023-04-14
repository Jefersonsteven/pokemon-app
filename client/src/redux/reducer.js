import {
    FIND_POKEMONS,
    SET_CURRENT_PAGE
} from "./actions";

const initialState = {
    pokemons: [],
    currentPage: 0,
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FIND_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }


        default:
            return {
                ...state,
            };
    }
}

export default rootReducer;
