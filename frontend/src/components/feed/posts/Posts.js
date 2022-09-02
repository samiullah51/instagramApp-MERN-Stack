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
        posts.map((post) => <Post post={post} />)
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Posts;
