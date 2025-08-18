import React from "react";

export default function UserInfo() {
  // const [usersName, setUsersName] = useState("");
  // const [userName, setUserName] = useState("");
  // const [profilePic, setProfilePic] = useState("");
  const user = {
    name: "Kate",
    username: "katesmith0001",
    profilePic: "profile-pic.jpg"
  };

  return (
    <div className="w-full rounded-3xl flex items-start bg-backgroundGrey px-4 py-2 gap-2">
      {/* User Avatar */}
      <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden">
        <img
          src={user.profilePic ? `images/${user.profilePic}` : "/images/placeholder.svg"}
          alt={`${user.name} profile`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-between gap-2">
        <div className="text-left">
          <p className="text-xl font-semibold text-black">
            Hi {user.name || "User"}!
          </p>
          <p className="text-[0.6rem] text-black-200">
            @{user.username || "username"}
          </p>
        </div>
        <div>
          <button className="text-[0.6rem] text-black-200">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}