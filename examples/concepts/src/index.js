import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//React Hook --> useState()
//Returns a stateful value, and a function to update it.
//What is useState()?

function MyComponentWithHook(){

  const[user,setUser] = useState({name:"Rajesh",age:20});

  const handleUpdateUser = (event) => {
    //setUser({username:"suraj",age:25});
    //{id:101,name:raj,cmarks:45,pmarks:55,mmarks:67}
    const{name,value} = event.target;
    console.log({[name]:value});
    setUser({ ...user, [name]:value});
  }

  return(
    <div>
      <p>My name is {user.username}</p>
      <p>and my age is {user.age} years.</p>

      <label>
        Name:
        <input type="text" name="name" value={user.username} onChange={handleUpdateUser}/>
      </label>
      <label>
        Age:
        <input type="text" name="age" value={user.age} onChange={handleUpdateUser}/>
      </label>
    </div>
    
  );
}


ReactDOM.render(
  <MyComponentWithHook />, document.getElementById('root')
);

