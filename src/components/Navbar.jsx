import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate, Link } from 'react-router-dom';

const Navbar = ({isLoggedIn, setLogin = ()=>{}}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    if (confirm("Are you sure you want to log out?")) {
    // Clear token from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    // Update logged-in state
    setLogin(false);
    // Redirect to login page
    navigate('/signin');
    }
  };
  return (
    <div className="navbar">
      <div className="logo">
        <h1>MalScan</h1>
      </div>
      <div className="buttons">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/dashboard">
          <button>Dashboard</button>
        </Link>
        <Link to="/testurl">
          <button>Test URL</button>
        </Link>
        <button>Test PE</button>
        <button>History</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
