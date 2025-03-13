import React, { useState } from "react";
import "../styles/Navbar.css";
import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, setLogin = () => {} }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("name");
    localStorage.removeItem("email");

    // Update logged-in state
    setLogin(false);

    // Redirect to login page
    navigate("/signin");
  };

  return (
    <>
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
          <button onClick={() => setShowModal(true)}>Logout</button>
        </div>
      </div>

      {/* Logout Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Are you sure you want to log out?</h3>
            <div className="modal-buttons">
              <button className="logout-btn" onClick={handleLogout}>
                Yes, Logout
              </button>
              <button className="cancel-btn" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
