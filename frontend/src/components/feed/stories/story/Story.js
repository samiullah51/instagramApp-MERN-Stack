import React from "react";
import "./Story.css";
function Story({ user, transform }) {
  return (
    <div className="story" style={{ transform: `translateX(-${transform}px)` }}>
      <img src={user.img} />
      <p>{user.username.slice(0, 8)}...</p>
    </div>
  );
}

export default Story;
