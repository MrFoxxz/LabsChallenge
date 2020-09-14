import axios from 'axios';

export const PRODUCTS = 'PRODUCTS';
export const CONDITION = 'CONDITION'

/* export const NEXT = 'NEXT';
export const PREV = 'PREV'; */

export function getProducts(payload, offset = 0, sort) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/search?q=${payload}&offset=${offset}&sort=${sort}`)
            .then((res) => res.data)
            .then(data => {
                dispatch({ type: PRODUCTS, payload: data });
                console.log(data);
            })
            .catch(error => alert(error))
    }
}

export function getCondition(payload, offset = 0, sort, condition) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/search/condition?q=${payload}&offset=${offset}&sort=${sort}&ITEM_CONDITION=${condition}`)
            .then((res) => res.data)
            .then(data => {
                dispatch({ type: CONDITION, payload: data });
                console.log(data);
            })
            .catch(error => alert(error))
    }
}
/* const url = `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=10&offset=${req.body.o}`
 */
