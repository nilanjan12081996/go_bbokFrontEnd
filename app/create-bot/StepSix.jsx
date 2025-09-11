import { FileInput, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createImage } from "../reducers/CreateBotSlice";

const StepSix=( {setShow,businessId})=>{

     const handleBack=()=>{
          setShow({
      StepOne: false, // AddProduct is the first step
      StepTwo: false,
      StepThree: false,
      StepFour: false,
      StepFive: true,
      StepSix: false,
      StepSeven:false,
      StepEight:false
    });
    }
      const HandleNextPage = () => {
    setShow({
      StepOne: false, // AddProduct is the first step
      StepTwo: false,
      StepThree: false,
      StepFour: false,
      StepFive: false,
      StepSix: false,
      StepSeven:true,
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
    const dispatch=useDispatch()
  const  onSubmit=(data)=>{
    const formData=new FormData()
    formData.append("company_id",businessId)
    formData.append("image",data?.image?.[0])
    formData.append("description",data?.description)
   
    
dispatch(createImage(formData)).then((res)=>{
  if(res?.payload?.status_code===201)
  {
    HandleNextPage()
  }
})
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
                          <Label htmlFor="countries">Upload Logo</Label>
                        </div>
                        <FileInput
                          {...register("image",{required:"Logo Required"})}
                          id="base"
                          
                          sizing="md"

                        />
                         {errors?.image && (
                            <span className="text-red-500">
                            {errors?.image?.message}
                            </span>
                          )}
                      </div>
                            <div className="lg:w-6/12 step_field">
                        <div className="mb-1 block">
                          <Label htmlFor="countries">Company Name</Label>
                        </div>
                        <TextInput
                          {...register("company_name",{required:"Company Name is required"})}
                          id="base"
                          type="text"
                          sizing="md"
                          placeholder="Company Name"
                        />
                        {errors?.company_name && (
                            <span className="text-red-500">
                            {errors?.company_name?.message}
                            </span>
                          )}
                      </div>
                      <div className="lg:w-6/12 step_field">
                        <div className="mb-1 block">
                          <Label htmlFor="countries">Description</Label>
                        </div>
                        <TextInput
                          {...register("description",{required:"Description is required"})}
                          id="base"
                          type="text"
                          sizing="md"
                          placeholder="Description"
                        />
                        {errors?.description && (
                            <span className="text-red-500">
                            {errors?.description?.message}
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
export default StepSix;