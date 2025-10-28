"use client";
import { Label, Select, Textarea, TextInput } from "flowbite-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createService, getIndustry } from "../reducers/CreateBotSlice";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { editService, updateService } from "../reducers/EditBotSlice";

const StepOne = ({setIsback,isback, setShow, industryId, setIndustryId, setBusinessId ,businessId,setBackState,backState,id,setId}) => {
  const { industryData } = useSelector((state) => state?.bot);
   const { editSerViceData } = useSelector((state) => state?.botE);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIndustry());
  }, []);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const HandleNextPage = () => {
    setShow({
            StepOne: false, // AddProduct is the first step
            StepTwo: true,
            StepThree: false,
            StepFour: false,
            StepFive: false,
            StepSix: false,
            StepSeven: false,
            StepEight:false
    });
    setBackState({
          StepOne: true, 
          StepTwo: false,
          StepThree: false,
          StepFour: false,
          StepFive: false,
          StepSix:false,
          StepSeven:false,
          StepEight: false,
    })

  };
  console.log("industryData", industryData);

  const handleSelect = (e) => {
    const selectedIndustry = e.target.value;
    console.log("selectedIndustry", selectedIndustry);

    setIndustryId(selectedIndustry);
  };
  const onSubmit = (data) => {
if(backState.StepOne){
   dispatch(updateService({ ...data,company_id:businessId,industry_id: industryId})).then(
      (res) => {
        console.log("res", res);
        if (res?.payload?.status_code === 200) {
          // setBusinessId(res?.payload?.business_id);
          setShow({
            StepOne: false, // AddProduct is the first step
            StepTwo: true,
            StepThree: false,
            StepFour: false,
            StepFive: false,
            StepSix: false,
            StepSeven: false,
            StepEight: false,
          });
        } else if (res?.payload?.response?.data?.status_code === 400) {
          toast.error(res?.payload?.response?.data?.message);
          console.log("Hi");
        }
      else if(res?.payload?.response?.data?.status_code === 422){
        toast.error(res?.payload?.response?.data?.message);
      }
        
      }
    );
}
else{
dispatch(createService({ ...data, industry_id: industryId })).then(
      (res) => {
        console.log("res", res);
        if (res?.payload?.status_code === 201) {
          setBusinessId(res?.payload?.business_id);
          setId(res?.payload?.business_id)
          HandleNextPage()
        } else if (res?.payload?.response?.data?.status_code === 400) {
          toast.error(res?.payload?.response?.data?.message);
          console.log("Hi");
        }
      else if(res?.payload?.response?.data?.status_code === 422){
toast.error(res?.payload?.response?.data?.message);
      }
        
      }
    );
}

      
    
    
  };
    useEffect(()=>{
      if(backState.StepOne && businessId){
  dispatch(editService({
  business_id:businessId
  }))
      }

    },[businessId,backState])
    useEffect(()=>{
      if(backState.StepOne){
setValue("company_name",editSerViceData?.res?.[0]?.company_name)
setIndustryId(editSerViceData?.res?.[0]?.industry_id)
      }
    },[editSerViceData,backState,setIndustryId])
  return (
    <>
      <div className="step_box_one">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="step_content_wraper">
            <div className="lg:flex gap-4 mb-4">
              <div className="lg:w-6/12 mb-2 lg:mb-0">
                <div className="mb-1 block">
                  <Label htmlFor="countries">Industry *</Label>
                </div>
                <Select id="countries" required onChange={handleSelect} value={industryId || ""}>
                  <option>Select</option>
                  {industryData?.res?.map((indus) => (
                    <option key={indus?.id} value={indus?.id}>
                      {indus?.industry_name}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="lg:w-6/12 step_field">
                <div className="mb-1 block">
                  <Label htmlFor="countries">Business Name *</Label>
                </div>
                <TextInput
                  {...register("company_name",{required:"Business Name Required"})}
                  id="base"
                  type="text"
                  sizing="md"
                  placeholder="Enter Business Name"
                />
                   {errors?.company_name && (
                    <span className="text-red-500">
                    {errors?.company_name?.message}
                    </span>
                  )}
              </div>
            </div>

            <div className="lg:flex gap-4 mb-4">
              <div className="lg:w-full step_field mb-4">
                <div className="mb-1 block">
                  <Label htmlFor="countries">Whatsapp Number *</Label>
                </div>
                <TextInput
                  {...register("whatsapp",{required:"Whatsapp Number Required"})}
                  id="base"
                  type="text"
                  sizing="md"
                  placeholder="Enter Whatsapp Number"
                />
                   {errors?.whatsapp && (
                    <span className="text-red-500">
                    {errors?.whatsapp?.message}
                    </span>
                  )}
              </div>

              <div className="lg:w-full step_field mb-4">
                <div className="mb-1 block">
                  <Label htmlFor="countries">Phone Number Id *</Label>
                </div>
                <TextInput
                  {...register("phone_number_id",{required:"Phone Number Id Required"})}
                  id="base"
                  type="text"
                  sizing="md"
                  placeholder="Enter Access Token"
                />
                   {errors?.phone_number_id && (
                    <span className="text-red-500">
                    {errors?.phone_number_id?.message}
                    </span>
                  )}
              </div>

            </div>

              <div className="lg:w-full step_field mb-4">
                <div className="mb-1 block">
                  <Label htmlFor="countries">Access token *</Label>
                </div>
                <Textarea
                  {...register("access_token",{required:"Access Token Required"})}
                  id="base"
                  type="text"
                  sizing="md"
                  placeholder="Enter Access Token"
                  rows={5}
                >
                  </Textarea>
                   {errors?.access_token && (
                    <span className="text-red-500">
                    {errors?.access_token?.message}
                    </span>
                  )}
              </div>

               
            
          </div>
          <div className="step_btn_area border-t border-[#EBEEFA] pt-5">
            <div className="flex justify-end items-center">
              <button
                //    onClick={()=>HandleNextPage()}
                className="bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[13px] leading-[36px] lg:text-[14px] lg:leading-[43px] font-medium px-5 lg:px-10 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]"
              >
                Next Step
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default StepOne;
