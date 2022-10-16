import React, { useEffect, useState } from "react";
import { data } from "../../../components/feed/stories/data";
import "./ProfileData.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useSelector } from "react-redux";
import axios from "axios";

function ProfileData() {
  const [posts, setPosts] = useState([]);
  // Get all posts
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/post/allposts/${user._id}`
      );
      setPosts(res.data);
    };
    getPosts();
  }, []);

  const user = useSelector((state) => state.user);
  return (
    <div className="profiledata">
      <img src={user.profilePic} />
      <div className="right">
        {/* right header */}
        <div className="right__header">
          <p className="header__username">{user.username}</p>
          <button>Edit Profile</button>
          <SettingsOutlinedIcon />
        </div>
        {/* followers */}
        <div className="followers">
          <p>
            <b>{posts.length}</b> posts
          </p>
          <p>
            <b>171</b> followers
          </p>
          <p>
            <b>232</b> following
          </p>
        </div>
        {/* username */}
        <p className="username">{user.fullName}</p>
      </div>
      {/* Line */}
    </div>
  );
}

export default ProfileData;
