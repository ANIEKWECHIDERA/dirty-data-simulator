import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#F9F9FC]">
      <div className="py-24 px-12 mx-auto w-4/5 flex justify-between align-middle flex-col">
        <div className="text-center">
          <h2 className="text-center mb-3">Contact Us</h2>
          <p className="font-montserrat text-[#333333] text-xl">
            We’d love to hear from you! Reach out for any questions, support, or
            feedback.
          </p>
        </div>
        <form className="mt-8">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-base text-[#66666699]" htmlFor="">
                First Name
              </label>
              <input
                className="border rounded-lg input-field"
                type="text"
                name="FirstName"
              />
            </div>
            <div className="flex flex-col justify-end ml-auto">
              <label className="text-base text-[#66666699]" htmlFor="">
                Last Name
              </label>
              <input
                className="border rounded-lg input-field"
                type="text"
                name="LastName"
              />
            </div>
            <div>
              <label className="text-base text-[#66666699] " htmlFor="">
                Email Address
              </label>
              <input
                className="border rounded-lg input-field"
                type="email"
                name="emailaddress"
              />
            </div>
            <div className="flex flex-col justify-end ml-auto">
              <label className="text-base text-[#66666699]" htmlFor="">
                Phone Number
              </label>
              <input
                className="border rounded-lg input-field"
                type="text"
                name="PhoneNumber"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="text-base text-[#66666699]" htmlFor="">
              Message
            </label>
            <textarea
              className="p-4 border rounded-lg w-full mt-2 resize-none h-[17.5rem] text-area"
              name=""
              id=""
              placeholder="Type message here..."
            ></textarea>
          </div>
          <button className="mt-4 font-inter border text-white border-[#3D3C99] rounded-lg py-3 px-10 bg-[#3D3C99] hover:bg-[#1f1e64] hover:border-[#1f1e64] transition-colors">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
