import React from "react";
import axios from 'axios'

export default function SearchBar() {

    const handleSumit = function (e) {
        e.preventDefault();

        axios.get(`http://localhost:3001/api/search?query=` + e.target.searchbar.value)
        .then(res => {
            console.log(res.data.results)
        })
        .catch(error => {console.log(error)})
    };

    return (

        <nav>
            <form onSubmit={handleSumit}>
                <input
                    type="text"
                    placeholder="Buscar Producto"
                    name="searchbar"
                />

                <input type="submit" value="Buscar..." />
            </form>
            
        </nav>
    );
}