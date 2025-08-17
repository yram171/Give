import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/App.css";

import { Login, Post, GroupTab, SuggestedBox, NavBar, UserInfo } from './';

async function getPostData() {
  try {
    const res = await fetch("http://localhost:5001/postData");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json(); //
  } catch (err) {
    console.error("Failed to load poll:", err);
    return err.message; // Return error message for debugging
  }
}

function App() {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostData()
      .then((data) => {
        setPostData(data);
      })
      .catch((error) => {
        console.error("Error fetching post data:", error);
      })
      .finally(() => {
        console.log("Post data fetch completed");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="app">

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <header>
        <NavBar />
      </header>

      <main>
        <div className="flex flex-col w-[27%] gap-4">
          {/* left column */}
          <UserInfo />
          <SuggestedBox />
        </div>

        <Post
          user={postData.user}
          group={postData.group}
          post={postData.post}
          pollOptions={postData.pollOptions}
        />
       <div className="flex flex-col w-[27%]">
          {/* left column */}
          MMM
        </div>
      </main>
    </div>
  );
}
export default App;
