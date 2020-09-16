import React from 'react';
import "../styles/productcard.css"
import { Link } from 'react-router-dom'

const ProductCard = ({imagen, title, price, condition, stock, id}) =>{

    function recarga() {
        window.location.href = `http://localhost:3000/details/${id}`
    }

 return(
    <div class="productcard">
        
            <Link to={`/products/details/${id}`}>
                <img class="productimg" onClick={() => recarga()} src={imagen}></img>
            </Link>

            <div class="productdetails">
                
            <Link to={`/products/details/${id}`}>
                <h3 onClick={() => recarga()}>{title}</h3>
            </Link>
            
            <h4>$ {price}</h4>
            <p>{condition}</p>
            <p>Stock disponible {stock}</p>
            <p>{id}</p>
        </div>
    </div>
 )
}
  
  export default ProductCard;
