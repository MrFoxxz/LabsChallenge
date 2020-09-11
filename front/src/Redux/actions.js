import axios from 'axios';

export const PRODUCTS = 'PRODUCTS';

export function getProducts(payload) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/search?q=${payload}`)
            .then((res) => res.data.results)
            .then(data => {
                dispatch({ type: PRODUCTS, payload: data });
                console.log(data);
            })
            .catch(error => alert(error))
    }
}