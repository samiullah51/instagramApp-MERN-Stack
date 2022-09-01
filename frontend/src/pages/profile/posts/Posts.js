import React, { useEffect, useState } from "react";
import { data } from "../../../components/feed/stories/data";
import "./Posts.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import axios from "axios";
import { useSelector } from "react-redux";
function Posts() {
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.user);
  // Get all posts
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/post/allposts/${user._id}`
      );
      setPosts(res.data);
      console.log(res.data);
    };
    getPosts();
  }, []);
  return (
    <div className="posts">
      {posts.map((user) => (
        <div className="single__post">
          <img src={user.poster} />
          <DeleteOutlineIcon />
        </div>
      ))}
    </div>
  );
}

export default Posts;
