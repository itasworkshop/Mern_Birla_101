import React,{useState} from "react";

export const Studentgrade=()=>{
    const[number,setNumber]= useState(0);
    const[message,setMesssage]=useState("");
    const grades=()=>{

    if (number>90){
        setMesssage("Grade A");
    } else if (number> 80 && number<=90){
        setMesssage("Grade B");
    }
    else if(number>70 && number <=80){
        setMesssage("Grade c");
    } else if(number<=70){
        setMesssage("Fail");
    }
}

return(

        <div>
            <input type="text" onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={()=>grades()}>submit</button>
            <h2> Marks are {number} and grade is {message}</h2>

        </div>
    )

}
