import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/TestPE.css";

const TestPE = ({ isLoggedIn, setLogin }) => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError("");
    }
  };

  const handleClick = async () => {
    if (!file) {
      setError("Please select a PE file.");
      return;
    }

    setLoading(true);
    setResult(null);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:8001/api/pe/predict/", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: formData,
      });

      const responseData = await response.json();

      if (response.ok) {
        setResult(responseData);
      } else {
        setError(responseData.message || "Error analyzing PE file.");
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
      <div>
        <h1 className="header">Test PE File</h1>
        <div className="file-input">
          <input
            type="file"
            accept=".exe,.dll"
            onChange={handleFileChange}
            className="file-upload"
          />
          <button onClick={handleClick} disabled={loading}>
            {loading ? "Testing..." : "Test"}
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}

        {result && (
          <div className="result">
            <h2>PE File Analysis</h2>
            {file && <p><strong>File Name:</strong> {file.name}</p>}
            <p><strong>Prediction:</strong> {result.prediction}</p>
            <p><strong>Confidence Score:</strong> {result.score?.toFixed(4)}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default TestPE;