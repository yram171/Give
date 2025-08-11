import React from "react";
import PollBox from "./PollBox";

export default function Post({
  username,
  groupName,
  timeLeft,
  question,
  images,
  profilePic,
  pollOptions
}) {
  return (
      <div className="bg-backgroundGrey rounded-xl shadow p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={profilePic}
              alt={`${username} profile`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-bold">@{username}</p>
              <p className="text-sm text-black">
                posted to <span className="font-semibold">{groupName}</span>
              </p>
            </div>
          </div>
          <span className="text-darkGrey text-sm">{timeLeft} left</span>
        </div>

          </div>
  );
}
