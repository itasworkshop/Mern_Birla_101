import React from "react";
import { useState } from "react";

export const Calculator=()=>{
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    

    return(
        <div>
            <h1>Calculator</h1>
          <input type= "Number" onChange={(e)=>setCount(e.target.value)}/>
          <input type="Number" onChange={(e)=>setCount1(e.target.value)}/>
          <h4>Addition:-{Number(count)+Number(count1)}</h4>
          <h4>Substraction:-{Number(count)-Number(count1)}</h4>
          <h4>Multiplication:-{Number(count)*Number(count1)}</h4>
          <h4>division:-{Number(count)/Number(count1)}</h4>

        </div>


    )
}