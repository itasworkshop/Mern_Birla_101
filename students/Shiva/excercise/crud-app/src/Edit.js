import React, { useEffect, useState } from 'react'


import { NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import data from './data';


function Edit() {
	const [name, setname] = useState('');
	const [age, setage] = useState('');
	const[id,setid] = useState('');

	
	let history = useNavigate()
	
	

    var index = data.map((e)=>{
        return e.id;
    }).indexOf(id);
	
	const handelSubmit = (e) =>{
		e.preventDefault(); 
		
		let a = data[index] 
		a.Name = name
		a.Age = age

		
		history('/')
	}

	useEffect(() => {
		setname(localStorage.getItem('Name'))
		setage(localStorage.getItem('Age'))
		setid(localStorage.getItem('id'))
	}, [])
	
return (
	<div>
    <form onSubmit={handelSubmit}>
    <input type="text" placeholder='enter the name' value={name} onChange={(e)=>setname(e.target.value)}/>
    <br/><br/>
    <input type="text" placeholder='enter the age' value={age} onChange={(e)=>setage(e.target.value)} />
    <br/><br/>
    <button type='submit'>button</button>
       
   
			<NavLink className="d-grid gap-2" to='/'>
			<button variant="warning" size="lg">Home</button>
			</NavLink>
            </form>
	</div>
)
}

export default Edit
