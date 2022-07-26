import React, { useState } from 'react'
import "./App.css";


export default function Login(props) {
    const [state, setState] = useState({
        username :'',
        pwd:'',
        login: false,
        error: false
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    const handleLogin = () => {
        setState({
            ...state, 
            error : false,
            login : false
        }); 
      if(state.username==="mano" && state.pwd==="123"){
        setState({
            ...state, 
            login : true,
            error:false
        }); 
      }else {
        setState({
            ...state, 
            error : true,
            login:false
        }); 
      }
    }

  return (
    <div className='App-header'>

{ !state.login ?
    <div>
        <input type="text" name='username' placeholder='username' onChange={handleChange} /><br />
        <input type={'password'} name='pwd' placeholder='Password' onChange={handleChange}  /><br />
        
            <label style={{ color:"red" , display: state.error ? "block" : "none" }} >Invalid credentials</label>
        
        
        <button type='submit' onClick={handleLogin} style={{width:"100%", backgroundColor:"green"}} >Login</button>
    </div>
        :
        <div>
            <h1>Hi {state.username} This is home page</h1>
            <button onClick={() => setState({...state,
                login : false})}  style={{width:"30%", backgroundColor:"yellow" , color:"black"}} >Logout</button>
        </div>}
    </div>
    
  )
}
