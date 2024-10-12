import React from 'react';
import './SmallDisplay.css';
import SignUpOrLogin from '../SignUpOrLogin/SignUpOrLogin';

const SmallDisplay = ({ onSignInClick, onLogin }) => {
  return (
    <div className="small-display">
      <div className="outside-icon">
        <i className="fa-regular fa-circle-xmark" onClick={onSignInClick}></i>
      </div>
      <div className="inside">
        <SignUpOrLogin onLogin={onLogin} /> {/* Pass onLogin to SignUpOrLogin */}
      </div>
    </div>
  );
};

export default SmallDisplay;
