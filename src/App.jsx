import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PredictURL from "./pages/PredictURL";
import TestPE from "./pages/TestPE";
import History from "./pages/History";

function App() {
  const [isLoggedIn, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(true);
  };
  useEffect(() => {
    // Check if token exists to persist login
    const token = localStorage.getItem("accessToken");
    if (token) {
      setLogin(true);
    }
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Home isLoggedIn={isLoggedIn} setLogin={setLogin} />
              ) : (
                <Signin handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/signin"
            element={
              isLoggedIn ? (
                <Home isLoggedIn={isLoggedIn} setLogin={setLogin} />
              ) : (
                <Signin handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/signup"
            element={
              isLoggedIn ? (
                <Home isLoggedIn={isLoggedIn} setLogin={setLogin} />
              ) : (
                <Signup handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <Dashboard isLoggedIn={isLoggedIn} setLogin={setLogin} />
              ) : (
                <Signin handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/testurl"
            element={
              isLoggedIn ? (
                <PredictURL isLoggedIn={isLoggedIn} setLogin={setLogin} />
              ) : (
                <Signin handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/testpe"
            element={
              isLoggedIn ? (
                <TestPE isLoggedIn={isLoggedIn} setLogin={setLogin} />
              ) : (
                <Signin handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/history"
            element={
              isLoggedIn ? (
                <History isLoggedIn={isLoggedIn} setLogin={setLogin} />
              ) : (
                <Signin handleLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
