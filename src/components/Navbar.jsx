import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
