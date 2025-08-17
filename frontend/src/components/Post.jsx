import React from "react";
import UserCard from "./UserCard";
import PostData from "./PostData";
import PollBox from "./PollBox";

const Post = ({user, group, post, pollOptions}) => {
  return (
    <div className="flex flex-col bg-backgroundGrey gap-4 p-6 rounded-xl w-full max-w-2xl mx-auto">
      <UserCard user={user} group={group} timeLeft={post.timeLeft} />
      <PostData post={post} />
      <PollBox initialOptions={pollOptions} />
    </div>
  )
}

export default Post;
