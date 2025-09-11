import { FileInput, Label, TextInput } from "flowbite-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBots, stepFourAndFive } from "../reducers/CreateBotSlice";
import { useForm } from "react-hook-form";
import StepSeven from "./StepSeven";
const StepFive = ({ setShow, languageId, industryId,setCode,businessId }) => {
  const { bots } = useSelector((state) => state?.bot);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBots());
  }, []);
  const HandleNextPage = () => {
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
  };
  const handleBack = () => {
    setShow({
      StepOne: false, // AddProduct is the first step
      StepTwo: false,
      StepThree: false,
      StepFour: true,
      StepFive: false,
      StepSix: false,
      StepSeven: false,
      StepEight:false
    });
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      language_id: languageId,
      bot_id: data?.bot_id,
      company_id: businessId,
      bot_name: data?.bot_name,
      bot_message: data?.bot_message,
    };
    dispatch(stepFourAndFive(payload)).then((res) => {
      if (res?.payload?.status_code === 201) {
        setCode(res?.payload?.embedCode)
        HandleNextPage();
      }
    });
  };
  return (
    <>
      <div className="step_box_one">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="step_content_wraper">
            <div className="lg:flex gap-4 mb-8">
              <div className="lg:w-6/12 step_field mb-2 lg:mb-0">
                <div className="mb-1 block">
                  <Label htmlFor="countries">Enter Bot Name</Label>
                </div>
                <TextInput
                  {...register("bot_name",{required:"Bot Name is required"})}
                  id="base"
                  type="text"
                  sizing="md"
                  placeholder="Enter Bot Name"
                />
                 {errors?.bot_name && (
                    <span className="text-red-500">
                    {errors?.bot_name?.message}
                    </span>
                  )}
              </div>
              <div className="lg:w-6/12 step_field">
                <div className="mb-1 block">
                  <Label htmlFor="countries">Bot Welcome Message</Label>
                </div>
                <TextInput
                  {...register("bot_message",{required:"Welcome message is required"})}
                  id="base"
                  type="text"
                  sizing="md"
                  placeholder='"Hi [Name], thanks for contacting [BusinessName]."'
                />
                {errors?.bot_message && (
                    <span className="text-red-500">
                    {errors?.bot_message?.message}
                    </span>
                  )}
              </div>
       
            </div>
            <div className="mb-2 block">
              <Label htmlFor="countries">Bot Icons</Label>
            </div>
            <div className="flex gap-6 mb-8 select_bot_wrap">
              {bots?.data?.map((b) => (
                <label key={b.id} class="radio-button-label">
                  <input
                    type="radio"
                    name="radio-control"
                    value={b.id} // send bot id here
                    {...register("bot_id",{required:"Select a bot "})}
                  />
                  <Image
                    src={b?.avatar}
                    alt="bot01"
                    className=""
                    height={60}
                    width={60}
                  />
                </label>
              ))}
               {errors?.bot_id && (
                    <span className="text-red-500">
                    {errors?.bot_id?.message}
                    </span>
                  )}
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
              <button className="bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[13px] leading-[36px] lg:text-[14px] lg:leading-[43px] font-medium px-5 lg:px-10 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]">
                Next Step
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default StepFive;
