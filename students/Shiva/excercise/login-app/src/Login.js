import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
function Login(){
    const[inval,setInval] = useState({
     
        email:"",
        password:""
    })
    const history = useNavigate();
    const[data,setData] = useState([]);
    const handlechnage =(e)=>{
    
        const{name,value} = e.target;
        setInval(()=>{
            return{
                ...inval,
                [name]:value
            }
        })
    }
    const addbutton =(e)=>{
    e.preventDefault();
    const getuser = localStorage.getItem("user");
    console.log(getuser);
    const{email,password} = inval;
   
     if(email==="")
    {
        toast.error('email field is requred', {
            position: "top-center",
        });
    }
    else if(password ==="")
    {
        toast.error('password field is requred', {
            position: "top-center",
        });
    }else if(password.length<4)
    {
        toast.error('password is greater 4 field is requred', {
            position: "top-center",
        });
    }else
    {
        if(getuser && getuser.length)
        {
            console.log("data is added");
            const userone = JSON.parse(getuser);
            const usertwo = userone.filter((el,k)=>{
                return el.email === email && el.password === password
            });
            if (usertwo.length === 0) {
                alert("data is invalid");
             }
             else {
                console.log("user login succesfulyy");
               
                localStorage.setItem("user_login", JSON.stringify(usertwo))
    
               
            }
        }
       
       
    }
    }
    return(
        <div>
<h1>hello Login Form</h1>
<form onSubmit={addbutton}>
 
    <input type="email" placeholder="enter the email" name="email" value={inval.email} onChange={handlechnage}/>
    <br/><br/>
    <input type="password" placeholder="enter the password" name="password" value={inval.password} onChange={handlechnage}/>
    <br/><br/>
    <button type="submit">submit</button>
</form>
<ToastContainer/>
        </div>
    )
}
export default Login;