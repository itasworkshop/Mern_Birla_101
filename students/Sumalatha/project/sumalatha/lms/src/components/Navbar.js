import React from 'react'
import {Link} from "react-router-dom"
import logo1 from "../components/img/logo1.jpg"






const Navbar = () => {
  return (
    
    <div class="nav">
    
<a href=""><img src={logo1}/></a> 
    
    <nav>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Book">Book </Link></li>
      <li><Link to="/packages">Packages </Link></li>
      <li><Link to="/Services">Services</Link></li>
      <li><Link to="/Review">Review </Link></li>
      <li><Link to="/SignUp">SignUp</Link></li>
      <li><Link to="/contact">Contact</Link></li>

      </ul>
      </nav>
      </div>

     
        
     
       
    


              
    
        
      
        

        
        
    
        
  )
}

export default Navbar