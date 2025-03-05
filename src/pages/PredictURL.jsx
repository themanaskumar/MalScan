import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/PredictURL.css";

const PredictURL = ({isLoggeIn, setLogin}) => {
  const [result, setResult] = useState("");

  const handleClick = () => {
    setResult("The result will be displayed here.");
  };

  return (
    <main className="main">
      <Navbar isLoggedIn={isLoggeIn} setLogin={setLogin} />
      <div>
        <h1 className="header">Test a URL</h1>
        <div className="url-input">
          <input type="text" placeholder="Enter URL here" />
          <button onClick={handleClick}>Test</button>
        </div>
        <div className="result">
          {result && <p className="result-message">{result}</p>}
        </div>
      </div>
    </main>
  );
};

export default PredictURL;
