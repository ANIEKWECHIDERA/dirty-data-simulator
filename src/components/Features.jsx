import React from "react";
import FeaturesCard from "./FeaturesCard";
import { FaFileUpload, FaCheckCircle } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { IoBarChart } from "react-icons/io5";

const Features = () => {
  return (
    <div className="py-24">
      <div className="flex justify-center items-center flex-col w-[80%] mx-auto">
        <div className="text-center">
          <h2 className="text-center mb-3">Why DirtifyData?</h2>
          <p className="text-[#333333] font-normal text-xl">
            A tool that is designed to turn clean data into real-world
            challenges for practice
          </p>
        </div>
        <div className="flex w-full justify-between items-center">
          <FeaturesCard
            icon={<FaFileUpload color="#3D3C99" size={40} />}
            heading={"Upload Any Dataset"}
            text={
              "Easily upload clean datasets in CSV format with up to 10,000 rows and 50 columns."
            }
          />
          <FeaturesCard
            icon={<IoIosWarning color="#3D3C99" size={40} />}
            heading={"Simulate Real-World Errors"}
            text={
              "Automatically introduce missing values, duplicates, and incorrect formats for practice."
            }
          />
          <FeaturesCard
            icon={<FaCheckCircle color="#3D3C99" size={40} />}
            heading={"Review and Compare"}
            text={
              "Keep track of your data cleaning progress and easily revisit previous uploads."
            }
          />
          <FeaturesCard
            icon={<IoBarChart color="#3D3C99" size={40} />}
            heading={"Practice with Different Issues"}
            text={
              "Choose from a variety of data cleaning challenges to prepare for real-world scenarios."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
