import { Label, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getExample } from "../reducers/CreateBotSlice";
const StepTwo=({setShow,industryId, businessId})=>{
    const{examples}=useSelector((state)=>state?.bot)
    const dispatch=useDispatch()
      const HandleNextPage = () => {
    setShow({
      StepOne: false, // AddProduct is the first step
      StepTwo: false,
      StepThree: true,
      StepFour: false,
      StepFive: false,
      StepSix: false,
      StepSeven: false,
    });
  };
   const handleBack = () => {
    setShow({
      StepOne: true, // AddProduct is the first step
      StepTwo: false,
      StepThree: false,
      StepFour: false,
      StepFive: false,
      StepSix: false,
      StepSeven: false,
    });
  };

  const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
      } = useForm();

      

        const [rows, setRows] = useState([
    { serviceName: "", duration: "", timeType: "hrs" },
  ]);

  // Add new row
  const handleAddRow = () => {
    setRows([...rows, { serviceName: "", duration: "", timeType: "hrs" }]);
  };

    const handleRemoveRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

    const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };
useEffect(()=>{
dispatch(getExample({id:industryId}))
},[])
console.log("examples",examples);


    return(
        <>
          <div className='step_box_two'>
            <form>
                        <div className='step_content_wraper'>
                            {
                                rows?.map((rows,index)=>{
                                    return(
                                        <>
                                        <div className='flex gap-4 mb-6' key={index}>
                                <div className='w-11/12'>
                                    <div className='flex gap-4 mb-8'>
                                        <div className="w-6/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor={`service-${index}`}>Service Name *</Label>
                                            </div>
                                            <TextInput  id={`service-${index}`} type="text" sizing="md" value={rows.serviceName} placeholder='Heart checkup'   onChange={(e) =>
                    handleChange(index, "serviceName", e.target.value)
                  }/>
                                            <div className='mt-4'>
                                                <p className='text-[#7C7C7C] text-[13px] leading-[20px] font-medium pb-1'>Service Name Eg.</p>
                                                <div>
                                                    <ul className='flex gap-2'>
                                                        {
                                                            examples?.data?.slice(0, 2)?.map((ex)=>{
                                                                return(
                                                                    <>
                                                                    <li className='text-[12px] leading-[24px] text-black border border-[#D8D8D8] rounded-[6px] py-1 px-3 shadow'>{ex?.service_name}</li>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                        
                                                       
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-6/12">
                                            <div className="mb-1 block">
                                                <Label htmlFor={`duration-${index}`}>Duration *</Label>
                                            </div>
                                            <div className='flex gap-1 step_field'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Time'  value={rows.duration}    onChange={(e) =>
                        handleChange(index, "duration", e.target.value)
                      }/>
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select  id={`timeType-${index}`}
                      value={rows.timeType}
                      onChange={(e) =>
                        handleChange(index, "timeType", e.target.value)
                      } required>
                                                        <option>hrs</option>
                                                        <option>mins</option>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className='mt-4'>
                                                <p className='text-[#7C7C7C] text-[13px] leading-[20px] font-medium pb-1'>Duration Eg.</p>
                                                <div>
                                                    <ul className='flex gap-2'>
                                                        <li className='text-[12px] leading-[24px] text-black border border-[#D8D8D8] rounded-[6px] py-1 px-3 shadow'>30mins </li>
                                                        <li className='text-[12px] leading-[24px] text-black border border-[#D8D8D8] rounded-[6px] py-1 px-3 shadow'>1hr </li>
                                                        <li className='text-[12px] leading-[24px] text-black border border-[#D8D8D8] rounded-[6px] py-1 px-3 shadow'>15mins </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/12 flex flex-col items-center justify-center gap-2'>
                                  <button type="button"  onClick={handleAddRow} className='text-[#00806A] text-3xl cursor-pointer hover:text-black mt-8'><AiFillPlusCircle /></button>
                               {rows.length > 1 && (
              <button
                type="button"
                className="text-red-500 text-3xl cursor-pointer hover:text-black"
                onClick={() => handleRemoveRow(index)}
              >
                <AiFillMinusCircle />
              </button>
            )}
                                </div>
                            </div>
                                        </>
                                    )
                                })
                            }
                            
                        </div>
                        <div className='step_btn_area border-t border-[#EBEEFA] pt-5'>
                            <div className='flex justify-end items-center gap-3'>
                                <button onClick={()=>handleBack()} className='bg-[#ffffff] rounded-[6px] text-[#464f60] hover:text-[#ffffff] text-[14px] leading-[43px] font-medium  px-6 cursor-pointer hover:bg-[#00806A] border border-[#dddfe2] hover:border-[#00806A]'>Previous Step</button>
                                <button onClick={()=>HandleNextPage()} className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[43px] font-medium px-10 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]'>Next Step</button>
                            </div>
                        </div>
                        </form>
                    </div>
                    
        </>
    )
}
export default StepTwo