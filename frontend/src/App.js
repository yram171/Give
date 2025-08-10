import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import './styles/App.css';

// npm install react-router-dom

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
