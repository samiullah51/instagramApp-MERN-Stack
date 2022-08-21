import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
function Navbar() {
  return (
    <div className="navbar">
      {/* Logo  */}
      <div className="dropdown">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" />
      </div>

      {/* SearchBox */}
      <div className="searchbox">
        <SearchIcon className="search__icon" />
        <input type="text" placeholder="Search" />
      </div>

      {/* Right Menu */}
      <div className="right__menu">
        <p>menu</p>
      </div>
    </div>
  );
}

export default Navbar;
