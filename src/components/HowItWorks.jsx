import React from "react";
import HowItWorksCard from "./HowItWorksCard";

const HowItWorks = () => {
  return (
    <div className="bg-[#F9F9FC] py-24">
      <div className="flex justify-center items-center flex-col w-[80%] mx-auto">
        <div className="text-center">
          <h2 className="text-center mb-3">How DirtifyData Works</h2>
          <p className="text-[#333333] font-normal text-xl">
            A simple step-by-step guide to mastering your data cleaning skills
          </p>
        </div>
        <div className="flex w-full justify-between items-center">
          <HowItWorksCard
            image="https://www.figma.com/file/TeFOetX7TvNye8QNTKq3Oj/image/27e810cac903b8920adfd2825787a86901817ef4"
            step={"Step 1"}
            heading={"Upload Dataset"}
            text={
              "Easily upload clean datasets in CSV format with up to 10,000 rows and 50 columns."
            }
          />
          <HowItWorksCard
            image="https://www.figma.com/file/TeFOetX7TvNye8QNTKq3Oj/image/b1777ac05e52e7b739664640bef9314a4388ab74"
            step={"Step 2"}
            heading={"Select dirtiness level"}
            text={
              "Customize the level of dirtiness: Mild, Moderate, or Extreme. Specify which rows and columns to target for more control."
            }
          />
          <HowItWorksCard
            image="https://www.figma.com/file/TeFOetX7TvNye8QNTKq3Oj/image/0bfc8996b9b093e7ed1d8bb3d51ba8757603616e"
            step={"Step 3"}
            heading={"Simulate dirty data"}
            text={
              "The system introduces common data issues like duplicates, missing values, and incorrect formats to mimic real-world data problems."
            }
          />
          <HowItWorksCard
            image="https://www.figma.com/file/TeFOetX7TvNye8QNTKq3Oj/image/3f8ba5bce5d119893039dc21137141d5f4b553b3"
            step={"Step 4"}
            heading={"Download Dirty Data"}
            text={
              "Download the modified dataset and practice your data cleaning skills in realistic scenarios."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
