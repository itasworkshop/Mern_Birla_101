import React, { useState } from "react"


export const Login2=(props)=>{
    const [password,setPassword]=useState("")
    const [username,setUsername]=useState("")
    const [msg,setMsg]=useState("")
    const handlelogin=()=>{
        if(password===props.pass && username===props.user){
            setMsg("Correct Password")
        }else{
            setMsg("Incorrect Password")
        }
    }
    
    return(
        <div>
            <h2>Login2</h2>
            <input type="text" placeholder="Enter UserName"  onChange={(e)=>setUsername(e.target.value)}/> <br />
            <input type="text" placeholder="Enter Password"  onChange={(e)=>setPassword(e.target.value)}/> <br />
            <button onClick={()=>handlelogin()}>Login</button>
            <h4>{msg}</h4>
        </div>
    )
}