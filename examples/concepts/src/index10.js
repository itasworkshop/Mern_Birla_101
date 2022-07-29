import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//React Hook --> useState()
//Returns a stateful value, and a function to update it.
//What is useState()?

function MyComponentWithHook(){

  //this.state
  const[counter,setCounter] = useState(0);
  const[age,setAge] = useState(20);

  return(
    <div>
      <p>Click Me Please, you clicker {counter} times!</p>
      <button onClick={ () => setCounter(counter+1)}>Click Me</button>

      <p>Click Me Please, you new age is {age} !</p>
      <button onClick={ () => setAge(age+1)}>Click Me</button>
    </div>
    
  );
}


ReactDOM.render(
  <MyComponentWithHook />, document.getElementById('root')
);

