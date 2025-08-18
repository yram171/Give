import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./styles/App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";

async function getPostData() {
  try {
    const res = await fetch("http://localhost:5001/postData");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("Failed to load poll:", err);
    return err.message;
  }
}

function App() {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostData()
      .then((data) => setPostData(data))
      .catch((error) => console.error("Error fetching post data:", error))
      .finally(() => {
        console.log("Post data fetch completed");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home postData={postData} />, // ✅ pass postData
    },
    {
      path: "/create-account",
      element: <CreateAccount />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
