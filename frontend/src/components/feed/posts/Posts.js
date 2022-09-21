import React, { useEffect, useState } from "react";
import { data } from "../stories/data";
import Post from "./post/Post";
import "./Posts.css";
import axios from "axios";
function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  // Get all posts
  useEffect(() => {
    setLoading(true);
    const getPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/post/allposts");
      setPosts(res.data);
      console.log(res.data);
      setLoading(false);
    };
    getPosts();
  }, []);

  return (
    <div>
      {!loading ? (
        posts.map((post) => <Post key = {post._id} post={post} />)
      ) : (
        <img src = "https://i.pinimg.com/originals/be/ce/0c/bece0c797cb134aefb2cb836578c9249.gif"/>
      )}
    </div>
  );
}

export default Posts;
