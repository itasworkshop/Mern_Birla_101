import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import data from './data';

function Create() {

	const [name, setname] = useState('');
	const [age, setage] = useState('');
	let history = useNavigate();

	const handelSubmit = (e) =>{
		e.preventDefault(); 

        const ids = uuid() // Creating unique id
        let uni = ids.slice(0,8) // Slicing unique id
  
       
        let a = name, b=age
        data.push({id:uni,Name:a,Age:b})


	history('/')
		
	}

return (
	<div >
	<form onSubmit={handelSubmit}>
<input type="text" placeholder='enter the name' value={name} onChange={(e)=>setname(e.target.value)}/>
<br/><br/>
<input type="text" placeholder='enter the age' value={age} onChange={(e)=>setage(e.target.value)} />
<br/><br/>
<button type='submit'>button</button>
    </form>
	</div>
)
}

export default Create




