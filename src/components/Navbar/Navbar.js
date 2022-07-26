import React from "react";
import { GiHamburgerMenu, GiBlockHouse } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="md:hidden h-16 flex items-center">
      <div className="flex items-center text-lg">
        <GiBlockHouse className="text-green-500" />
        <a className="ml-2" href="">
          Meet me at the bar
        </a>
      </div>
      <div className="ml-auto flex items-center  ">
        <button className="bg-green-500 w-8 h-8 rounded-full flex justify-center items-center text-white text-sm">
          <FaUserAlt />
        </button>
        <button className="ml-5 bg-green-500 h-8 w-20 rounded-lg text-white text-sm">
          Signup
        </button>
        <button className="ml-5 text-lg ">
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
