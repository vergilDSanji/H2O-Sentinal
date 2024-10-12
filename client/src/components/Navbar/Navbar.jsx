import React from 'react'
import './Navbar.css'

const Navbar = () => {

  return (
    <div className='navbar'>
        <div className="navbar-menu">
            <i className="fa-solid fa-bars"></i>
        </div>
        <div className="navbar-logo">
            <h1>Welcome To</h1> 
            <h2> H2O</h2>
            <h1>-Santinals</h1>
        </div>
        <div className="profile">
            <i className="fa-solid fa-user"></i>
            <h1>Sign In/Registor</h1>
        </div>
    </div>
  )
}

export default Navbar