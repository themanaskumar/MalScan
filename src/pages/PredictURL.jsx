import React from 'react';
import Navbar from '../components/Navbar';
import "../styles/PredictURL.css";

const PredictURL = ({isLoggeIn, setLogin}) => {
  return (
    <main className='main'>
      <Navbar isLoggedIn={isLoggeIn} setLogin={setLogin} />
      <div><h1 className='header'>Test a URL</h1></div>
    </main>
  )
}

export default PredictURL
