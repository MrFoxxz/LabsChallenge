import React, { useEffect } from 'react';
import { getDetails } from '../Redux/actions.js'
import { useSelector, useDispatch } from "react-redux"
import ProductDetails from './productdetails.js'

const Details = (Product) => {

    const dispatch = useDispatch()
    const Details = useSelector(state => state.details)

    useEffect(() => {
        dispatch(getDetails(Product.id));
    }, [getDetails])
    console.log(Details)

    return (
        <div class="catalogue">
               {
                <ProductDetails   
                    imagen={Details.thumbnail}
                    title={Details.title}
                    price={Details.price}
                    condition={Details.condition}
                    stock={Details.available_quantity}
                    id={Details.id}
                    warranty={Details.warranty}
                />}
        </div>
    )
}

export default Details;

