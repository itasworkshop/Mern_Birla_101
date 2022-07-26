import React, { useState } from "react"


export const LoginProps=(props)=>{
    const [password,setPassword]=useState("")
    const [msg,setMsg]=useState("")
    const handlelogin=()=>{
        if(password===props.pass){
            setMsg("Correct Password")
        }else{
            setMsg("Incorrect Password")
        }
    }
    
    return(
        <div>
            <h2>Login Using Props</h2>
            <input type="text" placeholder="Enter Password"  onChange={(e)=>setPassword(e.target.value)}/> <br />
            <button onClick={()=>handlelogin()}>Login</button>
            <h4>{msg}</h4>
        </div>
    )
}