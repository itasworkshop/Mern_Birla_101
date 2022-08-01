import React,{useState} from "react";
export const Login=(props)=>{


    const[passwrd, setPasswrd]= useState(0);
    const[msg, setMsg] = useState("");
    const handleClick=()=>{

    
    let data = props.pass;
    if (data === passwrd){
        setMsg("login successful")
    }else {
        setMsg("login failed")
    }
}

    return(
        <div>
            <h1>Login</h1>

            <input type="text" onChange={(e)=> setPasswrd(e.target.value)}/>
            <h1>{msg}</h1>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}