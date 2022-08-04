import React from 'react'
import { NavLink } from 'react-router-dom';


import { Link, useNavigate } from 'react-router-dom';
import data from './data';

function Home() {

    function setedit(id,name,age){
        localStorage.setItem('id',id);
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
    }
let history = useNavigate()


function deleted(id){
	
	
var index = data.map((e)=>{
    return e.id;
}).indexOf(id);
	
	data.splice(index,1)

	
	history('/')
}

return (
	<div>
    <h1>read data</h1>
    <table border="1">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item)=>{
                    return(
                        <tr>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>
                            <td><NavLink to="/edit"><button onClick={(e)=>{setedit(item.id,item.Name,item.Age)}}>edit</button></NavLink></td>
                            <td><button onClick={(e)=>{deleted(item.id)}}>delete</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    <NavLink to="/create"><button>create</button></NavLink>
	</div>
)
}

export default Home
