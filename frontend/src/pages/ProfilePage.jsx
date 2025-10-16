import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const ProfilePage = () => {
  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();
  const user = auth.currentUser;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      if (!user) return;
      const postsRef = collection(db, "posts");
      const q = query(postsRef, where("authorId", "==", user.uid));
      const querySnapshot = await getDocs(q);
      setPosts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    fetchUserPosts();
  }, [user, db]);

  if (!user) {
    return (
      <div className="text-center p-6">
        <h2>Please log in to view your profile.</h2>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl"
          onClick={() => navigate("/login")}
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-xl rounded-2xl">
      <div className="flex items-center space-x-4">
        <img
          src={user.photoURL || "https://via.placeholder.com/100"}
          alt="Profile"
          className="w-20 h-20 rounded-full border"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.displayName || "Anonymous User"}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <hr className="my-6" />

      <h3 className="text-xl font-semibold mb-4">Your Posts</h3>
      {posts.length === 0 ? (
        <p className="text-gray-500">You haven’t posted anything yet.</p>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 cursor-pointer"
              onClick={() => navigate(`/post/${post.id}`)}
            >
              <h4 className="font-bold">{post.title}</h4>
              <p className="text-gray-600 text-sm">{post.content?.slice(0, 80)}...</p>
            </div>
          ))}
        </div>
      )}

      <button
        className="mt-8 px-4 py-2 bg-pink-500 text-white rounded-xl"
        onClick={() => alert("Edit Profile coming soon!")}
      >
        Edit Profile
      </button>
    </div>
  );
};

export default ProfilePage;
