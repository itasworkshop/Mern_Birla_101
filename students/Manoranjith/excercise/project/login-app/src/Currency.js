import React, { useState } from 'react'
import "./App.css";

export default function Currency({curr}) {
   
    const [dol, setDol] = useState("")
    const [rup, setRup] = useState("")

    

    const dollarToRupee = () => {
        setDol(
            parseInt(curr) * 79.78
        );
    }

    const rupeeToDollar = () => {
        setRup(
            parseInt(curr) / 79.78
        );
    }

  return (
    <div className='App-header' >
        
        <div>
        <button onClick={dollarToRupee} > Dollar to Rupee </button>  <br />
        <button onClick={rupeeToDollar} > Rupee to Dollar </button> 
        </div>
        <h2>{curr} Dollar = ₹{dol} </h2> <h2> {curr} Rupee = ${rup} </h2>
        
    </div>
  )
}
