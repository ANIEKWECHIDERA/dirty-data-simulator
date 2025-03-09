import React from "react";

const CTA = () => {
  const GoToUploadPage = () => {
    window.location.href = "/upload";
  };
  return (
    <div className="bg-[#F9F9FC] w-full py-24">
      <div className="w-4/5 border border-[#CBCCFF80] bg-[#A5A7FF80] cta-gradient rounded-2xl mx-auto flex justify-between align-middle overflow-hidden">
        <div className="px-10 w-2/4 my-20 content-center">
          <h2 className="text-left text-3xl font-semibold text-[#333333] font-montserrat mb-3">
            Ready to get better at data cleaning?
          </h2>
          <p className="text-left text-[#666666] font-normal text-base">
            Creating an account gives you additional benefits, such as viewing
            your session history and saving previous simulations for future
            reference.
          </p>
          <div className="flex justify-start items-center mt-10">
            <button
              onClick={GoToUploadPage}
              className="font-medium transition-colors bg-[#3D3C99] hover:bg-[#1f1e64] text-white py-2 px-10 rounded-lg text-lg"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="my-auto w-[40%] h-[28.125rem] bg-white curved-border p-40 flex justify-center align-middle">
          <div className="">
            <img
              className="w-96"
              src="https://www.figma.com/file/TeFOetX7TvNye8QNTKq3Oj/image/49a104ee00f2e7e77e142478bf51fe2b68d73de2"
              alt="Cleaning data"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
