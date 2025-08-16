import React from "react";
import UserCard from "../UserCard/UserCard";
import PostData from "../PostData/PostData";
import PollBox from "../PollBox/PollBox";

import './Post.css';

const Post = ({user, group, post, pollOptions}) => {
  return (
    <div className='root'>
      <UserCard user={user} group={group} timeLeft={post.timeLeft} />
      <PostData post={post} />
      <PollBox initialOptions={pollOptions} />
    </div>
  )
}

export default Post;
