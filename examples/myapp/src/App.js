import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'


const App = () =>{

  const userData = [
    {id:101,name:'Raj',username:'raj121'},
    {id:102,name:'Rajesh',username:'rajesh121'},
    {id:103,name:'suraj',username:'sj121'}
  ]

  const[users,setUsers] = useState(userData)

  const adduser = (user) =>{
    user.id = users.length+101
    setUsers([...users,user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id!== id))
  }

  const[editing,setEditing] = useState(false)

  const intitalFormState = {id:null, name:"",username:""}

  const[currentUser,setCurrenUser] = useState(intitalFormState)

  const editRow = (user) => {
    setEditing(true)
    setCurrenUser({id:user.id, name : user.name,username:user.username})
  }

  const updatedUser = (id,updatedUser ) => {
    setEditing(false)

    setUsers(users.map((user) => (user.id === id ? updatedUser:user)))
  }

  return(
    <div className="container">
      <h1>CRUD app Myapp.</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm 
                setEditing={setEditing}
                currentUser={currentUser}
                updatedUser={updatedUser}             
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm adduser={adduser} />
            </div>
          ) }
        </div>
         
        <div className="flex-large">
          <h2>View User</h2>
          <UserTable users = {users} editRow={editRow} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
}

export default App