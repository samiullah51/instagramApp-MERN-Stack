import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
function Register() {
  const [email, setEmail] = useState("");
  const [fullName, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // handleRegister
  const handleRegister = async () => {
    const newUser = await axios.post(
      "http://localhost:5000/api/user/register",
      {
        email,
        fullName,
        username,
        password,
      }
    );
    console.log(newUser);
  };
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
          <input
            type="text"
            placeholder="Phone Number or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* button */}
          {!email || !fullName || !username || !password ? (
            <button disabled className="disableBtn">
              Sign Up
            </button>
          ) : (
            <button className="ableBtn" onClick={handleRegister}>
              Sign Up
            </button>
          )}
        </div>
        <div className="register__form form2">
          <p>
            Have an account?{" "}
            <span>
              <Link to="/signin">Log In</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
