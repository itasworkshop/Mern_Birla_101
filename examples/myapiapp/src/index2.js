import React, { useEffect, useState } from 'react';
import {ReactDOM,render} from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter } from 'react-router-dom';


function Timer(){
  const[count,setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count => count +1);
    }, 1000);
  });

  return <h1>The current counter is updated {count} times.</h1>
}

render(
  <Timer />, document.querySelector('#root')
)
