import React, { useState } from "react"
import { CurrencyConvert } from "./CurrencyConvert"

export const MultiCurrency=()=>{
    
const dollar = 1;
const rupee = 80;
const euro = 0.99;
const yuan = 6.75
    
  const [input, setInput] = useState(0);
  const [inputValue, setInputValue] = useState(0);
    const update1 = (e) =>{           
        console.log(e.target.value);
        if(e.target.value === "us"){
          setInputValue(parseFloat(input)/dollar);  
        }else if(e.target.value === "ind"){
          setInputValue(parseFloat(input)/rupee);
        }else if(e.target.value === "erp"){
          setInputValue(parseFloat(input)/euro);
        }else if(e.target.value === "yuan"){
          setInputValue(parseFloat(input)/yuan);
        }
        
      }


    return(
        <div>
            <h2>Multi Currency Convertor</h2>
            <input type="text"  value={input} onChange={(e) => {setInput(e.target.value)}} />
        <select   onChange={update1}  >
              <option value='' >Select country</option>
              <option value='ind'>Indian Rupee</option>
              <option value='us'>US Dollar</option>
              <option value='erp'>Euro</option>
              <option value='yuan'>Yuan</option>
        </select> 
            <CurrencyConvert 
        inputValue={inputValue} 
        dollar={dollar} 
        rupee={rupee} 
        euro={euro}
        yuan={yuan} />
           
        </div>
    )
}