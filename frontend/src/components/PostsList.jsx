import React from "react";
import { Post } from "../";

/**
 * Renders a list of posts.
 *
 * Maps over the provided posts array and renders a Post component for each post.
 * Returns null if the posts array is empty or undefined.
 *
 * @component
 * @param {Object} props
 * @param {Array} props.posts - Array of post objects to display.
 * @returns {JSX.Element|null} The rendered list of posts or null if no posts.
 */
export default function PostsList({ posts }) {
  if (!posts?.length) return null;
  return posts.map((p) => (
    <Post
      key={p.id}
      user={{
        id: p.authorId ?? undefined,
        name: p.authorDisplayName || "unknown",
        profilePic: p.authorPhotoURL || undefined,
      }}
      group={p.group || undefined}
      post={p}
    />
  ));
}