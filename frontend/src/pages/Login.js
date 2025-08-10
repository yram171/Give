import React from 'react';
import '../styles/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="left-side">
        <div className="title-container">
          <header className="give-title">
            <h1>Give</h1>
          </header>
          <p className="slogan">Can't decide? Let them vote.</p>
        </div>
      </div>

      <div className="right-side">
        <div className="login-box">
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <button className="login-btn">Log In</button>
          <button className="forgot-btn">Forgot Account?</button>
          <button className="create-btn">Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
