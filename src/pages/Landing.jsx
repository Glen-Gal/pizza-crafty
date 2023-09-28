import React from "react";
import banner from "../img/Thumbnail.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="h-screen bg__gradient relative">
      <img src={banner} alt="" className="h-[100%] m-auto" />
      <Link to="/home">
        <button className="absolute px-5 py-3 rounded-lg text-black border border-black top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-black hover:text-white transition-all duration-500 ease-in-out">
          Join Now
        </button>
      </Link>
    </div>
  );
};

export default Landing;
