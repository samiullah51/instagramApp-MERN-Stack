import React from "react";
import "./Feed.css";
import Posts from "./posts/Posts";
import Stories from "./stories/Stories";
function Feed() {
  return (
    <div className="feed">
      <Stories />
      <Posts />
      {/* Friend Suggestions */}
    </div>
  );
}

export default Feed;
