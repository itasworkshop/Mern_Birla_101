import React, { useState } from "react"

export const Grade=()=>{
    const [grade,setGrade]=useState(0)
    const [show,setShow]=useState("")
    const gradecalc=()=>{
        if(grade>100){
            setShow("Percentage should be in between 0-100")
        }else if(grade>90 && grade<=100){
            setShow("Grade A")
        }else if(grade>80 && grade<=90){
            setShow("Grade B")
        }else if(grade>70 && grade<=80){
            setShow("Grade C")
        }else {
            setShow("Failed")
        }
        
    }

    return(
        <div>
            <h2>Grade</h2>
            <input type="text" placeholder="Enter Percentage" onChange={(e)=>setGrade(e.target.value)}/>
            <button onClick={()=>gradecalc()}>Submit</button>
            <h4>Percentage is {grade} and Grade is {show}</h4>
        </div>
    )
}