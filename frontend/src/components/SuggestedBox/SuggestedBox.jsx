import React from "react";

export default function SuggestedBox() {
  const tags = ["#snacks", "#movie", "#dinner"];
  const groups = ["Group 1", "Group 2", "Group 3", "Group 4"];

  return (
    <aside className="w-[27%]">
      <div className="bg-backgroundGrey rounded-3xl p-3 shadow-sm">

        {/* Suggested */}
        <div>
          <p className="font-semibold text-base text-black text-left">Suggested</p>
        </div>

        {/* Tags */}
        <div className="mt-5">
          <h3 className="text-sm font-semibold text-left text-black">Tags</h3>
          <ul className="text-xs mt-2 space-y-1 font-medium text-black">
            {tags.map((tag, i) => (
              <li key={i} className="flex justify-between items-center cursor-pointer pl-2">
                {tag}
                <img
                  src="/arrow.svg"
                  alt="arrow right"
                  style={{ width: "0.75em", height: "0.75em" }}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Groups */}
        <div className="mt-5">
          <h3 className="text-sm font-semibold text-left text-black">Groups</h3>
          <ul className="text-xs mt-2 space-y-1 font-medium text-black">
            {groups.map((group, i) => (
              <li key={i} className="flex justify-between items-center cursor-pointer pl-2">
                {group}
                <img
                  src="/arrow.svg"
                  alt="arrow right"
                  style={{ width: "0.75em", height: "0.75em" }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}