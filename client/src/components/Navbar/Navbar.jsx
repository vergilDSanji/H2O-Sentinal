import React from 'react';
import './Navbar.css';

const Navbar = ({ onSignInClick }) => {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="navbar-logo">
        <h1>Welcome To</h1>
        <h2>H2O</h2>
        <h1>-Sentinel</h1>
      </div>
      <div className="profile" onClick={onSignInClick}> {/* Add onClick to trigger the handler */}
        <i className="fa-solid fa-user"></i>
        <h1>Sign In/Register</h1>
      </div>
    </div>
  );
};

export default Navbar;