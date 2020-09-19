import React from 'react';
import "../styles/productcard.css"

const Img = ({url}) =>{

 return(
    <div>
       <img class="productimgD" src={url}></img>
    </div>
 )
}
  
  export default Img;
