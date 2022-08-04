import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Header (){
    const history = useNavigate();
    const logout=()=>{
    localStorage.removeItem("user_login");
   history("/login");
    }
    return(
        <div>
<Navbar bg="dark" variant="dark">
        <Container>

          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
        
           
            <NavLink to="/res">Resigerter</NavLink>
            <NavLink to="/login">Login</NavLink>
            <button onClick={logout}>logout</button>
          </Nav>
        </Container>
      </Navbar>
     
        </div>
    )
}
export default Header;