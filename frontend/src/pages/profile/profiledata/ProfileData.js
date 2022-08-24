import React from "react";
import { data } from "../../../components/feed/stories/data";
import "./ProfileData.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function ProfileData() {
  return (
    <div className="profiledata">
      <img src={data[0].img} />
      <div className="right">
        {/* right header */}
        <div className="right__header">
          <p className="header__username">sami_samiullah51728</p>
          <button>Edit Profile</button>
          <SettingsOutlinedIcon />
        </div>
        {/* followers */}
        <div className="followers">
          <p>
            <b>17</b> posts
          </p>
          <p>
            <b>171</b> followers
          </p>
          <p>
            <b>232</b> following
          </p>
        </div>
        {/* username */}
        <p className="username">Sami Samiullah</p>
      </div>
      {/* Line */}
    </div>
  );
}

export default ProfileData;
