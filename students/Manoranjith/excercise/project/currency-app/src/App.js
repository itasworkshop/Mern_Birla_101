import React,{  useState } from 'react';
import './App.css';
import CurrencyCalculator from './CurrencyCalculator';

const dollar = 1;
const rupee = 79.89;
const dinar = 145.65;
const dram = 403.40;
const euro = 0.99;

//input -> have some output that will be the inputvalue of another condition -> output

function App() {
  const [input, setInput] = useState(0);
  // const [out, setOut] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  // const update = (e) =>{ 
  //   console.log(e.target.value);

  //   if(e.target.value === "us"){
  //     setOut(parseFloat(inputValue)*dollar);
  //   }else if(e.target.value === "dnr"){
  //     setOut(parseFloat(inputValue)*dinar);
  //   }else if(e.target.value === "drm"){
  //     setOut(parseFloat(inputValue)*dram);
  //   }else if(e.target.value === "ind"){
  //     setOut(parseFloat(inputValue)*rupee);
  //   }else if(e.target.value === "erp"){
  //     setOut(parseFloat(inputValue) * euro);
  //   }
  // }



  const update1 = (e) =>{              //input
    console.log(e.target.value);
    if(e.target.value === "us"){
      setInputValue(parseFloat(input)/dollar);  // setInputValue -> it will updated the current state
    }else if(e.target.value === "dnr"){
      setInputValue(parseFloat(input)/dinar);
    }else if(e.target.value === "drm"){
      setInputValue(parseFloat(input) / dram);
    }else if(e.target.value === "ind"){
      setInputValue(parseFloat(input)/rupee);
    }else if(e.target.value === "erp"){
      setInputValue(parseFloat(input)/euro);
    }
  }

  console.log(input);
  console.log(inputValue);

  return (
    <div className="App">
      <header className="App-header">
        <div cellSpacing="10px">
          <header>
            <h3>Currency Calculator</h3>
          </header>
      
       <div>
        <input type="text"  value={input} onChange={(e) => {setInput(e.target.value)}} />
        <select   onChange={update1}  >
              <option value='' >Select country</option>
              <option value='ind'>Indian Rupee</option>
              <option value='us'>US Dollar</option>
              <option value='drm'>Armanian Dram</option>
              <option value='dnr'>Algerian Dinar</option>
              <option value='erp'>Euro</option>
        </select> 
       </div>
       
       <div>
        <CurrencyCalculator 
        inputValue={inputValue} 
        dollar={dollar} 
        rupee={rupee} 
        euro={euro}
        dinar={dinar}
        dram={dram}  />
       </div>
       {/* <div>
        <input type="text"  value={out} />
        <select   onChange={update} >
              <option value="" >Select country</option>
              <option value="ind" >Indian Rupee</option>
              <option value="us" >US Dollar</option>
              <option value="drm" >Armanian Dram</option>
              <option value="dnr" >Algerian Dinar</option>
              <option value="erp" >Euro</option>
        </select> 
       </div> */}

       </div>
      </header>
    </div>
  );
}

export default App;
