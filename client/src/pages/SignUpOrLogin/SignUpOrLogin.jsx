import React from 'react';
import './SignUpOrLogin.css';

const SignUpOrLogin = ({ onLogin }) => {
  const handleLoginClick = () => {
    onLogin(); // Trigger login when the button is clicked
  };

  return (
    <div className='Sign'>
      <div>
        <input type="text" name="username" placeholder='Email' />
      </div>
      <div>
        <input type="password" name="password" placeholder='Password' />
      </div>
      <button type="submit" onClick={handleLoginClick}>Login</button> {/* Call onLogin */}
      <br />
      <p>Forgot Password?</p>
      <div className="registor">
        <p>No Account?</p>
        <p className='re'> Register</p>
      </div>
    </div>
  );
};

export default SignUpOrLogin;
