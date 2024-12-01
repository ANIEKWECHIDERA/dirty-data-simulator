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
            image="https://s3-alpha-sig.figma.com/img/27e8/10ca/c903b8920adfd2825787a86901817ef4?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FwF~JPoUUyNw4AXnj6-1DpaU5q6rZAcvDV~UJcTm909pndLUcWaLtoDk6nbfcscLI21e2Vk70ymxwMMjqZAzrVUGRqXYZMVKebJcSww7ql6VMTRqWVFst1Pn66Qxcn-4EWmbH7-dCmABobrmGvLpKOhVbBnURJ2qHEaAiogXMlICGhMf2x5CcUQGnDKGyxkqwK5WsD3JWYMjrhFHDWLvy5mFN8AdyTmzA2Qyz4Ck3Y2AEi5rFgRk3je-x1WRsBratmo6eWbSdk1y~1mPLcEH5twnzlELzOOr3IDNPtIzV3jd89GTLd8U9R~eNsovEVeDnmQa3f5PxKE6kJ5N9GNhZw__"
            step={"Step 1"}
            heading={"Upload Dataset"}
            text={
              "Easily upload clean datasets in CSV format with up to 10,000 rows and 50 columns."
            }
          />
          <HowItWorksCard
            image="https://s3-alpha-sig.figma.com/img/b177/7ac0/5e52e7b739664640bef9314a4388ab74?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=abgUVwufKFi~3LduVAUBDM92dzYuYa8kUL~v1EHwI8nqrBR5Xv3OiVWJcVWvtYLvcWLwlrhBtxEh0KNLMeCxuq-V~MrZbAQpWpfdMzos~YF3Hr9iM7UYFx7vUs6yB8gYWmr7hhaTtJPhHuKiFCD3Vxv5JPQ884kgU5cwXNgHdFgl8Yn8e3qZro0DeTrXs~-8dNHWRI4ukznNc8lSuhwbs2vjzjct8f3IOLJCvYlwKVL7qsie5C9P27f7x8NfRy6U4CXsUO7G3agx9SOJ0XQrGekuEPHeCoDtVUQ~C~FBdaJmFocBucBgjt4UYF7oZCedhGIbgpgAN1CU-yUg3OwTWA__"
            step={"Step 2"}
            heading={"Select dirtiness level"}
            text={
              "Customize the level of dirtiness: Mild, Moderate, or Extreme. Specify which rows and columns to target for more control."
            }
          />
          <HowItWorksCard
            image="https://s3-alpha-sig.figma.com/img/0bfc/8996/b9b093e7ed1d8bb3d51ba8757603616e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pnir-ni0wkwYwnDnkQXOkirPik4YDCitbDCujRx4g2K0DJKTe7JhPm468sAUjnuRqN8Zv3yIk7nqkg1HIXmt2PaTGNjockvgO1SaGi5TMp8hxe~ylBmgT9hnehL3erTP8YmUfLLG4EpuJs1fRMUBCsJ6NxMDOdzhxacnD6RigG49gMwJC46CeC0pgpqf-qX-nnXtTsmz1-3CIkpOiBxMqbkRH8ANz4wtZ77jZdGeX~MmtZQn6ox-IzQubT-ADmlfEZv4l5qcq2PAB5EV0dKYrOvV15nXCIT9IRyK1FphBNIjS33QJB4nKPdZdqOteqFg-tcrDOzzG0vL0Zn7YfDbEA__"
            step={"Step 3"}
            heading={"Simulate dirty data"}
            text={
              "The system introduces common data issues like duplicates, missing values, and incorrect formats to mimic real-world data problems."
            }
          />
          <HowItWorksCard
            image="https://s3-alpha-sig.figma.com/img/3f8b/a5bc/e5d119893039dc21137141d5f4b553b3?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pSLU-jUgdFU-DEyBmbGwp53bi7ifa~01oIQuvcZXMZXNb2c1Une0dw1-fWitQNX1eAy6lvnotkopv8ZJYvyXXGSCsYLNX6MoSFkH4xftxxJnisg4hYrvdE6cvlwvRHkiFM~eL9v~N66ZjX9lBcvhlEOSJ4ypCSEGIQU2Bj-iyGZK4gEXF7Of8kJ0eLuuc2stlN6cqL2Hjq1MrZtuBjNXLlLzkF1ztmEFp0G7zLjmOvcmLwXHF6CojYypguCT-Mqzaj4nwfOYH2R-~m-S5~6vxlRUd4wcPoxojyFkCVjJpZy4LgaNVuFQZkWICN7yMCj044XmdH~7ds2DiQAkjLVCnA__"
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
