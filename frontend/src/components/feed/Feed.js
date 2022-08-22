import React from "react";
import "./Feed.css";
import Posts from "./posts/Posts";
import Stories from "./stories/Stories";
import { data } from "../../components/feed/stories/data";
import Suggest from "./suggest/Suggest";
function Feed() {
  return (
    <div className="feed__container">
      <div className="feed">
        <Stories />
        <Posts />
      </div>
      {/* Friend Suggestions */}
      <div className="suggestions">
        <div className="suggestion__header">
          <img
            src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
            alt="profile picture"
          />
          <p>Sami Samiullah</p>
        </div>
        <p className="suggested">Suggested for you</p>
        {/* Suggestion */}
        <div className="suggest__container">
          {data.map((suggest) => (
            <Suggest suggest={suggest} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;
