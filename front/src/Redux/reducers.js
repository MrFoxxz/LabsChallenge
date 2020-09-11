import {GET_ALL_PRODUCTS, SEARCH_PRODUCT} from "./actions.js"

const initialState = {
  allproducts: [],
  searchproduct: [],
};

function rootReducer(state = initialState, action) {

  if (action.type === GET_ALL_PRODUCTS) {
    return {
      ...state,
      allproducts: action.payload  //modifico allproducts del store, agregando todos los productos de la bd
    }
  }

  if (action.type === SEARCH_PRODUCT) {
    return {
      ...state,
      searchproduct: action.payload  // modifico searchproduct del store, agregando los producto que machean
    }
  }

  return state
}

export default rootReducer;

