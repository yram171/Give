import React from "react";
import { Post, SuggestedBox, UserInfo, NavBar, ScreenTab } from "../";

function HomeScreen({ postData }) {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <div className="flex flex-col w-[27%] gap-4">
          {/* left column */}
          <UserInfo />
          <ScreenTab />
          <SuggestedBox />
        </div>

        <Post
          user={postData.user}
          group={postData.group}
          post={postData.post}
          pollOptions={postData.pollOptions}
        />

        <div className="flex flex-col w-[27%]">
          {/* right column */}
          MMM
        </div>
      </main>
    </>
  );
}

export default HomeScreen;
