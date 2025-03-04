import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const Signup = ({handleLogin}) =>{
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = (data) => {
    fetch('http://localhost:3000/signup', {
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
          localStorage.setItem("userName", data.userName);
          localStorage.setItem("userEmail", data.userEmail);
          handleLogin();
          navigate('/home');
        } else {
          setErrorMessage("Error during signup");
        }
      })
      .catch(error => {
        console.error("Error during signup:", error);
        setErrorMessage("Server error");
      });
  };

  return (
    <main>
      <div className="bgimg">
        <img src="./mal_bg.jpg" alt="" />
      </div>
      <div className="container">
        <div className="heading">Sign Up</div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input
            required
            className="input"
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            {...register("name", { required: "Name is required" })}
          />
          <input
            required
            className="input"
            type="email"
            name="email"
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
            required
            className="input"
            type="password"
            name="password"
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
              {errors.email && <p>{errors.email.message}</p>}
              {errors.password && <p>{errors.password.message}</p>}
              {errorMessage && <p>{errorMessage}</p>}
            </div>
          <input className="login-button" type="button" value="Sign Up" />
        </form>
        <div>
          <p className="sign-up-label">
            Already have an account?
            <span>
              <a href="/signin"> Sign In</a>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Signup;
