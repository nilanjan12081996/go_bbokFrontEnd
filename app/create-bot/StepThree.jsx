// import { Label, Select, TextInput } from "flowbite-react"
// import { useEffect, useState } from "react";
// import { BiCopy } from "react-icons/bi";
// import { useDispatch, useSelector } from "react-redux";
// import { getDays } from "../reducers/CreateBotSlice";

// const StepThree=({setShow})=>{

//  const{days}=useSelector((state)=>state?.bot)
//  const dispatch=useDispatch()
//  useEffect(()=>{
// dispatch(getDays())
//  },[])

//       const HandleNextPage = () => {
//     setShow({
//       StepOne: false, // AddProduct is the first step
//       StepTwo: false,
//       StepThree: false,
//       StepFour: true,
//       StepFive: false,
//       StepSix: false,
//       StepSeven: false,
//     });
//   };
//    const handleBack = () => {
//     setShow({
//       StepOne: false, // AddProduct is the first step
//       StepTwo: true,
//       StepThree: false,
//       StepFour: false,
//       StepFive: false,
//       StepSix: false,
//       StepSeven: false,
//     });
//   };
//     return(
//         <>
//            <div className='step_box_three'>
//                         <div className='step_content_wraper mb-6'>
//                             <h3 className='text-[#435971] text-[20px] leading-[30px] mb-3 font-medium'>Availability</h3>
//                             <div className='flex gap-4'>
//                                 <div className='w-10/12 '>
//                                     <div className='flex gap-4 mb-4'>
//                                         <div className="w-4/12 step_field">
//                                             <div className="mb-1 block">
//                                                 <Label htmlFor="countries">Choose Day*</Label>
//                                             </div>
//                                             <Select id="countries" required>
//                                                 <option>Choose Day</option>
//                                                 {
//                                                     days?.res?.map((d)=>{
//                                                         return(
//                                                             <>
//                                                             <option>{d?.day}</option>
//                                                             </>
//                                                         )
//                                                     })
//                                                 }
//                                             </Select>
//                                         </div>
//                                         <div className="w-4/12 step_field">
//                                             <div className="mb-1 block">
//                                                 <Label htmlFor="countries">Start Time*</Label>
//                                             </div>
//                                             <div className='flex gap-1'>
//                                                 <div className='w-10/12'>
//                                                     <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
//                                                 </div>
//                                                 <div className='w-2/12'>
//                                                     <Select id="countries" required>
//                                                         <option>AM</option>
//                                                         <option>PM</option>
//                                                     </Select>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="w-4/12 step_field">
//                                             <div className="mb-1 block">
//                                                 <Label htmlFor="countries">End Time*</Label>
//                                             </div>
//                                             <div className='flex gap-1'>
//                                                 <div className='w-10/12'>
//                                                     <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
//                                                 </div>
//                                                 <div className='w-2/12'>
//                                                     <Select id="countries" required>
//                                                         <option>AM</option>
//                                                         <option>PM</option>
//                                                     </Select>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='w-2/12 mt-7'>
//                                     <button className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[40px] font-medium px-5 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2] flex items-center'><BiCopy className='text-base mr-1' /> copy to all week</button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='step_content_wraper'>
//                             <h3 className='text-[#435971] text-[20px] leading-[30px] mb-3 font-medium'>Break time</h3>
//                             <div className='flex gap-4'>
//                                 <div className='w-10/12 '>

//                                              <div className='flex gap-4 mb-4'>
//                                         <div className="w-4/12 step_field">
//                                             <div className="mb-1 block">
//                                                 <Label htmlFor="countries">Choose Day*</Label>
//                                             </div>
//                                             <Select  id="countries"
//                                             required>
//                                                 <option>Choose Day</option>
//                                                 {
//                                                     days?.res?.map((d)=>{
//                                                         return(
//                                                             <>
//                                                             <option>{d?.day}</option>
//                                                             </>
//                                                         )
//                                                     })
//                                                 }
//                                             </Select>
//                                         </div>
//                                         <div className="w-4/12 step_field">
//                                             <div className="mb-1 block">
//                                                 <Label htmlFor="countries">Start Time*</Label>
//                                             </div>
//                                             <div className='flex gap-1'>
//                                                 <div className='w-10/12'>
//                                                     <TextInput  type="text" sizing="md" placeholder='Enter Start Time'
//                                                      id="base"

//                                                     />
//                                                 </div>
//                                                 <div className='w-2/12'>
//                                                     <Select id="countries" required>
//                                                         <option>AM</option>
//                                                         <option>PM</option>
//                                                     </Select>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="w-4/12 step_field">
//                                             <div className="mb-1 block">
//                                                 <Label htmlFor="countries">End Time*</Label>
//                                             </div>
//                                             <div className='flex gap-1'>
//                                                 <div className='w-10/12'>
//                                                     <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
//                                                 </div>
//                                                 <div className='w-2/12'>
//                                                     <Select id="countries" required>
//                                                         <option>AM</option>
//                                                         <option>PM</option>
//                                                     </Select>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                 </div>
//                                 <div className='w-2/12 mt-7'>
//                                     <button
//                                     type="button"

//                                     className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[40px] font-medium px-5 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2] flex items-center'><BiCopy className='text-base mr-1' /> copy to all week</button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='step_btn_area border-t border-[#EBEEFA] pt-5'>
//                             <div className='flex justify-end items-center gap-3'>
//                                 <button onClick={()=>handleBack()} className='bg-[#ffffff] rounded-[6px] text-[#464f60] hover:text-[#ffffff] text-[14px] leading-[43px] font-medium px-6 cursor-pointer hover:bg-[#00806A] border border-[#dddfe2] hover:border-[#00806A]'>Previous Step</button>
//                                 <button onClick={()=>HandleNextPage()} className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[43px] font-medium px-10 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]'>Next Step</button>
//                             </div>
//                         </div>
//                     </div>
//         </>
//     )
// }
// export default StepThree

// 'use client';
// import { Label, Select, TextInput } from "flowbite-react"
// import { useEffect, useState } from "react";
// import { BiCopy } from "react-icons/bi";
// import { useDispatch, useSelector } from "react-redux";
// import { getDays } from "../reducers/CreateBotSlice";

// const StepThree = ({ setShow ,industryId}) => {
//     const { days } = useSelector((state) => state?.bot)
//     const dispatch = useDispatch()

//     // State for availability schedules
//     const [availabilitySchedules, setAvailabilitySchedules] = useState([
//         { day: '', startTime: '', startPeriod: 'AM', endTime: '', endPeriod: 'AM' }
//     ]);

//     // State for break schedules
//     const [breakSchedules, setBreakSchedules] = useState([
//         { day: '', startTime: '', startPeriod: 'AM', endTime: '', endPeriod: 'AM' }
//     ]);

//     useEffect(() => {
//         dispatch(getDays())
//     }, [])

//     const HandleNextPage = () => {
//         setShow({
//             StepOne: false,
//             StepTwo: false,
//             StepThree: false,
//             StepFour: true,
//             StepFive: false,
//             StepSix: false,
//             StepSeven: false,
//         });
//     };

//     const handleBack = () => {
//         setShow({
//             StepOne: false,
//             StepTwo: true,
//             StepThree: false,
//             StepFour: false,
//             StepFive: false,
//             StepSix: false,
//             StepSeven: false,
//         });
//     };

//     // Copy availability to all days of the week
//     const copyAvailabilityToAllWeek = () => {
//         const currentSchedule = availabilitySchedules[0];

//         if (!currentSchedule.startTime || !currentSchedule.endTime) {
//             alert('Please fill in start and end times before copying to all week');
//             return;
//         }

//         const newSchedules = days?.res?.map((dayObj) => ({
//             day: dayObj.day,
//             startTime: currentSchedule.startTime,
//             startPeriod: currentSchedule.startPeriod,
//             endTime: currentSchedule.endTime,
//             endPeriod: currentSchedule.endPeriod
//         })) || [];

//         setAvailabilitySchedules(newSchedules);
//     };

//     // Copy break time to all days of the week
//     const copyBreakToAllWeek = () => {
//         const currentSchedule = breakSchedules[0];

//         if (!currentSchedule.startTime || !currentSchedule.endTime) {
//             alert('Please fill in start and end times before copying to all week');
//             return;
//         }

//         const newSchedules = days?.res?.map((dayObj) => ({
//             day: dayObj.day,
//             startTime: currentSchedule.startTime,
//             startPeriod: currentSchedule.startPeriod,
//             endTime: currentSchedule.endTime,
//             endPeriod: currentSchedule.endPeriod
//         })) || [];

//         setBreakSchedules(newSchedules);
//     };

//     // Update availability schedule
//     const updateAvailabilitySchedule = (index, field, value) => {
//         const newSchedules = [...availabilitySchedules];
//         newSchedules[index] = { ...newSchedules[index], [field]: value };
//         setAvailabilitySchedules(newSchedules);
//     };

//     // Update break schedule
//     const updateBreakSchedule = (index, field, value) => {
//         const newSchedules = [...breakSchedules];
//         newSchedules[index] = { ...newSchedules[index], [field]: value };
//         setBreakSchedules(newSchedules);
//     };

//     return (
//         <>
//             <div className='step_box_three'>
//                 {/* Availability Section */}
//                 <div className='step_content_wraper mb-6'>
//                     <h3 className='text-[#435971] text-[20px] leading-[30px] mb-3 font-medium'>Availability</h3>

//                     {availabilitySchedules.map((schedule, index) => (
//                         <div key={index} className='flex gap-4 mb-4'>
//                             <div className='w-10/12'>
//                                 <div className='flex gap-4'>
//                                     <div className="w-4/12 step_field">
//                                         <div className="mb-1 block">
//                                             <Label htmlFor={`availability-day-${index}`}>Choose Day*</Label>
//                                         </div>
//                                         <Select
//                                             id={`availability-day-${index}`}
//                                             value={schedule.day}
//                                             onChange={(e) => updateAvailabilitySchedule(index, 'day', e.target.value)}
//                                             required
//                                         >
//                                             <option value="">Choose Day</option>
//                                             {days?.res?.map((d, dayIndex) => (
//                                                 <option key={dayIndex} value={d?.day}>
//                                                     {d?.day}
//                                                 </option>
//                                             ))}
//                                         </Select>
//                                     </div>
//                                     <div className="w-4/12 step_field">
//                                         <div className="mb-1 block">
//                                             <Label htmlFor={`availability-start-${index}`}>Start Time*</Label>
//                                         </div>
//                                         <div className='flex gap-1'>
//                                             <div className='w-10/12'>
//                                                 <TextInput
//                                                     id={`availability-start-${index}`}
//                                                     type="text"
//                                                     sizing="md"
//                                                     placeholder='Enter Start Time'
//                                                     value={schedule.startTime}
//                                                     onChange={(e) => updateAvailabilitySchedule(index, 'startTime', e.target.value)}
//                                                 />
//                                             </div>
//                                             <div className='w-2/12'>
//                                                 <Select
//                                                     value={schedule.startPeriod}
//                                                     onChange={(e) => updateAvailabilitySchedule(index, 'startPeriod', e.target.value)}
//                                                     required
//                                                 >
//                                                     <option value="AM">AM</option>
//                                                     <option value="PM">PM</option>
//                                                 </Select>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="w-4/12 step_field">
//                                         <div className="mb-1 block">
//                                             <Label htmlFor={`availability-end-${index}`}>End Time*</Label>
//                                         </div>
//                                         <div className='flex gap-1'>
//                                             <div className='w-10/12'>
//                                                 <TextInput
//                                                     id={`availability-end-${index}`}
//                                                     type="text"
//                                                     sizing="md"
//                                                     placeholder='Enter End Time'
//                                                     value={schedule.endTime}
//                                                     onChange={(e) => updateAvailabilitySchedule(index, 'endTime', e.target.value)}
//                                                 />
//                                             </div>
//                                             <div className='w-2/12'>
//                                                 <Select
//                                                     value={schedule.endPeriod}
//                                                     onChange={(e) => updateAvailabilitySchedule(index, 'endPeriod', e.target.value)}
//                                                     required
//                                                 >
//                                                     <option value="AM">AM</option>
//                                                     <option value="PM">PM</option>
//                                                 </Select>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {index === 0 && (
//                                 <div className='w-2/12 mt-7'>
//                                     <button
//                                         type="button"
//                                         onClick={copyAvailabilityToAllWeek}
//                                         className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[40px] font-medium px-5 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2] flex items-center'
//                                     >
//                                         <BiCopy className='text-base mr-1' /> copy to all week
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Break Time Section */}
//                 <div className='step_content_wraper'>
//                     <h3 className='text-[#435971] text-[20px] leading-[30px] mb-3 font-medium'>Break time</h3>

//                     {breakSchedules.map((schedule, index) => (
//                         <div key={index} className='flex gap-4 mb-4'>
//                             <div className='w-10/12'>
//                                 <div className='flex gap-4'>
//                                     <div className="w-4/12 step_field">
//                                         <div className="mb-1 block">
//                                             <Label htmlFor={`break-day-${index}`}>Choose Day*</Label>
//                                         </div>
//                                         <Select
//                                             id={`break-day-${index}`}
//                                             value={schedule.day}
//                                             onChange={(e) => updateBreakSchedule(index, 'day', e.target.value)}
//                                             required
//                                         >
//                                             <option value="">Choose Day</option>
//                                             {days?.res?.map((d, dayIndex) => (
//                                                 <option key={dayIndex} value={d?.day}>
//                                                     {d?.day}
//                                                 </option>
//                                             ))}
//                                         </Select>
//                                     </div>
//                                     <div className="w-4/12 step_field">
//                                         <div className="mb-1 block">
//                                             <Label htmlFor={`break-start-${index}`}>Start Time*</Label>
//                                         </div>
//                                         <div className='flex gap-1'>
//                                             <div className='w-10/12'>
//                                                 <TextInput
//                                                     id={`break-start-${index}`}
//                                                     type="text"
//                                                     sizing="md"
//                                                     placeholder='Enter Start Time'
//                                                     value={schedule.startTime}
//                                                     onChange={(e) => updateBreakSchedule(index, 'startTime', e.target.value)}
//                                                 />
//                                             </div>
//                                             <div className='w-2/12'>
//                                                 <Select
//                                                     value={schedule.startPeriod}
//                                                     onChange={(e) => updateBreakSchedule(index, 'startPeriod', e.target.value)}
//                                                     required
//                                                 >
//                                                     <option value="AM">AM</option>
//                                                     <option value="PM">PM</option>
//                                                 </Select>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="w-4/12 step_field">
//                                         <div className="mb-1 block">
//                                             <Label htmlFor={`break-end-${index}`}>End Time*</Label>
//                                         </div>
//                                         <div className='flex gap-1'>
//                                             <div className='w-10/12'>
//                                                 <TextInput
//                                                     id={`break-end-${index}`}
//                                                     type="text"
//                                                     sizing="md"
//                                                     placeholder='Enter End Time'
//                                                     value={schedule.endTime}
//                                                     onChange={(e) => updateBreakSchedule(index, 'endTime', e.target.value)}
//                                                 />
//                                             </div>
//                                             <div className='w-2/12'>
//                                                 <Select
//                                                     value={schedule.endPeriod}
//                                                     onChange={(e) => updateBreakSchedule(index, 'endPeriod', e.target.value)}
//                                                     required
//                                                 >
//                                                     <option value="AM">AM</option>
//                                                     <option value="PM">PM</option>
//                                                 </Select>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {index === 0 && (
//                                 <div className='w-2/12 mt-7'>
//                                     <button
//                                         type="button"
//                                         onClick={copyBreakToAllWeek}
//                                         className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[40px] font-medium px-5 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2] flex items-center'
//                                     >
//                                         <BiCopy className='text-base mr-1' /> copy to all week
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Navigation Buttons */}
//                 <div className='step_btn_area border-t border-[#EBEEFA] pt-5'>
//                     <div className='flex justify-end items-center gap-3'>
//                         <button
//                             onClick={() => handleBack()}
//                             className='bg-[#ffffff] rounded-[6px] text-[#464f60] hover:text-[#ffffff] text-[14px] leading-[43px] font-medium px-6 cursor-pointer hover:bg-[#00806A] border border-[#dddfe2] hover:border-[#00806A]'
//                         >
//                             Previous Step
//                         </button>
//                         <button
//                             onClick={() => HandleNextPage()}
//                             className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[43px] font-medium px-10 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]'
//                         >
//                             Next Step
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default StepThree

"use client";
import { Label, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { BiCopy } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getDays, stepThree } from "../reducers/CreateBotSlice"; // Import stepThree
import { toast } from "react-toastify";

const StepThree = ({ setShow, industryId ,businessId,setBackState}) => {
  const { days } = useSelector((state) => state?.bot);
  const dispatch = useDispatch();

  // State for availability schedules
  const [availabilitySchedules, setAvailabilitySchedules] = useState([
    { day: "", startTime: "", startPeriod: "AM", endTime: "", endPeriod: "AM" },
  ]);

  // State for break schedules
  const [breakSchedules, setBreakSchedules] = useState([
    { day: "", startTime: "", startPeriod: "AM", endTime: "", endPeriod: "AM" },
  ]);

  useEffect(() => {
    dispatch(getDays());
  }, []);

  // Helper function to format time
  const formatTime = (time, period) => {
    if (!time) return "";
    return `${time} ${period.toLowerCase()}`;
  };

  // Helper function to get day_id from day name
  const getDayId = (dayName) => {
    const dayObj = days?.res?.find((d) => d.day === dayName);
    return dayObj?.id || dayObj?.day_id || null;
  };

  // Function to prepare payload and dispatch API
  const HandleNextPage = async () => {
    try {
      // Validate that we have at least one complete availability schedule
      const validAvailabilitySchedules = availabilitySchedules.filter(
        (schedule) => schedule.day && schedule.startTime && schedule.endTime
      );

      if (validAvailabilitySchedules.length === 0) {
        toast.error("Please add at least one availability schedule");
        return;
      }

      // Create availability array for API payload
      const availability_arr = validAvailabilitySchedules.map(
        (availSchedule) => {
          // Find corresponding break schedule for the same day
          const breakSchedule = breakSchedules.find(
            (breakSched) =>
              breakSched.day === availSchedule.day &&
              breakSched.startTime &&
              breakSched.endTime
          );

          const dayId = getDayId(availSchedule.day);

          const scheduleData = {
            day_id: dayId,
            start_time: formatTime(
              availSchedule.startTime,
              availSchedule.startPeriod
            ),
            end_time: formatTime(
              availSchedule.endTime,
              availSchedule.endPeriod
            ),
          };

          // Add break times if they exist for this day
          if (breakSchedule) {
            scheduleData.start_break_time = formatTime(
              breakSchedule.startTime,
              breakSchedule.startPeriod
            );
            scheduleData.end_break_time = formatTime(
              breakSchedule.endTime,
              breakSchedule.endPeriod
            );
          }

          return scheduleData;
        }
      );

      // Prepare the payload
      const payload = {
        company_id: businessId, // You might want to get this from your state or props
        availability_arr: availability_arr,
      };

      console.log("Dispatching payload:", payload);

      // Dispatch the API call
      const result = dispatch(stepThree(payload)).then((res) => {
        console.log("res", res);
        if (res?.payload?.status_code === 201) {
          setShow({
            StepOne: false,
            StepTwo: false,
            StepThree: false,
            StepFour: true,
            StepFive: false,
            StepSix: false,
            StepSeven: false,
            StepEight:false
          });
            setBackState({
          StepOne: true, 
          StepTwo: true,
          StepThree: true,
          StepFour: false,
          StepFive: false,
          StepSix:false,
          StepSeven:false,
          StepEight: false,
    })
        }
        else if(res?.payload?.response?.data?.status_code===422){
          toast.error(res?.payload?.response?.data?.errors?.[0]?.msg)
        }
      });

      // if (stepThree.fulfilled.match(result)) {
      //     // API call successful, proceed to next step
      //     setShow({
      //         StepOne: false,
      //         StepTwo: false,
      //         StepThree: false,
      //         StepFour: true,
      //         StepFive: false,
      //         StepSix: false,
      //         StepSeven: false,
      //     });
      // }
    } catch (error) {
      console.error("Error in HandleNextPage:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleBack = () => {
    setShow({
      StepOne: false,
      StepTwo: true,
      StepThree: false,
      StepFour: false,
      StepFive: false,
      StepSix: false,
      StepSeven: false,
      StepEight:false
    });
  };

  // Copy availability to all days of the week
  const copyAvailabilityToAllWeek = () => {
    const currentSchedule = availabilitySchedules[0];

    if (!currentSchedule.startTime || !currentSchedule.endTime) {
      toast.error("Please fill in start and end times before copying to all week");
      return;
    }

    const newSchedules =
      days?.res?.map((dayObj) => ({
        day: dayObj.day,
        startTime: currentSchedule.startTime,
        startPeriod: currentSchedule.startPeriod,
        endTime: currentSchedule.endTime,
        endPeriod: currentSchedule.endPeriod,
      })) || [];

    setAvailabilitySchedules(newSchedules);
  };

  // Copy break time to all days of the week
  const copyBreakToAllWeek = () => {
    const currentSchedule = breakSchedules[0];

    if (!currentSchedule.startTime || !currentSchedule.endTime) {
      toast.error("Please fill in start and end times before copying to all week");
      return;
    }

    const newSchedules =
      days?.res?.map((dayObj) => ({
        day: dayObj.day,
        startTime: currentSchedule.startTime,
        startPeriod: currentSchedule.startPeriod,
        endTime: currentSchedule.endTime,
        endPeriod: currentSchedule.endPeriod,
      })) || [];

    setBreakSchedules(newSchedules);
  };

  // Add new availability schedule
  const addAvailabilitySchedule = () => {
    setAvailabilitySchedules([
      ...availabilitySchedules,
      {
        day: "",
        startTime: "",
        startPeriod: "AM",
        endTime: "",
        endPeriod: "AM",
      },
    ]);
  };

  // Add new break schedule
  const addBreakSchedule = () => {
    setBreakSchedules([
      ...breakSchedules,
      {
        day: "",
        startTime: "",
        startPeriod: "AM",
        endTime: "",
        endPeriod: "AM",
      },
    ]);
  };

  // Remove availability schedule
  const removeAvailabilitySchedule = (index) => {
    if (availabilitySchedules.length > 1) {
      const newSchedules = availabilitySchedules.filter((_, i) => i !== index);
      setAvailabilitySchedules(newSchedules);
    }
  };

  // Remove break schedule
  const removeBreakSchedule = (index) => {
    if (breakSchedules.length > 1) {
      const newSchedules = breakSchedules.filter((_, i) => i !== index);
      setBreakSchedules(newSchedules);
    }
  };

  // Update availability schedule
  const updateAvailabilitySchedule = (index, field, value) => {
    const newSchedules = [...availabilitySchedules];
    newSchedules[index] = { ...newSchedules[index], [field]: value };
    setAvailabilitySchedules(newSchedules);
  };

  // Update break schedule
  const updateBreakSchedule = (index, field, value) => {
    const newSchedules = [...breakSchedules];
    newSchedules[index] = { ...newSchedules[index], [field]: value };
    setBreakSchedules(newSchedules);
  };

  return (
    <>
      <div className="step_box_three">
        {/* Availability Section */}
        <div className="step_content_wraper mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[#435971] text-[18px] lg:text-[20px] lg:leading-[30px] font-medium">
              Availability
            </h3>
            {/* {availabilitySchedules.length > 1 && (
                            <button 
                                type="button"
                                onClick={addAvailabilitySchedule}
                                className='bg-[#00806A] rounded-[6px] text-white text-[12px] leading-[30px] font-medium px-3 cursor-pointer hover:bg-[#006b5a]'
                            >
                                + Add More
                            </button>
                        )} */}
          </div>

          {availabilitySchedules.map((schedule, index) => (
            <div key={index} className="lg:flex gap-4 mb-4">
              <div className="lg:w-10/12">
                <div className="lg:flex gap-4">
                  <div className="lg:w-4/12 step_field mb-2 lg:mb-0">
                    <div className="mb-1 block">
                      <Label htmlFor={`availability-day-${index}`}>
                        Choose Day*
                      </Label>
                    </div>
                    <Select
                      id={`availability-day-${index}`}
                      value={schedule.day}
                      onChange={(e) =>
                        updateAvailabilitySchedule(index, "day", e.target.value)
                      }
                      required
                    >
                      <option value="">Choose Day</option>
                      {days?.res?.map((d, dayIndex) => (
                        <option key={dayIndex} value={d?.day}>
                          {d?.day}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div className="lg:w-4/12 step_field mb-2 lg:mb-0">
                    <div className="mb-1 block">
                      <Label htmlFor={`availability-start-${index}`}>
                        Start Time*
                      </Label>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-10/12">
                        <TextInput
                          id={`availability-start-${index}`}
                          type="time"
                          sizing="md"
                          placeholder="Enter Start Time"
                          value={schedule.startTime}
                          onChange={(e) =>
                            updateAvailabilitySchedule(
                              index,
                              "startTime",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="w-2/12">
                        <Select
                          value={schedule.startPeriod}
                          onChange={(e) =>
                            updateAvailabilitySchedule(
                              index,
                              "startPeriod",
                              e.target.value
                            )
                          }
                          required
                        >
                          <option value="AM">AM</option>
                          <option value="PM">PM</option>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-4/12 step_field">
                    <div className="mb-1 block">
                      <Label htmlFor={`availability-end-${index}`}>
                        End Time*
                      </Label>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-10/12">
                        <TextInput
                          id={`availability-end-${index}`}
                          type="time"
                          sizing="md"
                          placeholder="Enter End Time"
                          value={schedule.endTime}
                          onChange={(e) =>
                            updateAvailabilitySchedule(
                              index,
                              "endTime",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="w-2/12">
                        <Select
                          value={schedule.endPeriod}
                          onChange={(e) =>
                            updateAvailabilitySchedule(
                              index,
                              "endPeriod",
                              e.target.value
                            )
                          }
                          required
                        >
                          <option value="AM">AM</option>
                          <option value="PM">PM</option>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/12 mt-7 flex gap-2">
                {index === 0 && (
                  <button
                    type="button"
                    onClick={copyAvailabilityToAllWeek}
                    className="bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[40px] font-medium px-5 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2] flex items-center"
                  >
                    <BiCopy className="text-base mr-1" /> copy to all week
                  </button>
                )}
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeAvailabilitySchedule(index)}
                    className="bg-red-500 rounded-[6px] text-white text-[12px] leading-[30px] font-medium px-3 cursor-pointer hover:bg-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* {availabilitySchedules.length === 1 && (
                        <button 
                            type="button"
                            onClick={addAvailabilitySchedule}
                            className='bg-[#00806A] rounded-[6px] text-white text-[12px] leading-[30px] font-medium px-3 cursor-pointer hover:bg-[#006b5a] mb-4'
                        >
                            + Add Another Day
                        </button>
                    )} */}
        </div>

        {/* Break Time Section */}
        <div className="step_content_wraper">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[#435971] text-[18px] lg:text-[20px] lg:leading-[30px] font-medium">
              Break time
            </h3>
            {/* {breakSchedules.length > 1 && (
                            <button 
                                type="button"
                                onClick={addBreakSchedule}
                                className='bg-[#00806A] rounded-[6px] text-white text-[12px] leading-[30px] font-medium px-3 cursor-pointer hover:bg-[#006b5a]'
                            >
                                + Add More
                            </button>
                        )} */}
          </div>

          {breakSchedules.map((schedule, index) => (
            <div key={index} className="lg:flex gap-4 mb-4">
              <div className="lg:w-10/12">
                <div className="lg:flex gap-4">
                  <div className="lg:w-4/12 step_field mb-2 lg:mb-0">
                    <div className="mb-1 block">
                      <Label htmlFor={`break-day-${index}`}>Choose Day*</Label>
                    </div>
                    <Select
                      id={`break-day-${index}`}
                      value={schedule.day}
                      onChange={(e) =>
                        updateBreakSchedule(index, "day", e.target.value)
                      }
                      required
                    >
                      <option value="">Choose Day</option>
                      {days?.res?.map((d, dayIndex) => (
                        <option key={dayIndex} value={d?.day}>
                          {d?.day}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div className="lg:w-4/12 step_field mb-2 lg:mb-0">
                    <div className="mb-1 block">
                      <Label htmlFor={`break-start-${index}`}>
                        Start Time*
                      </Label>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-10/12">
                        <TextInput
                          id={`break-start-${index}`}
                          type="time"
                          sizing="md"
                          placeholder="Enter Start Time"
                          value={schedule.startTime}
                          onChange={(e) =>
                            updateBreakSchedule(
                              index,
                              "startTime",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="w-2/12">
                        <Select
                          value={schedule.startPeriod}
                          onChange={(e) =>
                            updateBreakSchedule(
                              index,
                              "startPeriod",
                              e.target.value
                            )
                          }
                          required
                        >
                          <option value="AM">AM</option>
                          <option value="PM">PM</option>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-4/12 step_field">
                    <div className="mb-1 block">
                      <Label htmlFor={`break-end-${index}`}>End Time*</Label>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-10/12">
                        <TextInput
                          id={`break-end-${index}`}
                          type="time"
                          sizing="md"
                          placeholder="Enter End Time"
                          value={schedule.endTime}
                          onChange={(e) =>
                            updateBreakSchedule(
                              index,
                              "endTime",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="lg:w-2/12">
                        <Select
                          value={schedule.endPeriod}
                          onChange={(e) =>
                            updateBreakSchedule(
                              index,
                              "endPeriod",
                              e.target.value
                            )
                          }
                          required
                        >
                          <option value="AM">AM</option>
                          <option value="PM">PM</option>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/12 mt-7 flex gap-2">
                {index === 0 && (
                  <button
                    type="button"
                    onClick={copyBreakToAllWeek}
                    className="bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[40px] font-medium px-5 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2] flex items-center"
                  >
                    <BiCopy className="text-base mr-1" /> copy to all week
                  </button>
                )}
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeBreakSchedule(index)}
                    className="bg-red-500 rounded-[6px] text-white text-[12px] leading-[30px] font-medium px-3 cursor-pointer hover:bg-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* {breakSchedules.length === 1 && (
                        <button 
                            type="button"
                            onClick={addBreakSchedule}
                            className='bg-[#00806A] rounded-[6px] text-white text-[12px] leading-[30px] font-medium px-3 cursor-pointer hover:bg-[#006b5a] mb-4'
                        >
                            + Add Another Day
                        </button>
                    )} */}
        </div>

        {/* Navigation Buttons */}
        <div className="step_btn_area border-t border-[#EBEEFA] pt-5">
          <div className="flex justify-end items-center gap-3">
            <button
              onClick={() => handleBack()}
              className="bg-[#ffffff] rounded-[6px] text-[#464f60] hover:text-[#ffffff] text-[13px] leading-[36px] lg:text-[14px] lg:leading-[43px] font-medium px-4 lg:px-6 cursor-pointer hover:bg-[#00806A] border border-[#dddfe2] hover:border-[#00806A]"
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

export default StepThree;
