import React, { useState } from "react"
import {Link} from "react-router-dom"

export const Login=()=>{
    const [input,setInput]=useState("")
   
    
    return(
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Enter Password" value={input} onChange={(e)=>setInput(e.target.value)}/>
            {
                (input==="123")?
                    <Link to="/logout"><button>Login</button></Link>:null
               
            }
            {/* <button onClick={()=>handleLogin()}><Link to="/logout">Login</Link></button><br /> */}
            
            
        </div>
    )
}