import React from "react";
import { Post, SuggestedBox, UserInfo, NavBar, ScreenTab, GroupSearch } from "../";

function HomeScreen({ postData }) {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        {/* left column */}
        <div className="flex flex-col w-[27%] gap-4">
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
        
        {/* right column */}
        <div className="flex flex-col w-[27%]">
          <GroupSearch />
        </div>
      </main>
    </>
  );
}

export default HomeScreen;
