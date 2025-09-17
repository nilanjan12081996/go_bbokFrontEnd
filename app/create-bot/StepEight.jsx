import Image from "next/image";
import code_img from "../../app/assets/imagesource/code_img.png";
import { Button, Tooltip } from "flowbite-react";
import { useState } from "react";
const StepEight = ({ setShow ,code}) => {

  const [copied, setCopied] = useState(false);
  const handleBack = () => {
    setShow({
      StepOne: false, // AddProduct is the first step
      StepTwo: false,
      StepThree: false,
      StepFour: false,
      StepFive: false,
      StepSix: true,
      StepSeven:false,
      StepEight:false
    });

    //       setBackState({
    //       StepOne: true, 
    //       StepTwo: true,
    //       StepThree: true,
    //       StepFour: true,
    //       StepFive: true,
    //       StepSix:true,
    //       StepSeven:true,
    //       StepEight: false,
    // })
  };

   const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code); // copy code
      setCopied(true);

      // Hide message after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <>
      <div className="step_box_one">
        <div className="step_content_wraper">
          <div className="mb-4">
            <p className="text-sm text-[#8F8F8F]">This code snippet adds the feature. Paste it into your site builder, WordPress, or custom HTML editor where you want the function to appear.</p>
          </div>
          <div className="mb-8 bg-white p-5 border border-[#929292] rounded-[10px] h-[480px] overflow-scroll overflow-x-hidden">
            {/* <Image src={code_img} alt="code_img" className="" /> */}
            {
              code
            }
          </div>
        </div>
        <div className="step_btn_area border-t border-[#EBEEFA] pt-5">
          <div className="flex justify-end items-center gap-3">
            <button
              onClick={() => handleBack()}
              className="bg-[#ffffff] rounded-[6px] text-[#464f60] hover:text-[#ffffff] text-[13px] leading-[36px] lg:text-[14px] lg:leading-[43px] font-medium  px-4 lg:px-6 cursor-pointer hover:bg-[#00806A] border border-[#dddfe2] hover:border-[#00806A]"
            >
              Previous Step
            </button>
            {/* <Tooltip
              className="max-w-[250px] text-[12px] text-center font-normal leading-relaxed"
              content="This code snippet adds the feature. Paste it into your site builder, WordPress, or custom HTML editor where you want the function to appear."
            >
              <button className="bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[13px] leading-[36px] lg:text-[14px] lg:leading-[43px] font-medium px-5 lg:px-8 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]">
                Copy Code
              </button>
            </Tooltip> */}

            <button onClick={handleCopy} className="bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[13px] leading-[36px] lg:text-[14px] lg:leading-[43px] font-medium px-5 lg:px-8 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]">
                Copy Code
              </button>
              {copied && (
            <span className="text-green-600 text-sm transition-opacity duration-500 ease-in-out animate-fadeIn">
              ✅ Code copied!
            </span>
          )}
            
          </div>
        </div>
        <style jsx>{`
        .animate-fadeIn {
          opacity: 1;
          animation: fadeInOut 2s forwards;
        }
        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
      </div>
    </>
  );
};
export default StepEight;
