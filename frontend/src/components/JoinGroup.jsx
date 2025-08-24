  
import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function JoinGroup({ id }) {
  const [requested, setRequested] = useState(false);
  const [groupName, setGroupName] = useState("");

  useEffect(() => {
    async function fetchGroupName() {
      if (!id) return;
      try {
        const groupRef = doc(db, "groups", id);
        const groupSnap = await getDoc(groupRef);
        if (groupSnap.exists()) {
          setGroupName(groupSnap.data().name || "");
        } else {
          setGroupName("");
        }
      } catch (err) {
        setGroupName("");
      }
    }
    fetchGroupName();
  }, [id]);

  function JoinGroupButton() {
    return (
      <button
        onClick={() => setRequested(true)}
        disabled={requested}
        className={`font-semibold py-2 px-4 rounded-full transition-colors
          ${requested 
            ? "bg-darkGrey text-black/60 cursor-not-allowed" 
            : "bg-darkGrey text-black hover:bg-defaultYellow"
          }`}
      >
        {requested ? "Pending Request" : `Join Group${groupName ? `: ${groupName}` : ` ${id}`}`}
      </button>
    );
  }

  return (
    <div className="w-full rounded-3xl p-4 bg-backgroundGrey flex flex-col items-center h-[350px]">
        <h2 className="text-lg font-semibold text-black mb-4 m-[3rem]">Uh oh. Looks like you're not a member of {groupName ? `Group: ${groupName}` : `Group ${id}`}</h2>
        <p className="text-sm text-black/60 mb-6 m-[1rem]">Join the group to see posts and participate in discussions. You can leave the group anytime.</p>
        <JoinGroupButton id={id} />
        <p className="text-[0.7rem] text-black/60 mt-8 m-[2rem]">We'll let you know once you're a member.</p>
    </div>
  )
}


