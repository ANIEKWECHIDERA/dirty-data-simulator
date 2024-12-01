import React from "react";

const HowItWorksCard = ({ image, step, heading, text }) => {
  return (
    <div className="flex flex-col bg-white border border-[#E5E5E5] rounded-2xl shadow-xl w-[23%] h-[429px] mt-10 hover:scale-105 transition-transform hover:shadow-2xl">
      <div className="w-full h-48 object-contain overflow-hidden">
        <img
          className="mx-auto flex justify-center align-middle"
          src={image}
          alt="img"
        />
      </div>
      <div className="px-5 pb-9 items-start justify-evenly">
        <p className="text-base text-[#666666] my-6">{step}:</p>
        <h3 className="my-4 font-montserrat font-semibold text-xl text-[#18181B]">
          {heading}
        </h3>
        <p className="text-[#666666] font-normal text-base leading-5">{text}</p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
