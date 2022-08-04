import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Res(){
    
const[inval,setInval] = useState({
    name:"",
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
const{name,email,password} = inval;
if(name ==="")
{
    toast.error('name field is requred', {
        position: "top-center",
    });
}
else if(email==="")
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
    console.log("data is added");
    history("/login");
    localStorage.setItem("user",JSON.stringify([...data,inval]));
}
}

    return(
        <div>
<h1>hello Register Form</h1>
<form onSubmit={addbutton}>
    <input type="text" placeholder="enter the name" name="name" value={inval.name} onChange={handlechnage}/>
    <br/><br/>
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
export default Res;