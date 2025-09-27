import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

/**
 * Posts Context - Manages post data and provides refresh functionality
 * This context encapsulates all post-related state management and eliminates
 * the need to pass refresh functions through component props
 */

const PostsContext = createContext();

/**
 * Custom hook to use the Posts Context
 * @returns {Object} Posts context value with posts, loading, and refresh function
 */
export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
};

/**
 * Fetch posts data from the API
 * @param {Object} options - Fetch options (limitCount, orderByField, orderDirection)
 * @returns {Promise<Array>} Array of posts
 */
export async function getPostData({
  limitCount = 10,
  orderByField = "createdAt",
  orderDirection = "desc",
} = {}) {
  const params = new URLSearchParams({ limitCount, orderByField, orderDirection });
  const res = await fetch(`/api/posts?${params.toString()}`);
  if (!res.ok) throw new Error((await res.json()).error || "Failed to fetch");
  return res.json();
}

/**
 * Posts Provider Component
 * Provides post state and refresh functionality to all child components
 * 
 * @param {Object} props
 * @param {ReactNode} props.children - Child components
 */
export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * Fetch posts from the API and update state
   */
  const fetchPosts = useCallback(async () => {
    try {
      const data = await getPostData();
      setPosts(data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  }, []);

  /**
   * Refresh posts data - can be called from any component within the provider
   */
  const refreshPosts = useCallback(async () => {
    await fetchPosts();
  }, [fetchPosts]);

  /**
   * Update a specific post in the posts array
   * This is useful for optimistic updates without full refresh
   * 
   * @param {string} postId - ID of the post to update
   * @param {Object} updates - Partial post object with updates
   */
  const updatePost = useCallback((postId, updates) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId ? { ...post, ...updates } : post
      )
    );
  }, []);

  /**
   * Initial fetch on mount
   */
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await getPostData();
        if (alive) setPosts(data);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  const contextValue = {
    posts,
    loading,
    refreshPosts,
    updatePost,
  };

  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  );
};