import React from "react"
import SearchBar from "./searchbar.js";
import Catalog from "./catalog.js";
import Header from "./header.js";

const Home = () => {
    
    return(
        <div>
            <Header/>
            <SearchBar />
            <Catalog />
    </div>
    )
}

export default Home;