import React, { useState } from "react"

export const Calculator=()=>{
    const [cnt,setCnt]=useState(0)
    const [cnt1,setCnt1]=useState(0)
   
    return(
        <div>
            <h2>Calculator</h2>
            <input type="text" placeholder="Enter Number" onChange={(e)=>setCnt(e.target.value)}/>
            <input type="text" placeholder="Enter Number" onChange={(e)=>setCnt1(e.target.value)}/>

            <h4>Addition:-{Number(cnt)+Number(cnt1)}</h4>
            <h4>Substraction:-{cnt-cnt1}</h4>
            <h4>Multiplication:-{cnt*cnt1}</h4>
            <h4>Division:-{cnt/cnt1}</h4>
            <hr />
        </div>
    )
}