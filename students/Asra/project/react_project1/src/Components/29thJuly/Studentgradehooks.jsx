import React from "react";
import { useState } from "react";

export const Studentgradehooks=()=>{
    // {id:101,name:raj,cmarks:45,pmarks:55,mmarks:67}
	// {id:102,name:rajesh,cmarks:65,pmarks:85,mmarks:77}
	// {id:103,name:suraj,cmarks:43,pmarks:55,mmarks:60}
	// {id:104,name:tom,cmarks:71,pmarks:65,mmarks:70}
    // a. 90 to 100 -> Grade A
	// b. 80 to 90 -> Grade B
	// c. 70 to 80 -> Grade C
	// d. Failure.

    const[user, setUser]= useState({name:"Raj",pmarks:55, mmarks:67, cmarks:45})
    const[grade, setGrade] =useState("");
    const Total = Number(user.pmarks) + Number(user.mmarks) + Number(user.cmarks);
    const Percentage= Total/3;
    const gradecal=()=>{

        if (Percentage >= 90 && Percentage<=100){
            setGrade("Grade A")
        }
        else if(Percentage >= 80 && Percentage<90){
            setGrade("Grade B")
        }
        else if(Percentage >=70 && Percentage<80){
            setGrade("Grade C")
        }
        else if(Percentage <70){
            setGrade("Low marks- Fail")
        }
    }
   
    
    return(
        <div>
            <p>name:{user.name}</p>
            <p>Physics mark is {user.pmarks}</p>
            <p>Maths mark is {user.mmarks}</p>
            <p>Chemistry mark is {user.cmarks} </p>
            <input type="text" onChange={(e)=>setUser({...user, pmarks:e.target.value})}/>
            <input type="text" onChange={(e)=>setUser({...user, mmarks:e.target.value})}/>
            <input type="text" onChange={(e)=>setUser({...user, cmarks:e.target.value})}/>
            <input type="text" onChange={(e)=>setUser({...user, name:e.target.value})}/>
            <p> Total Marks are {Total}</p>
            <p>Percentage is {Percentage}</p>
            <button onClick={gradecal}>Submit</button>
            <p>Grade is {grade}</p>

        </div>
    )
}