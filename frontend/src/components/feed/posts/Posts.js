import React, { useEffect, useState } from "react";
import { data } from "../stories/data";
import Post from "./post/Post";
import "./Posts.css";
import axios from "axios";
function Posts() {
  const [posts, setPosts] = useState([]);
  // Get all posts
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/post/allposts");
      setPosts(res.data);
      console.log(res.data);
    };
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}

export default Posts;
