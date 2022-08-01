import React, { useState } from 'react';
function App() {
  const [cmark, setCmark] = useState();
  const [mmark, setMmark] = useState();
  const [pmark, setPmark] = useState();
  const [newentry, setNewentry] = useState();
  const [cmarkmsg, setCmarkMsg] = useState(0);
  const [mmarkmsg, setMmarkMsg] = useState(0);
  const [pmarkmsg, setPmarkMsg] = useState(0);
  const [total, setTotal] = useState(0)
  const [gradevalue, setGradevalue] = useState(0);

  const SubmitButton = () => {
    const newentry = { cmark: cmark, pmark: pmark, mmark: mmark };
    let grade = 0;
    console.log(newentry);
    setNewentry(newentry);
    const avg = (parseInt(cmark) + parseInt(mmark) + parseInt(pmark)) / 3;
    console.log(avg);
    setNewentry(avg);
    setCmarkMsg(cmark);
    setMmarkMsg(mmark);
    setPmarkMsg(pmark);
    setTotal(avg);
    if (avg >= 90) {
      grade = "a";
    }
    else if (avg >= 70) {
      grade = "b";
    }
    else if (avg >= 60) {
      grade = "c";
    }
    else {
      grade = "fail";
    }
    console.log(grade);
    setGradevalue(grade);
  }
  return (
    <>
      <h1>student calcultor</h1>
      <br /><br />

      <input type="text" placeholder='Enter the Chemistry Mark' value={cmark} onChange={(e) => setCmark(e.target.value)} />
      <br /><br />
      <input type="text" placeholder='Enter the Math Mark' value={mmark} onChange={(e) => setMmark(e.target.value)} />
      <br /><br />
      <input type="text" placeholder='Enter the Physics Mark' value={pmark} onChange={(e) => setPmark(e.target.value)} />
      <br /><br />
      <button onClick={SubmitButton} >submit</button>
      <p>Student Mark is:</p>
      <p>Chemistry mark is:{cmarkmsg}</p>
      <p>Math mark is:{pmarkmsg}</p>
      <p>Physics mark is:{mmarkmsg}</p>
      <p>Avg is: {total}</p>
      <p>student grade is:{gradevalue}</p>
    </>
  );
}

export default App;
