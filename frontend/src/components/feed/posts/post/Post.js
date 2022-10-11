import React, { useState } from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShortcutOutlinedIcon from "@mui/icons-material/ShortcutOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";

function Post({ post }) {
  const [isLike, setIsLike] = useState(false);
  const [tag, setTag] = useState(false);
  const [comment, setComment] = useState("");
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__info">
          <img src={post.profilePic} alt="profile picture" />
          <p className="post__username">{post.username}</p>
        </div>
        <MoreHorizIcon />
      </div>
      <img src={post.poster} alt="poster" className="posterImg" />
      {/* Feedback */}
      <div className="feedback">
        <div className="feedback__left">
          {!isLike ? (
            <FavoriteBorderIcon onClick={() => setIsLike(true)} />
          ) : (
            <FavoriteOutlinedIcon
              style={{ color: "rgb(221, 42, 123)" }}
              onClick={() => setIsLike(false)}
            />
          )}
          <ChatBubbleOutlineOutlinedIcon />
          <ShortcutOutlinedIcon />
        </div>
        <div className="feedback__right">
          {!tag ? (
            <BookmarkBorderOutlinedIcon onClick={() => setTag(true)} />
          ) : (
            <BookmarkOutlinedIcon onClick={() => setTag(false)} />
          )}
        </div>
      </div>
      {/* Likes */}
      <div className="container">
        <p className="likes">10 likes</p>
        <p className="comments">View 2 comments</p>
        <p className="timing">2 DAYS AGO</p>
      </div>
      {/* Footer */}
      <div className="footer">
        <SentimentSatisfiedIcon />
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          type="text"
          placeholder="Add a comment..."
        />
        {comment ? (
          <button className="activeBtn">Post</button>
        ) : (
          <button className="disableBtn" disabled>
            Post
          </button>
        )}
      </div>
    </div>
  );
}

export default Post;
