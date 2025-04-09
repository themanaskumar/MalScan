import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/History.css";

const History = ({ isLoggedIn, setLogin }) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      fetchHistory();
    }
  }, [isLoggedIn]);

  const fetchHistory = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8001/url_detection/history/", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch history");
      }

      const data = await response.json();
      setHistory(data.history);
    } catch (error) {
      console.error("Error fetching history:", error);
      setError("Failed to load history. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = async () => {
    if (!window.confirm("Are you sure you want to clear your entire history?")) return;

    try {
      const response = await fetch("http://127.0.0.1:8001/url_detection/history/clear/", {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log(response)
      if (!response.ok) {
        throw new Error("Failed to clear history");
      }

      setHistory([]);
    } catch (error) {
      console.error("Error clearing history:", error);
      setError("Failed to clear history. Please try again.");
    }
  };

  if (!isLoggedIn) {
    return (
      <main className="main">
        <Navbar isLoggedIn={isLoggedIn} setLogin={setLogin} />
        <div className="history-container">
          <h1 className="header">Testing History</h1>
          <div className="not-logged-in">
            <p>Please log in to view your history</p>
          </div>
        </div>
      </main>
    );
  }

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <main className="main">
      <Navbar isLoggedIn={isLoggedIn} setLogin={setLogin} />
      <div className="history-container">
        <h1 className="header">Testing History</h1>

        {history.length > 0 && (
          <div className="history-actions" style={{ marginTop: "20px", marginBottom: "20px" }}>
            <button className="clear-button" onClick={clearHistory}>Clear History</button>
          </div>
        )}

        
          {loading && 
          <div className="spacer">
          <div className="loading-spinner"></div>
          </div>
          }
        

        {error && <div className="error-message">{error}</div>}

        {!loading && !error && history.length === 0 && (
          <div className="no-history">
            <p>No history to fetch</p>
          </div>
        )}

        {!loading && !error && history.length > 0 && (
          <div className="history-list">
            {history.map((item, index) => (
              <div key={index} className="history-item" onClick={() => openModal(item)}>
                <div className="history-header">
                  <h3>URL Test</h3>
                  <span className="timestamp">{new Date(item.timestamp).toLocaleString()}</span>
                </div>
                <div className="history-content">
                  <p><strong>URL:</strong> {item.url}</p>
                  <p><strong>Result:</strong> <span className={`result-${item.prediction.toLowerCase()}`}>{item.prediction}</span></p>
                </div>

              </div>
            ))}
          </div>
        )}

        {selectedItem && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>✖</button>
              <h2>Full Details</h2>
              <p><strong>Time:</strong> {new Date(selectedItem.timestamp).toLocaleString()}</p>
              <p><strong>URL:</strong> {selectedItem.url}</p>
              <div style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>
                <strong>Result:</strong>
                <div
                  className={`result result-${selectedItem.prediction.toLowerCase()}`}
                  style={{ fontSize: "1.3rem", marginTop: "5px", marginTop: "20px", marginBottom: "20px" }}
                >
                  {selectedItem.prediction}
                </div>
              </div>
              <div className="features">
                <h4>Features:</h4>
                <ul>
                  {Object.entries(selectedItem.features).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key.replace(/_/g, " ")}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default History;
