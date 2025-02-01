import React from 'react'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h1>MalScan</h1>
        </div>
        <div className="buttons">
            <button>Home</button>
            <button>Dashboard</button>
            <button>Test URL</button>
            <button>Test PE</button>
            <button>History</button>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar
