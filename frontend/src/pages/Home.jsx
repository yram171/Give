/**
 * Home page component.
 */
import React, { useState } from "react";
import AppLayout from "../layouts/AppLayout";
import LeftSidebar from "../components/LeftSideBar";
import PostsList from "../components/PostsList";
import { SuggestedBox, GroupSearch, CreatePost } from "../";
import { PostsProvider, usePosts } from "../contexts/PostsContext";
import { homeTabConfig } from "../config/tabConfig";

/**
 * Home screen content component (wrapped by PostsProvider)
 * @returns {JSX.Element}
 */
function HomeContent() {
  const { posts, loading } = usePosts();
  const [currentTab, setCurrentTab] = useState("home");

  const showCreate = currentTab === "create";

  return (
    <AppLayout
      left={
        <LeftSidebar
          screenTabProps={{
            tabConfig: homeTabConfig,
            onTabChange: setCurrentTab,
            onCurrentTab: currentTab,
          }}
          extra={<SuggestedBox />}
        />
      }
      center={
        showCreate ? <CreatePost /> : loading ? null : <PostsList posts={posts} />
      }
      right={<GroupSearch />}
    />
  );
}

/**
 * Home page component with Posts provider.
 * @returns {JSX.Element}
 */
export default function HomeScreen() {
  return (
    <PostsProvider>
      <HomeContent />
    </PostsProvider>
  );
}