import React from "react";
import backglow from "../assets/backglow.svg";
import hero_img from "../assets/Financial data-amico 1.svg";

const Hero = () => {
  const GoToUploadPage = () => {
    window.location.href = "/upload";
  };
  return (
    <div className="relative overflow-hidden">
      <div className="absolute -top-[200px] -left-[900px] w-full -z-[1] opacity-50">
        <img src={backglow} />
      </div>
      <div className="absolute bottom-[-100px] -right-[80px] w-full -z-[1] rotate-180 opacity-25">
        <img src={backglow} />
      </div>
      <div className="grid-background" />
      <div className="fade-overlay" />
      <div className="w-[80%] mx-auto flex justify-between my-11">
        <div className="flex flex-col items-start my-60 text-white w-[47%] ">
          <h1 className="font-montserrat font-semibold text-5xl mb-4">
            Master the Art of Data Cleaning with Dirty Data
          </h1>
          <p className="text-xl mb-10 font-light">
            Upload clean datasets and simulate real-world data problems with
            DirtifyData
          </p>
          <button
            className="font-medium transition-colors bg-[#3D3C99] hover:bg-[#1f1e64] text-white py-2 px-10 rounded-lg text-lg"
            onClick={GoToUploadPage}
          >
            Get Started
          </button>
        </div>
        <img className="w-[50rem] " src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
