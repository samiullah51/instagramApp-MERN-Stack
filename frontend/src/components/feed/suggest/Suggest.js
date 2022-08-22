import React, { useState } from "react";
import "./Suggest.css";
function Suggest({ suggest }) {
  const [follow, setFollow] = useState(false);
  return (
    <div className="suggest">
      <div className="suggested__user">
        <img src={suggest.img} />
        <p>{suggest.username}</p>
      </div>
      {!follow ? (
        <button className="follow" onClick={() => setFollow(true)}>
          Follow
        </button>
      ) : (
        <button className="following" onClick={() => setFollow(false)}>
          Following
        </button>
      )}
    </div>
  );
}

export default Suggest;
