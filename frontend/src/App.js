import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import postDataJson from "./data/postData.json";
import logo from './assets/logo.svg';
import './styles/App.css';

function App() {
    const [postData, setPostData] = useState(null);

  useEffect(() => {
    // Simulating API fetch by reading local JSON
    setPostData(postDataJson);
  }, []);

  if (!postData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

