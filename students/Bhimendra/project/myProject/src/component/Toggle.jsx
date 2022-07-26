import React, { useState } from "react"

export const Toggle=()=>{
    const [tog,setTog]=useState(true)
    return(
        <div>
            <h2>Toggle</h2>
            {
            tog? <img src="img/vrt.jfif" alt="" />:<img src="img/abd.jfif" alt="" />
            }
            <button onClick={()=>setTog(!tog)}>Toggle</button>
        </div>
    )
}