import React from "react"
import {Link} from "react-router-dom"

export const Logout=()=>{
    return(
        <div>
            <h2>Hi, This is Login Page</h2>
            <Link to="/"><button>Logout</button></Link>
        </div>
    )
}