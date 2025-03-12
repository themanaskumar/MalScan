import "../styles/Signin.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signin = ({handleLogin}) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:8001/api/users/signin/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        // Store access and refresh tokens
        localStorage.setItem("email", responseData.email);
        localStorage.setItem("name", responseData.name);
        localStorage.setItem("accessToken", responseData.tokens.access);
        localStorage.setItem("refreshToken", responseData.tokens.refresh);
        
        handleLogin(); // Call the login handler
        navigate("/"); // Redirect to home page
      } else {
        setErrorMessage(responseData.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Server error, please try again.");
    }
  };

  return (
    <main>
      <div className="bgimg">
        <img src="./mal_bg.jpg" alt="Background" />
      </div>
      <div className="container">
        <div className="heading">Sign In</div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input
            className="input"
            type="email"
            id="email"
            placeholder="E-mail"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
          
          <input
            className="input"
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          
          <div className="errorContainer">
            {errorMessage && <p>{errorMessage}</p>}
          </div>

          <span className="forgot-password">
            <a href="#">Forgot Password?</a>
          </span>

          <button className="login-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="sign-up-label">
          Don't have an account?{" "}
          <span className="sign-up-link">
            <a href="/signup">Sign up</a>
          </span>
        </p>
      </div>
    </main>
  );
};

export default Signin;
