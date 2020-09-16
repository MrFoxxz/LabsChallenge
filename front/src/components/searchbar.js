import React, { useState } from 'react';
import { getProducts } from '../Redux/actions.js';
import { useDispatch } from 'react-redux';
import "../styles/catalog.css"

export default function SearchBar() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function submitSearch(e, data) {
        e.preventDefault();
        
        dispatch(getProducts(data))
    }

    return (
        <nav class="navbar navbar-dark bg-dark searchbar">
        <form class="form-inline" onSubmit={(e) => submitSearch(e, input)}>
            <input class="form-control mr-sm-2" placeholder="Buscar" type="search" aria-label="Search" 
                onChange={(e) => 
                setInput(e.target.value)}
            />
            <button class="btn btn-outline-info" type="submit">Buscar</button>
        </form>
        </nav>

    )

}