import React from "react";

const NavBar = () => {
  return (
    <div className=" w-full bg-[#12062A] text-white sticky top-0 py-3 border-b border-b-[#6467EF26] h-20 z-50">
      <div className="flex justify-between items-center w-[80%] mx-auto">
        <logo className="font-urbanist font-bold tracking-[0.8px] text-2xl">
          DIRTYDATA
        </logo>
        <ul className="flex justify-between gap-10 font-inter">
          <li>Home</li>
          <li>About</li>
          <li>Features</li>
          <li>How It Works</li>
          <li>Contact Us</li>
        </ul>
        <div className="flex justify-center items-center gap-6">
          <button className="font-inter border rounded-lg py-3 px-10">
            Sign In
          </button>
          <button className="font-inter border border-[#3D3C99] rounded-lg py-3 px-10 bg-[#3D3C99] hover:bg-[#1f1e64] hover:border-[#1f1e64] transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
