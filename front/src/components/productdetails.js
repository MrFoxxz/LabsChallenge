import React from 'react';
import "../styles/productdetails.css"

const ProductDetails = ({imagen, title, price, condition, stock, id, warranty, link}) =>(
 
    <div class="productcardD">
  {/*<img class="productimgD" src={imagen}></img> */}
        <div class="productdetailsD">
            <h3>{title}</h3>
            <h4>$ {price}</h4>
            <p>{condition}</p>
            <p>Stock disponible: {stock}</p>
            <p>{warranty}</p>
            <a href={link}>Informacion en Mercadolibre</a>
            <p>ID: {id}</p>
        </div>
    </div>
  )
  
  export default ProductDetails;
