import React, { useEffect } from 'react';
import { getProducts } from '../Redux/actions.js'
import ProductCard from './productcard.js'
import { useSelector, useDispatch } from "react-redux"
import "../styles/catalog.css"

const Catalog = () => {

    const Products = useSelector(state => state.Products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts());
    }, [getProducts])

    return (
        <div class="catalogue">
            <button>anterior</button>
            <button>siguiente</button>
            {Products && Products.map(product =>
                <ProductCard
                    imagen={product.thumbnail}
                    title={product.title}
                    price={product.price}
                    condition={product.condition}
                    stock={product.available_quantity}
                />)}
        </div>
    )
}

export default Catalog;