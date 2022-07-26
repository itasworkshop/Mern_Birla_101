import React, { useState } from "react"

export const CurrencyProps=(props)=>{
    const [convert,setConvert]=useState("")
    const [convert1,setConvert1]=useState("")
    const handledollar=()=>{
        setConvert(props.rupees/79.76)
    }
    const handlerupees=()=>{
        setConvert1(props.rupees*79.76)
    }
   
    return(
        <div>
            <h2>Currency Conversion Using Props:</h2>
            <h3>Rupees To Dollar Conversion</h3>
            <button onClick={()=>handledollar()}>Convert To Dollar</button>
            <h4> {convert}$</h4>
            <h3>Dollar To Rupees Conversion</h3>
            <button onClick={()=>handlerupees()}>Convert To Rupees</button>
            <h4> {convert1} Rs</h4>
        </div>
    )
}