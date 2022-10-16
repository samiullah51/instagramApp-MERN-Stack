import React, { useEffect, useState } from "react";
import { data } from "../../../components/feed/stories/data";
import "./Posts.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import axios from "axios";
import { useSelector } from "react-redux";
function Posts() {
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  // Get all posts
  useEffect(() => {
    setLoading(true);

    const getPosts = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/post/allposts/${user._id}`
      );
      setPosts(res.data);
      setLoading(false);
    };
    getPosts();
  }, []);

  return (
    <div className="posts">
      {!loading ? (
        posts.map((post) => (
          <div className="single__post">
            <img src={post.poster} />
            <DeleteOutlineIcon />
          </div>
        ))
      ) : (
        <h2 style={{ textAlign: "center", width: "100%" }}>Loading...</h2>
      )}
    </div>
  );
}

export default Posts;
