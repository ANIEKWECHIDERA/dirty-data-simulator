import React from "react";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#100425] pb-9 pt-20 w-full">
        <div className="flex justify-evenly content-center mx-auto mb-20">
          <div className="p-5 text-white text-left">
            <h3 className="font-urbanist text-white text-lg font-bold mb-11">
              DIRTIFYDATA
            </h3>
            <div className="font-montserrat mb-16">
              <h4 className="font-medium mb-2">Email Address</h4>
              <p className="">supportdirtydata.com</p>
            </div>
            <div className="font-montserrat">
              <h4 className="font-medium mb-2">Phone Number</h4>
              <p className="">+234-810 886 3332</p>
              <p className="">+234-900 255 1226</p>
              <p className="">+234-701 779 5566</p>
            </div>
          </div>
          <div className="p-5 text-white text-left">
            <h3 className="font-montserrat text-white text-lg font-bold mb-11">
              Quick Links
            </h3>
            <div className="font-montserrat flex flex-col justify-start gap-2 ">
              <p className="cursor-pointer hover:text-[#3D3C99] transition-all">
                Home
              </p>
              <p className="cursor-pointer hover:text-[#3D3C99] transition-all">
                About Us
              </p>
              <p className="cursor-pointer hover:text-[#3D3C99] transition-all">
                Features
              </p>
              <p className="cursor-pointer hover:text-[#3D3C99] transition-all">
                How It Works
              </p>
              <p className="cursor-pointer hover:text-[#3D3C99] transition-all">
                Contact Us
              </p>
              <p className="cursor-pointer hover:text-[#3D3C99] transition-all">
                Privacy Policy
              </p>
            </div>
          </div>
          <div className="p-5 text-white text-left">
            <h3 className="font-montserrat text-white text-lg font-bold mb-11">
              Social Media
            </h3>
            <div className="flex justify-center content-center gap-10 mb-8 cursor-pointer">
              <FaXTwitter
                className="cursor-pointer hover:text-[#3D3C99] transition-all"
                size={28}
              />
              <FaFacebookF
                className="cursor-pointer hover:text-[#3D3C99] transition-all"
                size={28}
              />
              <FaLinkedin
                className="cursor-pointer hover:text-[#3D3C99] transition-all"
                size={28}
              />
              <FaYoutube
                className="cursor-pointer hover:text-[#3D3C99] transition-all"
                size={28}
              />
              <FaInstagram
                className="cursor-pointer hover:text-[#3D3C99] transition-all"
                size={28}
              />
            </div>
            <div>
              <h4 className="font-montserrat text-white text-base font-semibold mb-6">
                Stay Connected
              </h4>
              <p className="font-montserrat text-sm mb-4">
                Be the first to hear our latest updates.
              </p>
            </div>
            <div className="w-full flex justify-center align-middle">
              <input
                className="rounded-l-md w-full p-4 text-xs text-[#989898] input-field-newsletter"
                type="text"
                placeholder="Enter your email address "
              />
              <button className="text-xs bg-[#3D3C99] px-2 rounded-r-md hover:bg-[#1f1e64] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="font-montserrat font-medium text-xs text-center text-white">
          Copyright © 2024, DIRTIFYDATA
        </div>
      </div>
    </div>
  );
};

export default Footer;
