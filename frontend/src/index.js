import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

// --- barrel exports ---
export { default as App } from './App';
export { default as Post } from './components/Post/Post';
export { default as GroupTab } from './components/GroupTab/GroupTab';
export { default as PollBox } from './components/PollBox/PollBox';
export { default as Login } from './pages/Login';
export { default as SuggestedBox } from './components/SuggestedBox/SuggestedBox';
export { default as NavBar } from './components/NavBar/NavBar';
export { default as UserInfo } from './components/UserInfo/UserInfo';
