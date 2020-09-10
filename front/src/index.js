import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//Componentes
import Product from "./components/page.js";

ReactDOM.render(
  
  <BrowserRouter>
    <Product/>
    </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
