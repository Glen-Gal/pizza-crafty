import React from "react";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const userImg = null;
  // const defaultProfileImage =
  //   "https://cdn-icons-png.flaticon.com/512/1144/1144760.png";
  const defaultProfileImage =
    "https://occ-0-1783-1009.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABR-76XnDIpgI9Y5AxW-0mbA8XM6pBawp8AEibixll-x2uzc_tTvqVvqd5gGF2lU_yNwUWSvCvw89O0nfyLklL0_2f8nZ6y0MHg.png";

  return (
    <header className="fixed z-50 top-0 w-full text-black py-3 shadow bg-white/75 backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <Link to="/pizzacrafty">
          <div className="text-2xl font-bold tracking-tighter w-[32px] flex justify-start items-center gap-2">
            <img src={logo} alt="" />
            Pizza
          </div>
        </Link>

        {/* Navigation links in the middle */}
        <nav className="space-x-10">
          <a href="/pizzacrafty" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Services
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </nav>

        {/* User profile on the right */}
        <Link to="user/profile">
          <div className="flex items-center space-x-2">
            <img
              src={userImg || defaultProfileImage} // Use userImg or defaultProfileImage
              alt="User Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
