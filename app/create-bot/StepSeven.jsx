import { Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createStripe, getBotCount } from "../reducers/CreateBotSlice";

const StepSeven=({setShow,businessId,setBackState})=>{
          const HandleNextPage = () => {
    setShow({
      StepOne: false, // AddProduct is the first step
      StepTwo: false,
      StepThree: false,
      StepFour: false,
      StepFive: false,
      StepSix: false,
      StepSeven:false,
      StepEight:true
    });
        setBackState({
          StepOne: true, 
          StepTwo: true,
          StepThree: true,
          StepFour: true,
          StepFive: true,
          StepSix:true,
          StepSeven:true,
          StepEight: false,
    })
  };
   const {
      register,
      handleSubmit,
      setValue,
      watch,
      formState: { errors },
    } = useForm();
    const dispatch=useDispatch()
    const onSubmit=(data)=>{
        dispatch(createStripe({...data,company_id:businessId})).then((res)=>{
            if(res?.payload?.status_code===201){
              dispatch(getBotCount())
                HandleNextPage()
            }
        })
    }
    const handleBack=()=>{
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
    }
    return(
        <>
        <div className="step_box_one">
                <form 
                 onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="step_content_wraper">
                    <div className="lg:flex gap-4 mb-8">
                      <div className="lg:w-6/12 step_field mb-2 lg:mb-0">
                        <div className="mb-1 block">
                          <Label htmlFor="countries">Enter Stripe key</Label>
                        </div>
                        <TextInput
                          {...register("stripe_key",{required:"Stripe Key is required"})}
                          id="base"
                          type="text"
                          sizing="md"
                          placeholder="Enter Your Stripe Key"
                        />
                         {errors?.stripe_key && (
                            <span className="text-red-500">
                            {errors?.stripe_key?.message}
                            </span>
                          )}
                      </div>
                      <div className="lg:w-6/12 step_field">
                        <div className="mb-1 block">
                          <Label htmlFor="countries">Stripe Secret</Label>
                        </div>
                        <TextInput
                          {...register("stripe_secret",{required:"Stripe Secret is required"})}
                          id="base"
                          type="text"
                          sizing="md"
                          placeholder="Stripe Secret"
                        />
                        {errors?.stripe_secret && (
                            <span className="text-red-500">
                            {errors?.stripe_secret?.message}
                            </span>
                          )}
                      </div>
               
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
    )
}
export default StepSeven;