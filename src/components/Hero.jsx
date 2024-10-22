import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="grid-background" />
      <div className="fade-overlay" />
      <div className="w-[80%] mx-auto flex justify-between">
        <div className="flex flex-col items-start my-60 text-white w-[47%] ">
          <h1 className="font-montserrat font-semibold text-5xl mb-4">
            Master the Art of Data Cleaning with Dirty Data
          </h1>
          <p className="text-xl mb-10 font-light">
            Upload clean datasets and simulate real-world data problems with
            DirtifyData
          </p>
          <button className="font-medium transition-colors bg-[#3D3C99] hover:bg-[#1f1e64] text-white py-2 px-10 rounded-lg text-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
