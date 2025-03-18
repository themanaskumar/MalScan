import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/History.css";

const History = ({ isLoggedIn, setLogin }) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8001/history/", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch history");
      }

      const data = await response.json();
      setHistory(data);
    } catch (error) {
      console.error("Error fetching history:", error);
      setError("Failed to load history. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="main">
      <Navbar isLoggedIn={isLoggedIn} setLogin={setLogin} />
      <div className="history-container">
        <h1 className="header">Testing History</h1>
        
        {loading && <div className="loading">Loading history...</div>}
        
        {error && <div className="error-message">{error}</div>}
        
        {!loading && !error && history.length === 0 && (
          <div className="no-history">
            <p>No history to fetch</p>
          </div>
        )}
        
        {!loading && !error && history.length > 0 && (
          <div className="history-list">
            {history.map((item, index) => (
              <div key={index} className="history-item">
                <div className="history-header">
                  <h3>{item.type === "url" ? "URL Test" : "PE File Test"}</h3>
                  <span className="timestamp">{new Date(item.timestamp).toLocaleString()}</span>
                </div>
                <div className="history-content">
                  <p><strong>Input:</strong> {item.type === "url" ? item.url : item.filename}</p>
                  <p><strong>Result:</strong> <span className={`result-${item.prediction.toLowerCase()}`}>{item.prediction}</span></p>
                  <div className="features">
                    <h4>Features:</h4>
                    <ul>
                      {Object.entries(item.features).map(([key, value]) => (
                        <li key={key}>
                          <strong>{key.replace(/_/g, " ")}:</strong> {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default History; 