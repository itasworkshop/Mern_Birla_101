import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function MyHello(){
  return <h1>Hello from my hello.</h1>;
}


function YourHello(){
  return <h1>Hello from your hello.</h1>;
}

function SayHello(props){
  const isTrue = props.isTrue;

  if(isTrue){
    return <MyHello />;
  }else{
    return <YourHello />;
  }
}

ReactDOM.render(
  <SayHello isTrue={false}/>, document.getElementById('root')
);