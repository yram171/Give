// const UserCard = ({user, groupName, timeLeft}) => {
//   return (
// <div className="user-card">
//   <img src={user.pfp} alt={user.name} className="pfp" />
//   <div>
//     UserName: {user.name}
//     Group: {groupName}
//   </div>
//   <div>Time Left: {timeLeft}</div>
// </div>
//   );
// } 

import React from "react";
import "./UserCard.css";

const UserCard = ({ user, groupName, timeLeft }) => {
  return (
    <div className="user-card">
      <div className="avatar">
        <img
          src={user.profilePic}
          alt={user.name}
          className="user-profile-pic"
        />
      </div>
      <div className="user-info">
        <p className="username">@{user.name}</p>
          <p className="group">
            posted to <span className="group-name">{groupName}</span>
          </p> 
      </div>
      <div className="time">
        <span>{timeLeft} left</span>
      </div>
    </div>
  );
};

export default UserCard;
