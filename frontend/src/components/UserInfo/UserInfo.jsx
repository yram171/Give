import React, { useState } from "react";

export default function Grouptab() {
  const [username, setUsername] = useState("");

  return (
    // <div className="w-[27%] rounded-xl">
      <div className="w-[27%] rounded-xl flex items-start bg-backgroundGrey rounded-3xl px-4 py-2 gap-2">
        {/* User Avatar */}
        <div className="w-14 h-14 rounded-full bg-gray-300" />
        <div className="flex flex-col items-start justify-between gap-4">
          <div className="text-left">
            <p className="font-semibold text-base text-black">Hi Kate!</p>
            <p className="text-[0.6rem] text-black-200">@katesmith0001</p>
          </div>
           <div>
            <button className="text-[0.6rem] text-black-200">Edit Profile</button>
          </div>
        </div>
       
      </div>
      // </div>

  );
}
