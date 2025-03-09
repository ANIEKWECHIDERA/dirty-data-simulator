import React from "react";

const About = () => {
  const GoToUploadPage = () => {
    window.location.href = "/upload";
  };
  return (
    <div className="bg-[#F9F9FC] py-24">
      <div className="border border-[#6666661A] rounded-2xl flex justify-between items-center w-[80%] mx-auto">
        <img
          src="https://www.figma.com/file/TeFOetX7TvNye8QNTKq3Oj/image/ecf1c68b042a943a300851b25fe1787f287fa321"
          alt=""
          className="w-[47%]"
        />
        <div className="text-left w-[47%] py-5">
          <h3 className="font-montserrat font-bold text-3xl text-[#3D3C99] mb-3">
            About DirtifyData
          </h3>
          <p className="font-normal text-base text-[#333333] leading-7 mb-10">
            DirtifyData is dedicated to help data professional and students
            simulate real-world data cleaning challenges. Our platform makes it
            easy to upload clean data, introduce common data errors and practice
            essential data cleaning skills. We are committed to helping you
            master messy data, preparing you for the complexities of real-world
            projects.
          </p>
          <button
            onClick={GoToUploadPage}
            className="font-medium transition-colors bg-[#3D3C99] hover:bg-[#1f1e64] text-white py-2 px-10 rounded-lg text-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
0;
