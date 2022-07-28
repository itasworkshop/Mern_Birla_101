import React from "react";
import { useState } from "react";

export const Currency=(props)=>{
    const[rate,setRate]= useState("");
    const[rsrate,setRsrate]= useState("");

    const handleClick=()=>{
    setRate (props.dollar*79)
    }
    const handlerClick=()=>{
        setRsrate(props.Rupees/79)
    }

    return(
        <div>
            <h1>Currency Conversion</h1>
            <h4>Dollar to Rupees using props</h4>
            {/* <input type="number" onChange={(e)=> setRate(e.target.value)} /> */}
            <button onClick={handleClick}>Submit</button>
            <h4>{rate}Rs</h4>

            <h4>Rupees to Dollar</h4>
            <button onClick={handlerClick}>Submit</button>
            <h4>{rsrate}$</h4>

        </div>
    )
}