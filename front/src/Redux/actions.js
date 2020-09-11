import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";

//Trae todos los productos

export function getAllProduct(product) {
    return function (dispatch) {
      return axios.get(`http://localhost:3001/api/search/${product}`)
        .then(ress => {
          dispatch({ type: GET_ALL_PRODUCTS, payload: ress });
        })
        .catch(err => {
          console.log(err)
        });
    }
  }
