import React from "react";
import "./Profile.css";
import Navbar from "./../../components/navbar/Navbar";
import ProfileData from "./profiledata/ProfileData";
function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile">
        <ProfileData />
        <div className="divline"></div>
      </div>
    </>
  );
}

export default Profile;
