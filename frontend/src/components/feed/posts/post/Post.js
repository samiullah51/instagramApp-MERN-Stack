import React from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function Post({ post }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__info">
          <img src={post.img} alt="profile picture" />
          <p className="post__username">{post.username}</p>
        </div>
        <MoreHorizIcon />
      </div>
      <img src={post.img} alt="poster" className="posterImg" />
    </div>
  );
}

export default Post;
