import "../styles/Signin.css";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Signin = ({handleLogin}) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = (data) => {
    fetch('http://localhost:3000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          handleLogin();
          localStorage.setItem("userName", data.userName);
          localStorage.setItem("userEmail", data.userEmail);
          navigate('/home');
        } else {
          setErrorMessage("Invalid credentials");
        }
      })
      .catch(error => {
        console.error("Error during login:", error);
        setErrorMessage("Server error");
      });
  };
  return (
    <main>
      <div className="bgimg">
        <img src="./mal_bg.jpg" alt="" />
      </div>
    <div className="container">
      <div className="heading">Sign In</div>
      <form action className="form">
        <input
          required
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          {...register("email", { required: "Email is required" })}
        />
        <input
          required
          className="input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        <div className="errorContainer">
              {errorMessage && <p>{errorMessage}</p>}
        </div>
        <span className="forgot-password">
          <a href="#">Forgot Password ?</a>
        </span>
        <input className="login-button" type="button" value="Sign In" />
      </form>
      <p class="sign-up-label">
        Don't have an account?{" "}
        <span class="sign-up-link">
          <a href="/signup">Sign up</a>
        </span>
      </p>
    </div>
    </main>
  );
}

export default Signin;
