import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PredictURL from "./pages/PredictURL";

function App() {
  const [isLoggedIn, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(true);
  };
  useEffect(() => {
    // Check if token exists to persist login
    const token = localStorage.getItem('token');
    if (token) {
      setLogin(true);
    }
  });
  return (
    <div>
      <Routes>
        <Route path="/signin" handleLogin={handleLogin} element={<Signin />} />
        <Route path="/" isLoggedIn={isLoggedIn} setLogin={setLogin} element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" isLoggedIn={isLoggedIn} setLogin={setLogin} element={<Dashboard />} />
        <Route path = "/testurl" isLoggedIn={isLoggedIn} setLogin={setLogin} element={<PredictURL />} />
      </Routes>
    </div>
  );
}

export default App;
