import "../styles/Signin.css";

function Signin() {
  return (
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
        />
        <input
          required
          className="input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
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
  );
}

export default Signin;
