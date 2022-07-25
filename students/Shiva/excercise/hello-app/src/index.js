import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 import Grade from './grade';
import One from './one';
import Second from './second';
// import Props from './props';
// import State from './state';



ReactDOM.render(
    <>
        <App/>
        <Grade/>
        {/* <Props/>
        <State/> */}
        <One/>
        <Second/>
      
    </>,
    document.getElementById("root")
)


