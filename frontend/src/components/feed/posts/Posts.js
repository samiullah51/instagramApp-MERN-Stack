import React from "react";
import { data } from "../stories/data";
import Post from "./post/Post";
import "./Posts.css";

function Posts() {
  return (
    <div>
      {data.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}

export default Posts;
