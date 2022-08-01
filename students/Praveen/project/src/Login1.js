import React, { useState } from 'react'
import "./App.css";


export default function Login1(props) {
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
      if(state.username==="praveen" && state.pwd==="9035"){
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
    <div >

        <h3>Sign in</h3>

{ !state.login ?
    <div>
        <input type="text" name='username' placeholder='username' onChange={handleChange} /><br />
        <input type={'password'} name='pwd' placeholder='Password' onChange={handleChange}  /><br />
          
        <button type='submit' onClick={handleLogin}  >Login</button>
    </div>
        :
        <div>
            <h1>Hi {state.username} welcome </h1>
            <button onClick={() => setState({...state,
                login : false})} >Logout</button>
        </div>}
    </div>
    
  )
}