import { PRODUCTS } from "./actions.js";

const initialState = {
    Products: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCTS: {
            return { ...state, Products: action.payload }
        }
        default:
            return state;
    }
}

export default rootReducer;