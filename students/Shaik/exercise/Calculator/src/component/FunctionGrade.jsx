import React, { useState } from 'react'

function FunctionGrade() {
    const [grade,setGrade]=useState({name:"Ahad",Id: 101, Cmarks: 85, Pmarks:69,Mmarks: 96});
    const [student,setStudent]=useState([]);
    const [display,setDisplay]=useState("");
    const Total = Number(grade.Cmarks) + Number(grade.Pmarks) + Number(grade.Mmarks);
    console.log(Total);
    const Percentage= Total/3;
    const show =()=>{
 setStudent([...student,grade]);
            if (Percentage > 90){
                    setDisplay("Grade A");
            }
            else if (Percentage >= 80){
                    setDisplay("Grade B");
            }
            else if (Percentage >= 70){
                    setDisplay("Grade C");
            }
           else  if (Percentage >= 60){
                    setDisplay("Grade D");
            }
            else if (Percentage < 60){
                    setDisplay("Failed")
            }
    }
  return (
    <div>
<h1>Grade</h1>
{/* <input type="text" onChange={(e)=>setNum1(e.target.value)} /> */}
 

<div>

<label>Id</label> {" "}
        <input type="text" onChange={(e)=>setGrade({...grade, Id: e.target.value})}/> <br />
        <label>Name</label>{" "}
        <input type="text" onChange={(e)=>setGrade({...grade, name: e.target.value})}/><br />
        <label>Cmarks</label>{" "}
        <input type="text" onChange={(e)=>setGrade({...grade, Cmarks: e.target.value})}/><br />
        <label>Pmarks</label>{" "}
        <input type="text" onChange={(e)=>setGrade({...grade, Pmarks: e.target.value})}/><br />
        <label>Mmarks</label>{" "}
        <input type="text" onChange={(e)=>setGrade({...grade, Mmarks: e.target.value})}/><br />

<button onClick={()=>show()} > Submit</button> <br />

<h3> Welcome {grade.name} Your Marks Are {Total} and your grade is {display} </h3>
        <h2> And Congratulation You Scored {Percentage} %</h2>
</div>

{
student.map((item)=>{
    return(
        <div>
            <h4>ID:-{item.Id}</h4>
            <h4>Name:-{item.name}</h4>
            <h4>Cmarks:-{item.Cmarks}</h4>
            <h4>Pmarks:-{item.Pmarks}</h4>
            <h4>Mmarks:-{item.Mmarks}</h4>
            <h4>
                Total Marks :-{
                    Number(item.Mmarks)+
                    Number(item.Cmarks)+
                    Number(item.Pmarks)
                }
            </h4>
            <h4>
                Percentage:-
                {(Number(item.Mmarks)+
                    Number(item.Cmarks)+
                    Number(item.Pmarks))/3}
            </h4> <br />
        </div>
    )
})

}
    </div>

  )
}

export default FunctionGrade