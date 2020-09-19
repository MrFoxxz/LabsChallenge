import React, { useEffect } from 'react';
import { getDetails } from '../Redux/actions.js'
import { useSelector, useDispatch } from "react-redux"
import ProductDetails from './productdetails.js'
import Header from './header.js';
import Img from './imagenes.js';

const Details = (Product) => {

    const dispatch = useDispatch()
    const Details = useSelector(state => state.details)
    const Pictures = useSelector(state => state.pictures)

    useEffect(() => {
        dispatch(getDetails(Product.id));
    }, [getDetails])
    
    console.log(Details)

    return (
        <div class="catalogue">
            <Header/>
            <div class="detailsbox">
               {
                <ProductDetails   
                    imagen={Details.thumbnail}
                    title={Details.title}
                    price={Details.price}
                    condition={Details.condition}
                    stock={Details.available_quantity}
                    id={Details.id}
                    warranty={Details.warranty}
                    link={Details.permalink}
                />}
                <div class="imgbox">
                {Pictures.map(i =>
                    <Img
                    url={i.url}
                    />)}
                </div>
        
            </div>
        </div>
    )
}

export default Details;

