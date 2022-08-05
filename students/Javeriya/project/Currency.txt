import React, { useState } from "react"

export const Currency=()=>{
    const [amount,setAmount]=useState(0)
    const [convert,setConvert]=useState("")
    const [convert1,setConvert1]=useState("")
    const handledollar=()=>{
            setConvert(amount.rupees/79.76)
    }
    const handlerupees=()=>{
            setConvert1(amount.dollar*79.76)
    }
    return(
        <div>
            <h2>Currency Conversion Using State:</h2>
            <h3>Rupees To Dollar Conversion</h3>
            <input type="number" placeholder="Enter Amount in Rupees" onChange={(e)=>setAmount({...amount,rupees:e.target.value})}/>
            <button onClick={()=>handledollar()}>Convert To Dollar</button>
            <h4>{amount.rupees} Rs = {convert}$</h4>
            <h3>Dollar To Rupees Conversion</h3>
            <input type="number" placeholder="Enter Amount in Dollar" onChange={(e)=>setAmount({...amount,dollar:e.target.value})}/>
            <button onClick={()=>handlerupees()}>Convert To Rupees</button>
            <h4>{amount.dollar}$ = {convert1} Rs</h4>
        </div>
    )
}