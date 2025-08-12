import React, { useState, useEffect } from "react";
import logo from './assets/logo.svg';
import './styles/App.css';
import Post from './components/Post';

function App() {
    const [postData, setPostData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPostData = async () => {
          try {
            const response = await fetch("http://localhost:5001/postData"); // your backend endpoint here
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setPostData(data);
          } catch (error) {
            console.error("Failed to fetch post data:", error);
          } finally {
            setLoading(false);
          }
        };

        fetchPostData();
      }, []);

      if (loading) {
        return <p>Loading...</p>;
      }

      if (!postData) {
        return <p>No data available.</p>;
      }

  return (
    <div className="App">
      <header className="App-header">
        App Header
      </header>

      {/* Post Content*/}
      <div className="p-4">
        <Post
          // username={postData.username}
          // groupName={postData.groupName}
          // timeLeft={postData.timeLeft}
          // question={postData.question}
          // profilePic={postData.profilePic}
          // images={postData.images}
          pollOptions={postData.pollOptions}
        />
      </div>
    </div>
  );
}
export default App;