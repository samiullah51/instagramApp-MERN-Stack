import React, { useState } from "react";
import "./Feed.css";
import Posts from "./posts/Posts";
import Stories from "./stories/Stories";
import { data } from "../../components/feed/stories/data";
import Suggest from "./suggest/Suggest";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function Feed() {
  const [showSuggestions, setShowSuggestions] = useState(true);
  return (
    <div className="feed__container">
      <div className="feed">
        <Stories />
        <Posts />
      </div>
      {/* Friend Suggestions */}

      {showSuggestions && (
        <ArrowBackIcon
          className="showIcon"
          onClick={() => setShowSuggestions(false)}
        />
      )}

      <div className={!showSuggestions ? "suggestions" : "suggestions hide"}>
        <ArrowForwardIcon
          className="hideIcon"
          onClick={() => setShowSuggestions(true)}
        />
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
            <Suggest key = {suggest.id} suggest={suggest} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;
