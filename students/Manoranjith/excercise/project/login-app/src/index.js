import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"
import Currency from './Currency';
import './index.css';
import Login from './Login';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyComponent />

    
);

function MyComponent(){
  const [curr, setCurr] = useState("");

  const handleChange = (e) => {
    setCurr(e.target.value);
  }

  return(
    <div className='App'>
      <div className='App-header' >
      <input type={'text'} name="Currency" value={curr} placeholder="Type the value" onChange={handleChange} style={{ marginTop:"100px"}} />
      <Currency curr ={curr} />
      </div>
    
    <Login />
    <App />
  </div>
  )
}

