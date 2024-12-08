import React from "react";
import FAQTab from "./FAQTab";

const FAQ = () => {
  return (
    <div>
      <div className="flex flex-col justify-between content-center bg-white w-4/5 mx-auto">
        <div className="mt-24 text-center">
          <h2 className="text-center mb-3">Frequently Asked Questions</h2>
          <p className="font-montserrat text-[#333333] text-xl">
            Got questions? We’ve got answers to help you get started with
            DirtifyData.
          </p>
        </div>
        <div className="mt-10 p-10 ">
          <FAQTab
            question={"What file formats can i upload?"}
            answer={
              "Currently, DirtyfyData supports CSV and Excel file formats. You can upload clean datasets in either of these formats to simulate dirty data."
            }
          />
          <FAQTab
            question={"How large can my dataset be when uploading?"}
            answer={
              "DirtifyData allows you to upload datasets with up to 10,000 rowss and 50 columns if your dataset exceeds these limits you may need to split it into smaller files before uploading."
            }
          />
          <FAQTab
            question={"What types of error can DirtifyData simulate?"}
            answer={
              "DirtifyData simulates common data issues including missing values, duplicates, incorrect formats, and introduction of random characters. You can also choose from various levels of dirtiness to match your learning goals."
            }
          />
          <FAQTab
            question={"Is my data secure when using DirtifyData?"}
            answer={
              "Yes, we take data security seriously. All uploaded datasets are processed securely, and we do not store your data beyond the session unless you choose to save your work. User data is encrypted and handled with strict privacy protocols."
            }
          />
          <FAQTab
            question={"Can i save my simulated datasets?"}
            answer={
              "Without creating an account, datasets can be downloaded but not stored. However if you create an account, you can access session history and View past uploads for later review or download."
            }
          />
          <FAQTab
            question={"Do i need to sign up to use DirtifyData?"}
            answer={
              "You can use DirtifyData without signing up, but creating an account gives you additional benefits, such as viewing your session history and saving previous simulations for future reference."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
