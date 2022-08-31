import React, { useState } from "react";
import "./Signin.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import axios from "axios";
function Signin() {
  const [disable, setDisable] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handleSignin
  const handleSignin = async () => {
    try {
      const user = await axios.post("http://localhost:5000/api/user/login", {
        email,
        password,
      });
      console.log(user);
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <div className="signin">
      <div className="signin__left">
        <img
          src="https://betelgeusetech.com/wp-content/uploads/2021/05/instadevice.png"
          alt="image"
        />
      </div>
      {/* signin__container */}
      <div className="signin__container">
        <div className="signin__form">
          <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" />
          </div>
          {/* inputs */}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* button */}
          {!email || !password ? (
            <button disabled className="disableBtn">
              Sign In
            </button>
          ) : (
            <button className="ableBtn" onClick={handleSignin}>
              Sign In
            </button>
          )}

          {/* line and or */}
          <div className="line"></div>

          {/* Login with facebook */}
          <div className="facebook__auth">
            <FacebookIcon className="facebook__icon" />
            <p>Login with facebook</p>
          </div>

          {/* forgot password */}
          <p className="forgot__password">Forgot Password?</p>

          {/*  */}
        </div>
        <div className="signin__form form2">
          <p>
            Don't have an account?
            <span>
              <Link to="/register">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
