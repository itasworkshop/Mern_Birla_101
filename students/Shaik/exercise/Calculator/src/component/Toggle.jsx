
import React, { useState } from 'react'

function Toggle() {
  const [play,setPlay]=useState(true);
  const toggleimage=()=> setPlay(!play)
  return (
    <div>

      <button onClick={toggleimage} >Toggle image </button> 
      <br />
      {play && <img src='./Images/D1.jpg' alt='Dhoni' width="20%"/>}
      {!play && <img src='./Images/D2.jpg' alt='DhoniShot'/>}
    </div>
  )
}

export default Toggle
