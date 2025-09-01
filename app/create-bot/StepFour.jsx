"use client";
import { Checkbox, Label, Radio } from "flowbite-react";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getLanguage } from "../reducers/CreateBotSlice";
const StepFour = ({ setShow, setLanguageId }) => {
  const { language } = useSelector((state) => state?.bot);
  const dispatch = useDispatch();
  const [selectedLang, setSelectedLang] = useState(null);
  const HandleNextPage = () => {
    if (!selectedLang) {
      alert("Please select a language first!");
      return;
    }
    setLanguageId(selectedLang);
    setShow({
      StepOne: false, // AddProduct is the first step
      StepTwo: false,
      StepThree: false,
      StepFour: false,
      StepFive: true,
      StepSix: false,
    });
  };

  const handleBack = () => {
    setShow({
      StepOne: false, // AddProduct is the first step
      StepTwo: false,
      StepThree: true,
      StepFour: false,
      StepFive: false,
      StepSix: false,
    });
  };
  useEffect(() => {
    dispatch(getLanguage());
  }, []);
  return (
    <>
      <div className="step_box_one">
        <div className="step_content_wraper">
          <div className="mb-2 block">
            <Label htmlFor="countries">Languages</Label>
          </div>
          <div className="lg:flex gap-6 mb-8">
            {language?.data?.map((lan, index) => (
              <div
                key={index}
                class="flex items-center justify-between px-4 py-2 mb-2 lg:mb-0 border-2 border-[#E2E2E2] rounded-lg lg:w-4/12"
              >
                <div className="flex items-center">
                  <Image
                    src={lan?.avatar}
                    alt="french_flag"
                    className="mb-0"
                    height={60}
                    width={60}
                  />
                  <label
                    htmlFor={`lang-${lan.id}`}
                    className="w-full py-4 ms-2 text-base font-medium text-[#000000] dark:text-gray-300"
                  >
                    {lan?.language}
                  </label>
                </div>
                <Radio
                  id={`lang-${lan.id}`}
                  name="language"
                  value={lan.id}
                  checked={selectedLang === lan.id}
                  onChange={() => setSelectedLang(lan.id)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                />
              </div>
            ))}
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
            <button
              onClick={() => HandleNextPage()}
              className="bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[13px] leading-[36px] lg:text-[14px] lg:leading-[43px] font-medium px-5 lg:px-10 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepFour;
