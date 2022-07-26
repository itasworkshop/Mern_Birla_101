
import React, { useState } from "react";
const Grade = () => {
  const [cmark, setCmark] = useState();
  const [mmark, setMmark] = useState();
  const [pmark, setPmark] = useState();
  const [newentry, setNewentry] = useState();
  const [cmarkmsg, setCmarkMsg] = useState();
  const [mmarkmsg, setMmarkMsg] = useState();
  const [pmarkmsg, setPmarkMsg] = useState();
const[msg,setMsg] = useState(0)
  const [totalmsg, setTotal] = useState(0)
  const SubmitButton = () => {
    const newentry = { cmark: cmark, mmark: mmark, pmark: pmark };
    let grademark = 0;
    console.log(newentry);
    setNewentry(newentry);
    console.log(setNewentry);
    setCmarkMsg(cmark);
    setMmarkMsg(mmark);
    setPmarkMsg(pmark);
    const avg = (parseInt(cmark) + parseInt(mmark) + parseInt(pmark)) / 3;
    console.log(avg);
    setNewentry(avg);
    setTotal(avg);
    let grade =0;
      if(avg>90)
      {
    
    grade ="A";
    setMsg(grade);
      }
      else if(avg>70)
      {
        grade ="B";
    setMsg(grade);
      }
      else if(avg>50)
      {
        grade ="C";
    setMsg(grade);
      }
      else
      {
        grade ="Fail";
        setMsg(grade);
      }
   
  }
  return (
    <>
      <h1>Grade Student Calcultor</h1>
      <input type="text" placeholder="Enter chemistry Mark" value={cmark} onChange={(e) => setCmark(e.target.value)} />
      <br /><br />
      <input type="text" placeholder="Enter Math Mark" value={mmark} onChange={(e) => setMmark(e.target.value)} />
      <br /><br />
      <input type="text" placeholder="Enter Physics Mark" value={pmark} onChange={(e) => setPmark(e.target.value)} />
      <br /><br />
      <button onClick={SubmitButton}>Submit</button>
      <br />
      <p>Student details is: </p>
      <p>Chemistry Mark is:{cmarkmsg}</p>
      <p>Math  Mark is:{mmarkmsg}</p>
      <p>Physics Mark is:{pmarkmsg}</p>
      <p> student Avg Mark is:{totalmsg}</p>
      <p>Student Grade is:{msg}</p>

    </>
  )
}
export default Grade;
