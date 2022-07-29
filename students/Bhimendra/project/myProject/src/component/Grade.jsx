import React, { useState } from "react"

export const Grade=()=>{
    const [marks,setMarks]=useState(0)
    const [show,setShow]=useState("")
    const total= Number(marks.mmarks)+Number(marks.pmarks)+Number(marks.cmarks)
    const data=(Number(marks.mmarks)+Number(marks.pmarks)+Number(marks.cmarks))/3
    const gradecalc=()=>{
        if(data>100){
            setShow("Percentage should be in between 0-100")
        }else if(data>90 && data<=100){
            setShow("Grade A")
        }else if(data>80 && data<=90){
            setShow("Grade B")
        }else if(data>70 && data<=80){
            setShow("Grade C")
        }else {
            setShow("Failed")
        }
        
    }

    return(
        <div>
            <h2>Grade</h2>
            <input type="text" onChange={(e)=>setMarks({...marks,mmarks:e.target.value})}/>
            <input type="text" onChange={(e)=>setMarks({...marks,pmarks:e.target.value})} />
            <input type="text" onChange={(e)=>setMarks({...marks,cmarks:e.target.value})}/>
            <button onClick={()=>gradecalc()}>Submit</button>
            <h4>Mmarks:-{marks.mmarks}</h4>
            <h4>Pmarks:-{marks.pmarks}</h4>
            <h4>Cmarks:-{marks.cmarks}</h4>
            <h4>Total Marks is {total} Percentage is {data}% and Grade is {show}</h4>
            <hr />
        </div>
    )
}