import React from "react";
import Feed from "../../components/feed/Feed";
import Navbar from "../../components/navbar/Navbar";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Feed />
    </div>
  );
}
export default Home;
