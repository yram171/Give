import React, { useState } from "react";
import { ReactComponent as NotificationIcon } from "../../assets/notification.svg";
import { ReactComponent as SettingsIcon } from "../../assets/settings.svg";

export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search for:", searchQuery);
  };

  return (
    <nav className="flex items-center relative h-[90px]">
      {/* Brand */}
      <div className="cursor-pointer w-[27%] flex justify-start">
        <h1 className="text-[#ffdd4a] text-4xl font-bold">Give</h1>
      </div>
      <div className="w-[46%] flex gap-4">
        <div className="w-full max-w-[500px]">
        <form onSubmit={handleSearchSubmit} className="w-full">
          <div className="relative flex items-center w-full py-1 pl-5 pr-2 rounded-full bg-darkGrey placeholder-black/40">
            <input
              type="text"
              placeholder="Search Groups, Tags, or Polls..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full text-base bg-darkGrey placeholder-black/40 outline-none"
            />
            <button
              type="submit"
              className="right-2 p-2 rounded-full flex items-center justify-center hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5 stroke-2 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Notification Button */}
      <button className="p-2.5 rounded-full flex items-center justify-center bg-darkGrey">
        <NotificationIcon className="w-6 h-6 stroke-2 text-gray-600" />
      </button>
      </div>
      {/* Group search bar + notification button */}
      

      <div className="flex items-center gap-4 w-[27%] justify-end">
        <div className="flex items-center gap-2 cursor-pointer rounded-[25px]">
          <div className="w-[45px] h-[45px]">
            <img
              src="https://placehold.co/600x400.png"
              alt="User Avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <span className="font-medium text-gray-700 text-lg">Kate Smith</span>
        </div>

        <button className="rounded-full flex items-center justify-center">
          <SettingsIcon className="w-10 h-10" />
        </button>
      </div>
    </nav>
  );
}
