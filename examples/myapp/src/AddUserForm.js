import React, { useState } from 'react'

const AddUserForm = (props) => {
    const intitalFormState = {id:null, name:"",username:""}
    const[user,setUser] = useState(intitalFormState)

    const handleInputChange = (event) => {
        const {name,value} = event.target
        setUser({...user,[name]:value})
    }


    return(
        <form onSubmit={ (event) =>{
            event.preventDefault()
            if(!user.name || !user.username)

            return 
            props.adduser(user)
            setUser(intitalFormState)
            }    
        }>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
            <label>User Name</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <button>Add new User</button>
        </form>
    );
}

export default AddUserForm
