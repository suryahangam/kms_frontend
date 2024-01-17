// Logout.js
import React from 'react';
import { removeToken } from './TokenService';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
    const navigate = useNavigate();
  const handleLogout = () => {
    // Remove the token from local storage
    removeToken();

    // Inform the parent component about the logout
    // onLogout();
    navigate("/login")
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
