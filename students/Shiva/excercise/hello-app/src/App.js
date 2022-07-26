

import React, { useState } from "react";
const App = () => {
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [newentry, setNewentry] = useState()
  const [msg,setMsg] = useState(0)
  const AddButton = () => {
    const newentry = { num1: num1, num2: num2 };
    console.log(newentry)
    const total = parseInt(num1) + parseInt(num2);
    console.log(total);
    setNewentry(total);
    console.log(setNewentry);
  setMsg(total) 

  }
  const SubButton = () => {
    const newentry = { num1: num1, num2: num2 };
    console.log(newentry);
    const total = parseInt(num1) - parseInt(num2);
    console.log(total);
    setNewentry(total);
    setMsg(total) 
  }
  const MutliButton = () => {
    const newentry = { num1: num1, num2: num2 };
    console.log(newentry);
    const total = parseInt(num1) * parseInt(num2);
    console.log(total);
    setNewentry(total);
    setMsg(total) 
  }
  const DivButton = () => {
    const newentry = { num1: num1, num2: num2 };
    console.log(newentry);
    const total = parseInt(num1) / parseInt(num2);
    console.log(total);
    setNewentry(total);
    setMsg(total) 
  }

  return (
    <>
      <h1> Student Calcultor</h1>
      <input type="text" placeholder="Enter the Number1" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <br /><br />
      <input type="text" placeholder="Enter the Number2" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <br /><br />
      <button style={{ margin: "2px" }} onClick={AddButton}>Add</button>
      <button style={{ margin: "2px" }} onClick={SubButton}>Sub</button>
      <button style={{ margin: "2px" }} onClick={MutliButton}>Multi</button>
      <button style={{ margin: "2px" }} onClick={DivButton}>Div</button>
      <h1>Result is:{msg}</h1>
    </>
  )
}
export default App;