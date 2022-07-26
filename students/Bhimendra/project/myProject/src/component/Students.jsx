import React, { useState } from "react"
import { obj } from "./object"

export const Student=()=>{
    const [data,setData]=useState(obj)
   
    return(
        <div>
            <h2>Student Marks</h2>
            {
                data.map((item)=>{
                    return(
                        <div>
                            <h4>Name:-{item.name} CMarks:-{item.cmarks} PMarks:-{item.pmarks} MMarks:-{item.mmarks}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}