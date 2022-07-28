import React,{useState} from 'react'

export default function Percentage(){

    const[grade,setGrade]=useState({})
    const[student1,setStudent1]=useState([])

    const addGrade=()=>{
        setStudent1({...student1,grade});
    }

    const [data]=student1;
    console.log(grade);
    console.log(student1);

    return(
        <div>
            <h3>Grades</h3>

            <input type="text" onChange={(e)=>setGrade({...grade,name:e.target.value})}/>

            <input type="number" 
            onChange={(e)=>setGrade({...grade,cmarks:e.target.value})}/>

<input type="number" 
onChange={(e)=>setGrade({...grade,pmarks:e.target.value})}/>

<input type="number" 
onChange={(e)=>setGrade({...grade,emarks:e.target.value})}/>


<button onClick={()=>addGrade()}>grade</button>
        
<div>
{student1.map((item)=>{
    return(
        <div>
        <h3>name:{item.name}</h3>
        <h3>cmarks:{item.cmarks}</h3>
        <h3>pmarks:{item.pmarks}</h3>
        <h3>emarks:{item.emarks}</h3>
        </div>
    );
})}
</div>
</div>

    );

}