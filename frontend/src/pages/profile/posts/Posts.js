import React from "react";
import { data } from "../../../components/feed/stories/data";
import "./Posts.css";
function Posts() {
  return (
    <div className="posts">
      {data.map((user) => (
        <div className="single__post">
          <img src={user.img} />
          <div className="overlay"></div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
