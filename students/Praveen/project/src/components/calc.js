import React,{useState} from 'react'

export default function Calc(){
    const [num1,setNum1]=useState(0);
    const[num2,setNum2]=useState(0);



return(
    <div>
        <h1>simple claculator</h1>
        <input type="text" onChange={(e)=>setNum1(e.target.value)}/>
        <input type="text" onChange={(e)=>setNum2(e.target.value)}/>
<h3>addtion is: {Number(num1)+Number(num2)}</h3>
<h3>sub is: {(num1)-(num2)}</h3>
<h3>mul is: {(num1)*(num2)}</h3>
<h3>div is: {(num1)/(num2)}</h3>
    </div>
)}