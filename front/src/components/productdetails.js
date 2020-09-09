import React from "react"

const ProductDetails = (props) => {
    
    return(
        <div>
            <h1>imgen</h1>
            <h1>{props.producto}</h1>
            <h3>Precio</h3>
            <h4>Condicion</h4>
            <h4>Stock</h4>
        </div>
    )
    
}

export default ProductDetails;