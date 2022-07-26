
import React, { useState } from 'react'

function Toggle(props) {
  const [play,setPlay]=useState(true);
  const toggleimage=()=> setPlay(!play)
  return (
    <div>

      <button onClick={toggleimage} >Toggle image </button> 
      <br />
      {play && <img src={props.img1} alt='Dhoni' width="20%"/>}
      {!play && <img src={props.img2} alt='DhoniShot'/>}
    </div>
  )
}

export default Toggle
