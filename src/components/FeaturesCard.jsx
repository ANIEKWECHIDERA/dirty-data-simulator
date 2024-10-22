import React from "react";

const FeaturesCard = ({ icon, heading, text }) => {
  return (
    <div className="flex justify-evenly items-start flex-col bg-white border border-[#E5E5E5] rounded-2xl shadow-xl w-[23%] h-[320px] mt-10 py-9 px-5 hover:scale-105 transition-transform hover:shadow-2xl">
      {icon}
      <h3 className="my-4 font-montserrat font-semibold text-xl text-[#18181B]">
        {heading}
      </h3>
      <p className="text-[#666666] font-normal text-base leading-5">{text}</p>
    </div>
  );
};

export default FeaturesCard;
