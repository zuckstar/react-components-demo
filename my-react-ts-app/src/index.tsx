import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import RouterConfig from './routes'
import { hashHistory } from "react-router"
import 'phantom-canyon/build/index.css'


ReactDOM.render(
  <React.StrictMode>
    <RouterConfig history={hashHistory}/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
