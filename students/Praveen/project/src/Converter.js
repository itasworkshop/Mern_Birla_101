import React, { useState } from "react"

export const Currency=()=>{
    const [amount,setAmount]=useState(0)
    const [convert,setConvert]=useState("")
    const [convert1,setConvert1]=useState("")
    const rupeesconverter=()=>{
            setConvert(amount.rupees/85.97)
    }
    const dolarconverter=()=>{
            setConvert1(amount.dollar*85.97)
    }
    return(
        <div>
           <h3>Converter</h3>
            <input type="number" placeholder="Rupees " onChange={(e)=>setAmount({...amount,rupees:e.target.value})}/>
            <button onClick={()=>rupeesconverter()}>rupees To Dollar</button>
            <h4>{amount.rupees} Rs = {convert}$</h4>
            <input type="number" placeholder="$ Dollar" onChange={(e)=>setAmount({...amount,dollar:e.target.value})}/>
            <button onClick={()=>dolarconverter()}>dollar To Rupees</button>
            <h4>{amount.dollar}$ = {convert1} Rs</h4>
        </div>
    )
}