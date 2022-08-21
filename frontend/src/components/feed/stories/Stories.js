import React, { useState } from "react";
import { data } from "./data";
import "./Stories.css";
import Story from "./story/Story";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
function Stories() {
  const [transform, setTransform] = useState(0);

  // hanlde Next
  const handleNext = () => {
    setTransform(transform + 120);
  };
  //  handle Previous
  const handlePrevious = () => {
    transform > 0 && setTransform(transform - 120);
  };
  return (
    <div className="stories">
      {data.map((user) => (
        <Story user={user} transform={transform} />
      ))}

      {transform < (data.length - 6) * 60 && (
        <div className="btn" onClick={handleNext}>
          <KeyboardArrowRightIcon />
        </div>
      )}

      {transform > 0 && (
        <div className="btn2" onClick={handlePrevious}>
          <KeyboardArrowLeftIcon />
        </div>
      )}
    </div>
  );
}

export default Stories;
