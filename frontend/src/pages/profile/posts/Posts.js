import React from "react";
import { data } from "../../../components/feed/stories/data";
import "./Posts.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function Posts() {
  return (
    <div className="posts">
      {data.map((user) => (
        <div className="single__post">
          <img src={user.img} />
          <DeleteOutlineIcon />
        </div>
      ))}
    </div>
  );
}

export default Posts;
