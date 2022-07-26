import React,{useState} from 'react'

function Calculator() {
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    // const[add,setAdd]=useState();
// const handleAdd =()=>{
//   set
// }
  return (

    <div>
<input type="text" onChange={(e)=> setNum1(e.target.value)} /> {" "}
<input type="text" onChange={(e)=> setNum2(e.target.value)} />
 <h1>Addition :- {Number(num1)+ Number(num2)} </h1>
 <h1>Subtraction :- {num1-num2} </h1>
 <h1>Multiplication :- {num1*num2} </h1>
 <h1>Division :- {num1/num2} </h1>
 {/* <button onClick={handleAdd}>Add</button>
 <button>Sub</button>
 <button>Div</button>
 <button>Multiply</button> */}
    </div>
  )
}

export default Calculator