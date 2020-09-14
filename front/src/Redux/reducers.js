import { PRODUCTS, CONDITION } from "./actions";

const initialState = {
    currentproduct: "",
    products: [],
    currentoffset: "0",
    currentsort: '',
    condition: ''
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCTS: {
            return { ...state, 
                currentproduct: action.payload.query,
                products: action.payload.results,
                currentoffset: action.payload.paging.offset,
                currentsort: action.payload.sort
            }
        }
        case CONDITION: {
            return {
                ...state,
                currentproduct: action.payload.query,
                products: action.payload.results,
                currentoffset: action.payload.paging.offset,
                currentsort: action.payload.sort,
                condition: action.payload.ITEM_CONDITION

            }
        }

        default:
        return state;
    }
}

export default rootReducer;