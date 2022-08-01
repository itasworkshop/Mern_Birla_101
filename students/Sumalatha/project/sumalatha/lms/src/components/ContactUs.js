import React, {useState,useEffect}from 'react';
import axios from "axios";


const Contactus = () => {
  const [users,setUsers]=useState([]);
  useEffect(()=>{console.log("hello")},[]);
  const loadUsers=async()=>{
    const result=await axios.get("http://localhost:3003/users");

  }
  return (
   
 <div></div>
  )
} 

export default Contactus;