import React from "react";
import { data } from "../../../components/feed/stories/data";
import "./Posts.css";
function Posts() {
  return (
    <div className="posts">
      {data.map((user) => (
        <img src={user.img} />
      ))}
    </div>
  );
}

export default Posts;
