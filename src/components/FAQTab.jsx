import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQTab = ({ question, answer }) => {
  const [showAnswer, setAnswer] = useState(false);
  return (
    <div
      className={`border transition-all rounded-2xl p-4 mb-10 w-4/5 mx-auto hover:bg-slate-50 cursor-pointer ${
        showAnswer ? "h-32" : "h-16 overflow-hidden"
      } `}
      onClick={() => setAnswer(!showAnswer)}
    >
      <div className="flex justify-between text items-center">
        <div>
          <h3 className="text-xl font-[#ffffff]">{question}</h3>
        </div>
        <div
          className={`cursor-pointer transition-all ${
            showAnswer ? "rotate-180" : "rotate-0"
          }`}
        >
          <IoIosArrowDown size={25} color="#333333" />
        </div>
      </div>
      <div className="w-11/12 mt-4">
        <p
          className={`text-[#777777] transition-opacity duration-300 ${
            showAnswer ? "opacity-100" : "opacity-0"
          }`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQTab;
