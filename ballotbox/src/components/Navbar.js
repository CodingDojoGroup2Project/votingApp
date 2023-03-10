import React from 'react'
import {Link,NavLink, useNavigate} from 'react-router-dom';
import '../navbar.css'

const Navbar = () => {

  const logoStyle = {
    height: 'auto',
    width: '20em',
    cursor: 'pointer'
  }

  const navigate = useNavigate();

  return (
    <div className="navbar flex flex-col items-center lg:flex-row lg:justify-around">
        <div className='title'>
        <NavLink to="/"><img src={require('../assets/logo.png')} style={logoStyle} alt="logo"/></NavLink>
        </div>
        <div className='links flex lg:flex-col md:flex-row'>
          <button className="navButton mb-2 mx-2" onClick={()=>navigate("/adminSignIn")}>LOGIN</button>
          <button className="navButton mb-2 mx-2" onClick={()=>navigate("/")}>HOME</button>
          <button className="navButton mb-2 mx-2" onClick={()=>navigate("/voterdashboard")}>CANDIDATES</button>
        </div>
    </div>
  )
}

export default Navbar;