import React, { useState } from 'react';
import { getProducts } from '../Redux/actions.js';
import { useDispatch } from 'react-redux';



export default function SearchBar() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function submitSearch(e, data) {
        e.preventDefault();

        dispatch(getProducts(data))
    }

    return (

        <form onSubmit={(e) => submitSearch(e, input)}>
            <input placeholder="Buscar"  type="search" aria-label="Search" 
                onChange={(e) => 
                setInput(e.target.value)}
            />
            <button type="submit">Buscar</button>
        </form>

    )

}