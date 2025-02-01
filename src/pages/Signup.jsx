function Signup() {
  return (
    <div className="container">
      <div className="heading">Sign Up</div>
      <form action className="form">
        <input
          required
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="Full-Name"
        />
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
        <input className="login-button" type="button" value="Sign Up" />
      </form>
      <div>
        <p>
          Have an account
          <span>
            <a href="/signin"> Sign In</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
