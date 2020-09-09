import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//Componentes
import Product from "./components/product.js";

ReactDOM.render(
  <React.StrictMode>
    <Product/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
