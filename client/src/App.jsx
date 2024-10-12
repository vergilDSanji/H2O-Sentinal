import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import SmallDisplay from './pages/SmallDisplay/SmallDisplay';
import DashBoard from './DashBoard/DashBoard'

const App = () => {
  const [isSmallDisplayVisible, setIsSmallDisplayVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if user is logged in

  const handleSignInClick = () => {
    setIsSmallDisplayVisible(!isSmallDisplayVisible);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Set logged-in state to true when user logs in
    setIsSmallDisplayVisible(false); // Close the SmallDisplay when logged in
  };

  return (
    <Router>
      {isSmallDisplayVisible && (
        <SmallDisplay onSignInClick={handleSignInClick} onLogin={handleLogin} /> // Pass onLogin to SmallDisplay
      )}

      <div className={isSmallDisplayVisible ? 'blurred-content' : ''}>
        <Navbar onSignInClick={handleSignInClick} />
        
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LandingPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
