import React from "react";
import "./Profile.css";
import Navbar from "./../../components/navbar/Navbar";
import ProfileData from "./profiledata/ProfileData";
import Posts from "./posts/Posts";
function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile">
        <ProfileData />
        <div className="divline"></div>
        <Posts />
      </div>
    </>
  );
}

export default Profile;
