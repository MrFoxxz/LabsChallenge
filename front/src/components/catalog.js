import React, { Component} from "react"
//Containers (Componentes tontos)
import ProductCart from "./productdetails.js"

class Catalog extends Component{

    render() {
        return(
            <div>
                <ProductCart producto="detalles"/>
            </div>
        )
    }
}

export default Catalog;