import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


export function Calc(props){
  return(
    <div>
        <h2>Addition:- {Number(props.num1)+Number(props.num2)}</h2>
        <h2>Substraction:- {props.num1-props.num2}</h2>
        <h2>Multiplication:- {props.num1*props.num2}</h2>
        <h2>Division:- {props.num1/props.num2}</h2>
    </div>
  )
}

ReactDOM.render(
  <Calc num1="20" num2="20"/>, document.getElementById('root')
);