import React, { useState } from 'react'

function Gradecal() {
        const [num1,setNum1]=useState(0)
        const [display,setDisplay]=useState("")
        const show =()=>{
                if (num1 > 90){
                        setDisplay("Grade A");
                }
                else if (num1 > 80){
                        setDisplay("Grade B");
                }
                else if (num1 > 70){
                        setDisplay("Grade C");
                }
               else  if (num1 > 60){
                        setDisplay("Grade D");
                }
                else if (num1<60){
                        setDisplay("Failed")
                }
        }
  return (
    <div>
<h1>Grade</h1>
<input type="text" onChange={(e)=>setNum1(e.target.value)} />
<button onClick={()=>show()} > Submit</button>
 

 <h1> Your Marks Are {num1} and your grade is {display} </h1>

    </div>
  )
}

export default Gradecal