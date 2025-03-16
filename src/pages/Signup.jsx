import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Signup = ({handleLogin}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch('http://127.0.0.1:8001/api/users/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        if (responseData.tokens) {
          // Store tokens and user data
          localStorage.setItem("accessToken", responseData.tokens.access);
          localStorage.setItem("refreshToken", responseData.tokens.refresh);
          localStorage.setItem("name", responseData.name);
          localStorage.setItem("email", responseData.email);
          alert("Signup successful!");

          handleLogin(); // Update login state
          navigate('/'); // Redirect to home
        } else {
          setErrorMessage("Signup successful, but no tokens received.");
        }
      } else {
        setErrorMessage(responseData.message || "Signup failed.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <main>
      <div className="bgimg">
        <img src="./mal_bg.jpg" alt="Background" />
      </div>
      <div className="container">
        <div className="heading">Sign Up</div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input
            className="input"
            type="text"
            id="name"
            placeholder="Full name"
            {...register("name", { required: "Name is required" })}
          />

          <input
            className="input"
            type="email"
            id="email"
            placeholder="E-mail"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />

          <input
            className="input"
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Password must be at least 8 characters, include a letter, a number, and a special character",
              },
            })}
          />

          <div className="errorContainer">
            {errors.name && <p className="error">{errors.name.message}</p>}
            {errorMessage && <p className="error">{errorMessage}</p>}
            {errors.password && <p className="error">{errors.password.message}</p>}
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <button className="login-button" type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="sign-up-label">
          Already have an account?{" "}
          <span className='sign-up-link'><a href="/signin"> Sign In</a></span>
        </p>
      </div>
    </main>
  );
};

export default Signup;
