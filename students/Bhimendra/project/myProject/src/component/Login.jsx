import React, { useState } from "react"
import {Link} from "react-router-dom"

export const Login=(props)=>{
    const [input,setInput]=useState("")
   console.log(props.num)
    
    return(
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Enter Password" value={input} onChange={(e)=>setInput(e.target.value)}/>
            {
                (input===props.num)?
                    <Link to="/logout"><button>Login</button></Link>:null  
            } 
        </div>
    )
}