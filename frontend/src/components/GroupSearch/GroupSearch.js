import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function GroupSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search for:", searchQuery);
  };
  const groups = [
  { id: 1, name: "Group 1" },
  { id: 2, name: "Group 2" },
  { id: 3, name: "Group 3" },
  { id: 4, name: "Group 4" },
  { id: 5, name: "Group 5" },
  { id: 6, name: "Group 6" },
  { id: 7, name: "Group 7" },
  { id: 8, name: "Group 8" },
  { id: 9, name: "Group 9" }
];

// const posts = dataFromDB.map(doc => ({
//   user: doc.user,
//   group: doc.group,
//   post: doc.post,
//   pollOptions: doc.pollOptions,
// }));

  function GroupItem({ name }) {
  return (
    <li className="flex items-center rounded-xl gap-4 p-2 hover:bg-gray-100 cursor-pointer">
      <div className="w-10 h-10 rounded-full bg-gray-300" />
      <p className="font-semibold text-base text-black">{name}</p>
    </li>
  );
  }

  const displayedGroups = expanded ? groups : groups.slice(0, 5);

  return (
    <div className="w-full h-full relative">
      <div className={`bg-backgroundGrey rounded-3xl p-4 shadow-sm flex flex-col gap-4 ${expanded ? 'h-full' : ''}`}>
        <div>
          <p className="font-semibold text-base text-black text-left">Groups</p>
        </div>

        <div className="flex gap-4">
        <div className="w-full max-w-[500px]">
        <form onSubmit={handleSearchSubmit} className="w-full">
          <div className="relative flex items-center w-full py-1 pl-5 pr-2 rounded-full bg-darkGrey placeholder-black/40 h-8">
            <input
              type="text"
              placeholder="Search Groups"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full text-xs bg-darkGrey placeholder-black/40 outline-none"
            />
              <button
              type="submit"
              className="right-2 p-2 rounded-full flex items-center justify-center"
            >
              <svg
                className="w-4 h-4 stroke-2 text-black opacity-60 hover:opacity-100"
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
    </div>
    {/* List of Groups */}
    <div className={`flex flex-col gap-2 ${expanded ? "overflow-y-auto" : ""} with-scrollbar items-start`}>
      <ul className='flex flex-col gap-2 grow'>
          {displayedGroups.map((g) => (
            <GroupItem key={g.id} name={g.name} />
          ))}
      </ul>
      <button
        type="button"
        className="right-2 p-2 rounded-full flex items-center justify-center"
        onClick={() => setExpanded((prev) => !prev)}
        >
        <p className="text-xs font-semibold text-black opacity-60 hover:opacity-100">
          {expanded ? "Collapse" : "View All"}
        </p>
      </button>
    </div>
  </div>
</div>

  );
}



  