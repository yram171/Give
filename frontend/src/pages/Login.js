import React, { useState } from 'react';
import '../styles/Login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, emailOrPhone, password);
      console.log("Logged in successfully");
    } catch (err) {
      setError(err.message);
    }
  };

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
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{ color: 'red', fontSize: '0.9rem' }}>{error}</p>}
          <button className="login-btn" onClick={handleLogin}>Log In</button>
          <button className="forgot-btn">Forgot Account?</button>
          <button className="create-btn">Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
