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

    useEffect(() => {
        dispatch(getProducts(Product, Page, Sort));
        dispatch(getCondition(Condition));
    }, [getProducts, getCondition])

    return (
        <div >
            <ul class="pagination justify-content-center buttons">
                <li class="page-item">
                <a class="page-link" onClick={() => { dispatch(getProducts(Product, Page - 10, Sort)) }} >Previous</a>
                </li>
                <li class="page-item">
                <a class="page-link" onClick={() => { dispatch(getProducts(Product, Page + 10, Sort)) }}>Next</a>
                </li>
            </ul>
            <div class="cajaproductos">

                <div class="row">

                    <div class="col-3">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"
                        onClick={() => { dispatch(getProducts(Product, Page*0, Sort = 'relevance')) }}>Populares</a>
                        <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"
                        onClick={() => { dispatch(getProducts(Product, Page*0, Sort = 'price_desc')) }}>Mayor precio</a>
                        <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"
                        onClick={() => { dispatch(getProducts(Product, Page*0, Sort = 'price_asc')) }}>Menor precio</a>
                        <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"
                        onClick={() => { dispatch(getCondition(Product, Page, Sort, Condition = '2230284')) }}>Nuevo</a>
                        <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"
                        onClick={() => { dispatch(getCondition(Product, Page, Sort, Condition = '2230581')) }}>Usado</a>
                        </div>
                    </div>
                </div>

                <div>
                {!Products.length ? <div class="cataloguesearch"><h1>Realice su busqueda</h1></div> : 
                    Products.map(product =>
                        <ProductCard
                        imagen={product.thumbnail}
                        title={product.title}
                        price={product.price}
                        condition={product.condition}
                        stock={product.available_quantity}
                        id={product.id}
                    />)}
                </div>
            </div>
            <ul class="pagination justify-content-center buttons">
                <li class="page-item">
                <a class="page-link" onClick={() => { dispatch(getProducts(Product, Page - 15, Sort)) }} >Previous</a>
                </li>
                <li class="page-item">
                <a class="page-link" onClick={() => { dispatch(getProducts(Product, Page + 15, Sort)) }}>Next</a>
                </li>
            </ul>
        </div>
    )
}

export default Catalog;

