import React, { useState } from 'react'

function MarksCal() {
    const [marks,setMarks]=useState({});
    const [stud1,setStud1]=useState([]);
  return (
    <div>
        <label>Id</label> {" "}
        <input type="text" onChange={()=>setMarks(e.target.value)}/> <br />
        <label>Name</label>{" "}
        <input type="text"/><br />
        <label>Cmarks</label>{" "}
        <input type="text"/><br />
        <label>Pmarks</label>{" "}
        <input type="text"/><br />
        <label>Mmarks</label>{" "}
        <input type="text"/><br />
    </div>
  )
}

export default MarksCal