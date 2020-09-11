import React from 'react';
import "../styles/productcard.css"

const ProductCard = ({imagen, title, price, condition, stock}) =>(
 
    <div class="productcard">
        <img class="productimg" src={imagen}></img>
        <div class="productdetails">
            <h3>{title}</h3>
            <h4>$ {price}</h4>
            <p>{condition}</p>
            <p>Stock disponible {stock}</p>
        </div>
    </div>
  )
  
  export default ProductCard;
