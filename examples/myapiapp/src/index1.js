import React from 'react';
import {ReactDOM,render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <App />  
  </BrowserRouter>, document.querySelector('#root')
)
