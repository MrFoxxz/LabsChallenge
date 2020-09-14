import React, { useEffect } from 'react';
import { getProducts, getCondition } from '../Redux/actions.js'
import ProductCard from './productcard.js'
import { useSelector, useDispatch } from "react-redux"
import "../styles/catalog.css"

const Catalog = () => {

    const dispatch = useDispatch()
    const Product = useSelector(state => state.currentproduct)
    const Products = useSelector(state => state.products)
    const Page = useSelector(state => state.currentoffset)
    var Sort = useSelector(state => state.currentsort)
    var Condition = useSelector(state => state.condition)

    console.log(Product)
    console.log(Products)
    console.log(Page)
    console.log(Sort)

    useEffect(() => {
        dispatch(getProducts(Product, Page, Sort));
        dispatch(getCondition(Condition));
    }, [getProducts, getCondition])

    return (
        <div class="catalogue">
            
            <button onClick={() => { dispatch(getProducts(Product, Page - 10, Sort)) }}>Prev</button>
            <button onClick={() => { dispatch(getProducts(Product, Page + 10, Sort)) }}>Next</button>

            <button onClick={() => { dispatch(getProducts(Product, Page, Sort = 'price_asc')) }}>Menor precio</button>
            <button onClick={() => { dispatch(getProducts(Product, Page, Sort = 'price_desc')) }}>Mayor precio</button>

            <button onClick={() => { dispatch(getCondition(Product, Page, Sort, Condition = '2230582')) }}>Reacondicionado</button>
            <button onClick={() => { dispatch(getCondition(Product, Page, Sort, Condition = '2230581')) }}>Usado</button>
            <button onClick={() => { dispatch(getCondition(Product, Page, Sort, Condition = '2230284')) }}>Nuevo</button>

            {!Products.length ? <div><h1>Realice su busqueda</h1></div> : 
            Products.map(product =>
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

