import { PRODUCTS, CONDITION, DETAILS } from "./actions";

const initialState = {
    currentproduct: "",
    products: [],
    currentoffset: "0",
    currentsort: '',
    condition: '',
    details:[],
    pictures:[]
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCTS: {
            return { ...state, 
                currentproduct: action.payload.query,
                products: action.payload.results,
                currentoffset: action.payload.paging.offset,
                currentsort: action.payload.sort.id,

            }
        }
        case CONDITION: {
            return {
                ...state,
                currentproduct: action.payload.query,
                products: action.payload.results,
                currentoffset: action.payload.paging.offset,
                currentsort: action.payload.sort.id,
                condition: action.payload.filters

            }
        }
        case DETAILS: {
            return { ...state, 
                details: action.payload,
                pictures: action.payload.pictures
            }
        }

        default:
        return state;
    }
}

export default rootReducer;