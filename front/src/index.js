import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import  { Provider } from 'react-redux';
import store from "./Redux/store.js"
import * as serviceWorker from './serviceWorker';
//Componentes
import Page from "./components/page.js";
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Page/>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

serviceWorker.unregister();
