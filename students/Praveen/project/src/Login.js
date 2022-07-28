import React, { useState } from "react"

import { Currency } from "./Converter"


export const Login=(props)=>{
    const [password,setPassword]=useState("")
    const [username,setUsername]=useState("")
    const [msg,setMsg]=useState("")
    const handlelogin=()=>{
        if(password===props.pwd && username===props.users){
            setMsg("logged in")
        }else{
            setMsg("username or password is incorrect")
        }
    }
    
    return(
        <div>
            <h2>Login page</h2>
            <input type="text" placeholder="Enter UserName"  onChange={(e)=>setUsername(e.target.value)}/> <br />
            <input type="text" placeholder="Enter Password"  onChange={(e)=>setPassword(e.target.value)}/> <br />
            <button onClick={()=>handlelogin()}>Login</button>
            <h4>{msg}</h4>

            <Currency/>
               
        </div>
    )
}