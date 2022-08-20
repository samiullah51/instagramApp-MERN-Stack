import React, { useState } from "react";
import "./Register.css";

import FacebookIcon from "@mui/icons-material/Facebook";
function Register() {
  const [disable, setDisable] = useState(true);
  return (
    <div className="register">
      <div className="register__left">
        <img
          src="https://betelgeusetech.com/wp-content/uploads/2021/05/instadevice.png"
          alt="image"
        />
      </div>
      {/* register__container */}
      <div className="register__container">
        <div className="register__form">
          <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" />
          </div>
          <p
            style={{
              textAlign: "center",
              color: "gray",
              fontWeight: "500",
              fontSize: "18px",
            }}
          >
            Sign up to see photos and videos from your friends.
          </p>
          {/* Login with facebook */}
          <div className="facebook__auth">
            <FacebookIcon className="facebook__icon" />
            <p>Login with facebook</p>
          </div>
          {/* line and or */}
          <div className="line"></div>
          {/* inputs */}
          <input type="text" placeholder="Phone Number or Email" />
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          {/* button */}
          {disable ? (
            <button disabled className="disableBtn">
              Sign Up
            </button>
          ) : (
            <button className="ableBtn">Sign Up</button>
          )}
        </div>
        <div className="register__form form2">
          <p>
            Have an account? <span>Log In</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
