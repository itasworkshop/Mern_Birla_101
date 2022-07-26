import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

//Component --> basic building block for our application
//Two types of components --> 1) Functiona Based components
//                            2) Class Based Comonent

function App(props){
  return <h1>Hello World {props.name1} {props.name2}</h1>;
}

ReactDOM.render(
  <App name1="Rajesh" name2="Sharma"/>, document.getElementById('root')
);

