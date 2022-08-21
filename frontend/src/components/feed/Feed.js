import React from "react";
import "./Feed.css";
import Stories from "./stories/Stories";
function Feed() {
  return (
    <div className="feed">
      <Stories />
      <div className="box2">
        <p>This is box 2</p>
      </div>
    </div>
  );
}

export default Feed;
