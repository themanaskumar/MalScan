import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/PredictURL.css";

const PredictURL = ({ isLoggedIn, setLogin }) => {
  const [url, setUrl] = useState(""); // State for user input
  const [result, setResult] = useState(null); // State for API response
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  const handleClick = async () => {
    if (!url) {
      setError("Please enter a URL.");
      return;
    }

    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/;
    if (!urlPattern.test(url)) {
      setError("Please enter a valid URL.");
      return;
    }

    setLoading(true);
    setResult(null);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8001/url_detection/predict/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ url }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setResult(responseData);


        await fetch("http://127.0.0.1:8001/url_detection/history/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({
            url: responseData.url,
            prediction: responseData.prediction,
            features: responseData.features,
            timestamp: new Date().toISOString() // optional if backend sets it
          }),
        });

      } else {
        setError(responseData.message || "Error detecting URL.");
      }
    } catch (error) {
      console.error("Error during request:", error);
      setError("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <main className="main">
      <Navbar isLoggedIn={isLoggedIn} setLogin={setLogin} />

      <h1 className="header">Test a URL</h1>
      <div className="url-input">
        <input
          type="text"
          placeholder="Enter URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleClick} disabled={loading}>
          {loading ? "Testing..." : "Test"}
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {/* Show Loading Spinner While Fetching */}
      {loading && 
      <div className="spacer">
        <div className="loading-spinner"></div>
      </div>
      }

      {!loading && result && (
        <div className="result">
          <h2>🔍 URL Analysis</h2>
          <p><strong>🌐 URL:</strong> {result.url}</p>

          {/* Styled Prediction */}
          <p className={`prediction ${result.prediction.toLowerCase()}`}>
            📊 {result.prediction}
          </p>

          <h3>📌 URL Features:</h3>
          <ul>
            {Object.entries(result.features).map(([key, value]) => (
              <li key={key}>
                <span>⚡ {key.replace(/_/g, " ")}:</span> <strong>{value}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default PredictURL;

