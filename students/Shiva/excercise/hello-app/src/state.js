import React, { useState } from "react";
const State = () =>{
const [count,setCount] =useState(0)
const setclick =()=>{
setCount(count+1);
}
return(
    <>
 <h1>{count}</h1>
    <button onClick={setclick}>click</button>
    </>
   
)
}
export default State;