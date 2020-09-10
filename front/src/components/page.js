import React, { Component} from "react"
//Containers (Componentes tontos)
import ProductCart from "./productdetails.js"
import ProductDetails from "./productcart.js"

class Product extends Component{

    render() {
        return(
            <div>
                <ProductCart producto="detalles"/>
                <ProductDetails producto="carta"/>
            </div>
        )
    }
}

export default Product;