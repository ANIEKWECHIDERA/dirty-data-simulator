import React from "react";

const CTA = () => {
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
            <button className="font-medium transition-colors bg-[#3D3C99] hover:bg-[#1f1e64] text-white py-2 px-10 rounded-lg text-lg">
              Get Started
            </button>
          </div>
        </div>
        <div className="my-auto w-[40%] h-[28.125rem] bg-white curved-border p-40 flex justify-center align-middle">
          <div className="">
            <img
              className="w-96"
              src="https://s3-alpha-sig.figma.com/img/49a1/04ee/00f2e7e77e142478bf51fe2b68d73de2?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KyCbDPP1F7N2e9ijSYhKT9cf3b4yekqCWVElBFfx7u13ZNu7MYML1wWcUpmwJuV~WsL6k44bV7B21m~0liCkuQTeyIleSTjvidCtNAu45H24XpQgGsXNzwzRZILfXWx3XRwk3x2aoosKdQJKHYZGg3-c~rBtNGOv~RYsTrLtf~E2VVoUWQGS23kfCDblcXYPiyEf2fwMoCzYueZUTHF8PuVfPAUcWp3EW4AkGsXLy9t0XAqWOIJYJeI~jNJF-RWSrOM4-svv6lfcf7IVU2TgnOZRJzE3J0R5nFiWNiM36zY1ne2W-ipnlT4heuHSKR2fEDqHSlKVru7YidWotfV57w__"
              alt="Cleaning data"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
