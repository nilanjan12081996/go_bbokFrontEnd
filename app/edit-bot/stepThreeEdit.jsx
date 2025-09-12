"use client";
import { Label, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { BiCopy } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getDays, stepThree } from "../reducers/CreateBotSlice"; // Import stepThree
import { toast } from "react-toastify";
import { EditStepThree, updateStepThree } from "../reducers/EditBotSlice";

// const StepThree = ({id, setShow, industryId }) => {
//   const { days } = useSelector((state) => state?.bot);
//    const { updateThreeData } = useSelector((state) => state?.botE);
//   const dispatch = useDispatch();

//   useEffect(()=>{
//    dispatch(EditStepThree({company_id:id}))
//   },[])

//   // State for availability schedules
//   const [availabilitySchedules, setAvailabilitySchedules] = useState([
//     { day: "", startTime: "", startPeriod: "AM", endTime: "", endPeriod: "AM" },
//   ]);

//   // State for break schedules
//   const [breakSchedules, setBreakSchedules] = useState([
//     { day: "", startTime: "", startPeriod: "AM", endTime: "", endPeriod: "AM" },
//   ]);

//   useEffect(() => {
//     dispatch(getDays());
//   }, []);

//   // Helper function to format time
//   const formatTime = (time, period) => {
//     if (!time) return "";
//     return `${time} ${period.toLowerCase()}`;
//   };

//   // Helper function to get day_id from day name
//   const getDayId = (dayName) => {
//     const dayObj = days?.res?.find((d) => d.day === dayName);
//     return dayObj?.id || dayObj?.day_id || null;
//   };

//   // Function to prepare payload and dispatch API
//   const HandleNextPage = async () => {
//     try {
//       // Validate that we have at least one complete availability schedule
//       const validAvailabilitySchedules = availabilitySchedules.filter(
//         (schedule) => schedule.day && schedule.startTime && schedule.endTime
//       );

//       if (validAvailabilitySchedules.length === 0) {
//         toast.error("Please add at least one availability schedule");
//         return;
//       }

//       // Create availability array for API payload
//       const availability_arr = validAvailabilitySchedules.map(
//         (availSchedule) => {
//           // Find corresponding break schedule for the same day
//           const breakSchedule = breakSchedules.find(
//             (breakSched) =>
//               breakSched.day === availSchedule.day &&
//               breakSched.startTime &&
//               breakSched.endTime
//           );

//           const dayId = getDayId(availSchedule.day);

//           const scheduleData = {
//             day_id: dayId,
//             start_time: formatTime(
//               availSchedule.startTime,
//               availSchedule.startPeriod
//             ),
//             end_time: formatTime(
//               availSchedule.endTime,
//               availSchedule.endPeriod
//             ),
//           };

//           // Add break times if they exist for this day
//           if (breakSchedule) {
//             scheduleData.start_break_time = formatTime(
//               breakSchedule.startTime,
//               breakSchedule.startPeriod
//             );
//             scheduleData.end_break_time = formatTime(
//               breakSchedule.endTime,
//               breakSchedule.endPeriod
//             );
//           }

//           return scheduleData;
//         }
//       );

//       // Prepare the payload
//       const payload = {
//         company_id: industryId, // You might want to get this from your state or props
//         availability_arr: availability_arr,
//       };

//       console.log("Dispatching payload:", payload);

//       // Dispatch the API call
//       const result = dispatch(stepThree(payload)).then((res) => {
//         console.log("res", res);
//         if (res?.payload?.status_code === 201) {
//           setShow({
//             StepOne: false,
//             StepTwo: false,
//             StepThree: false,
//             StepFour: true,
//             StepFive: false,
//             StepSix: false,
//             StepSeven: false,
//           });
//         }
//         else if(res?.payload?.response?.data?.status_code===422){
//           toast.error(res?.payload?.response?.data?.errors?.[0]?.msg)
//         }
//       });

//       // if (stepThree.fulfilled.match(result)) {
//       //     // API call successful, proceed to next step
//       //     setShow({
//       //         StepOne: false,
//       //         StepTwo: false,
//       //         StepThree: false,
//       //         StepFour: true,
//       //         StepFive: false,
//       //         StepSix: false,
//       //         StepSeven: false,
//       //     });
//       // }
//     } catch (error) {
//       console.error("Error in HandleNextPage:", error);
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   const handleBack = () => {
//     setShow({
//       StepOne: false,
//       StepTwo: true,
//       StepThree: false,
//       StepFour: false,
//       StepFive: false,
//       StepSix: false,
//       StepSeven: false,
//     });
//   };

//   // Copy availability to all days of the week
//   const copyAvailabilityToAllWeek = () => {
//     const currentSchedule = availabilitySchedules[0];

//     if (!currentSchedule.startTime || !currentSchedule.endTime) {
//       toast.error("Please fill in start and end times before copying to all week");
//       return;
//     }

//     const newSchedules =
//       days?.res?.map((dayObj) => ({
//         day: dayObj.day,
//         startTime: currentSchedule.startTime,
//         startPeriod: currentSchedule.startPeriod,
//         endTime: currentSchedule.endTime,
//         endPeriod: currentSchedule.endPeriod,
//       })) || [];

//     setAvailabilitySchedules(newSchedules);
//   };

//   // Copy break time to all days of the week
//   const copyBreakToAllWeek = () => {
//     const currentSchedule = breakSchedules[0];

//     if (!currentSchedule.startTime || !currentSchedule.endTime) {
//       toast.error("Please fill in start and end times before copying to all week");
//       return;
//     }

//     const newSchedules =
//       days?.res?.map((dayObj) => ({
//         day: dayObj.day,
//         startTime: currentSchedule.startTime,
//         startPeriod: currentSchedule.startPeriod,
//         endTime: currentSchedule.endTime,
//         endPeriod: currentSchedule.endPeriod,
//       })) || [];

//     setBreakSchedules(newSchedules);
//   };

//   // Add new availability schedule
//   const addAvailabilitySchedule = () => {
//     setAvailabilitySchedules([
//       ...availabilitySchedules,
//       {
//         day: "",
//         startTime: "",
//         startPeriod: "AM",
//         endTime: "",
//         endPeriod: "AM",
//       },
//     ]);
//   };

//   // Add new break schedule
//   const addBreakSchedule = () => {
//     setBreakSchedules([
//       ...breakSchedules,
//       {
//         day: "",
//         startTime: "",
//         startPeriod: "AM",
//         endTime: "",
//         endPeriod: "AM",
//       },
//     ]);
//   };

//   // Remove availability schedule
//   const removeAvailabilitySchedule = (index) => {
//     if (availabilitySchedules.length > 1) {
//       const newSchedules = availabilitySchedules.filter((_, i) => i !== index);
//       setAvailabilitySchedules(newSchedules);
//     }
//   };

//   // Remove break schedule
//   const removeBreakSchedule = (index) => {
//     if (breakSchedules.length > 1) {
//       const newSchedules = breakSchedules.filter((_, i) => i !== index);
//       setBreakSchedules(newSchedules);
//     }
//   };

//   // Update availability schedule
//   const updateAvailabilitySchedule = (index, field, value) => {
//     const newSchedules = [...availabilitySchedules];
//     newSchedules[index] = { ...newSchedules[index], [field]: value };
//     setAvailabilitySchedules(newSchedules);
//   };

//   // Update break schedule
//   const updateBreakSchedule = (index, field, value) => {
//     const newSchedules = [...breakSchedules];
//     newSchedules[index] = { ...newSchedules[index], [field]: value };
//     setBreakSchedules(newSchedules);
//   };

//   return (
//     <>
//       <div className="step_box_three">
//         {/* Availability Section */}
//         <div className="step_content_wraper mb-6">
//           <div className="flex justify-between items-center mb-3">
//             <h3 className="text-[#435971] text-[18px] lg:text-[20px] lg:leading-[30px] font-medium">
//               Availability
//             </h3>
//             {/* {availabilitySchedules.length > 1 && (
//                             <button 
//                                 type="button"
//                                 onClick={addAvailabilitySchedule}
//                                 className='bg-[#00806A] rounded-[6px] text-white text-[12px] leading-[30px] font-medium px-3 cursor-pointer hover:bg-[#006b5a]'
//                             >
//                                 + Add More
//                             </button>
//                         )} */}
//           </div>

//           {availabilitySchedules.map((schedule, index) => (
//             <div key={index} className="lg:flex gap-4 mb-4">
//               <div className="lg:w-10/12">
//                 <div className="lg:flex gap-4">
//                   <div className="lg:w-4/12 step_field mb-2 lg:mb-0">
//                     <div className="mb-1 block">
//                       <Label htmlFor={`availability-day-${index}`}>
//                         Choose Day*
//                       </Label>
//                     </div>
//                     <Select
//                       id={`availability-day-${index}`}
//                       value={schedule.day}
//                       onChange={(e) =>
//                         updateAvailabilitySchedule(index, "day", e.target.value)
//                       }
//                       required
//                     >
//                       <option value="">Choose Day</option>
//                       {days?.res?.map((d, dayIndex) => (
//                         <option key={dayIndex} value={d?.day}>
//                           {d?.day}
//                         </option>
//                       ))}
//                     </Select>
//                   </div>
//                   <div className="lg:w-4/12 step_field mb-2 lg:mb-0">
//                     <div className="mb-1 block">
//                       <Label htmlFor={`availability-start-${index}`}>
//                         Start Time*
//                       </Label>
//                     </div>
//                     <div className="flex gap-1">
//                       <div className="w-10/12">
//                         <TextInput
//                           id={`availability-start-${index}`}
//                           type="time"
//                           sizing="md"
//                           placeholder="Enter Start Time"
//                           value={schedule.startTime}
//                           onChange={(e) =>
//                             updateAvailabilitySchedule(
//                               index,
//                               "startTime",
//                               e.target.value
//                             )
//                           }
//                         />
//                       </div>
//                       <div className="w-2/12">
//                         <Select
//                           value={schedule.startPeriod}
//                           onChange={(e) =>
//                             updateAvailabilitySchedule(
//                               index,
//                               "startPeriod",
//                               e.target.value
//                             )
//                           }
//                           required
//                         >
//                           <option value="AM">AM</option>
//                           <option value="PM">PM</option>
//                         </Select>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="lg:w-4/12 step_field">
//                     <div className="mb-1 block">
//                       <Label htmlFor={`availability-end-${index}`}>
//                         End Time*
//                       </Label>
//                     </div>
//                     <div className="flex gap-1">
//                       <div className="w-10/12">
//                         <TextInput
//                           id={`availability-end-${index}`}
//                           type="time"
//                           sizing="md"
//                           placeholder="Enter End Time"
//                           value={schedule.endTime}
//                           onChange={(e) =>
//                             updateAvailabilitySchedule(
//                               index,
//                               "endTime",
//                               e.target.value
//                             )
//                           }
//                         />
//                       </div>
//                       <div className="w-2/12">
//                         <Select
//                           value={schedule.endPeriod}
//                           onChange={(e) =>
//                             updateAvailabilitySchedule(
//                               index,
//                               "endPeriod",
//                               e.target.value
//                             )
//                           }
//                           required
//                         >
//                           <option value="AM">AM</option>
//                           <option value="PM">PM</option>
//                         </Select>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="lg:w-2/12 mt-7 flex gap-2">
//                 {index === 0 && (
//                   <button
//                     type="button"
//                     onClick={copyAvailabilityToAllWeek}
//                     className="bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[40px] font-medium px-5 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2] flex items-center"
//                   >
//                     <BiCopy className="text-base mr-1" /> copy to all week
//                   </button>
//                 )}
//                 {index > 0 && (
//                   <button
//                     type="button"
//                     onClick={() => removeAvailabilitySchedule(index)}
//                     className="bg-red-500 rounded-[6px] text-white text-[12px] leading-[30px] font-medium px-3 cursor-pointer hover:bg-red-600"
//                   >
//                     Remove
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}

//           {/* {availabilitySchedules.length === 1 && (
//                         <button 
//                             type="button"
//                             onClick={addAvailabilitySchedule}
//                             className='bg-[#00806A] rounded-[6px] text-white text-[12px] leading-[30px] font-medium px-3 cursor-pointer hover:bg-[#006b5a] mb-4'
//                         >
//                             + Add Another Day
//                         </button>
//                     )} */}
//         </div>

//         {/* Break Time Section */}
//         <div className="step_content_wraper">
//           <div className="flex justify-between items-center mb-3">
//             <h3 className="text-[#435971] text-[18px] lg:text-[20px] lg:leading-[30px] font-medium">
//               Break time
//             </h3>
//             {/* {breakSchedules.length > 1 && (
//                             <button 
//                                 type="button"
//                                 onClick={addBreakSchedule}
//                                 className='bg-[#00806A] rounded-[6px] text-white text-[12px] leading-[30px] font-medium px-3 cursor-pointer hover:bg-[#006b5a]'
//                             >
//                                 + Add More
//                             </button>
//                         )} */}
//           </div>

//           {breakSchedules.map((schedule, index) => (
//             <div key={index} className="lg:flex gap-4 mb-4">
//               <div className="lg:w-10/12">
//                 <div className="lg:flex gap-4">
//                   <div className="lg:w-4/12 step_field mb-2 lg:mb-0">
//                     <div className="mb-1 block">
//                       <Label htmlFor={`break-day-${index}`}>Choose Day*</Label>
//                     </div>
//                     <Select
//                       id={`break-day-${index}`}
//                       value={schedule.day}
//                       onChange={(e) =>
//                         updateBreakSchedule(index, "day", e.target.value)
//                       }
//                       required
//                     >
//                       <option value="">Choose Day</option>
//                       {days?.res?.map((d, dayIndex) => (
//                         <option key={dayIndex} value={d?.day}>
//                           {d?.day}
//                         </option>
//                       ))}
//                     </Select>
//                   </div>
//                   <div className="lg:w-4/12 step_field mb-2 lg:mb-0">
//                     <div className="mb-1 block">
//                       <Label htmlFor={`break-start-${index}`}>
//                         Start Time*
//                       </Label>
//                     </div>
//                     <div className="flex gap-1">
//                       <div className="w-10/12">
//                         <TextInput
//                           id={`break-start-${index}`}
//                           type="time"
//                           sizing="md"
//                           placeholder="Enter Start Time"
//                           value={schedule.startTime}
//                           onChange={(e) =>
//                             updateBreakSchedule(
//                               index,
//                               "startTime",
//                               e.target.value
//                             )
//                           }
//                         />
//                       </div>
//                       <div className="w-2/12">
//                         <Select
//                           value={schedule.startPeriod}
//                           onChange={(e) =>
//                             updateBreakSchedule(
//                               index,
//                               "startPeriod",
//                               e.target.value
//                             )
//                           }
//                           required
//                         >
//                           <option value="AM">AM</option>
//                           <option value="PM">PM</option>
//                         </Select>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="lg:w-4/12 step_field">
//                     <div className="mb-1 block">
//                       <Label htmlFor={`break-end-${index}`}>End Time*</Label>
//                     </div>
//                     <div className="flex gap-1">
//                       <div className="w-10/12">
//                         <TextInput
//                           id={`break-end-${index}`}
//                           type="time"
//                           sizing="md"
//                           placeholder="Enter End Time"
//                           value={schedule.endTime}
//                           onChange={(e) =>
//                             updateBreakSchedule(
//                               index,
//                               "endTime",
//                               e.target.value
//                             )
//                           }
//                         />
//                       </div>
//                       <div className="lg:w-2/12">
//                         <Select
//                           value={schedule.endPeriod}
//                           onChange={(e) =>
//                             updateBreakSchedule(
//                               index,
//                               "endPeriod",
//                               e.target.value
//                             )
//                           }
//                           required
//                         >
//                           <option value="AM">AM</option>
//                           <option value="PM">PM</option>
//                         </Select>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="lg:w-2/12 mt-7 flex gap-2">
//                 {index === 0 && (
//                   <button
//                     type="button"
//                     onClick={copyBreakToAllWeek}
//                     className="bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[40px] font-medium px-5 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2] flex items-center"
//                   >
//                     <BiCopy className="text-base mr-1" /> copy to all week
//                   </button>
//                 )}
//                 {index > 0 && (
//                   <button
//                     type="button"
//                     onClick={() => removeBreakSchedule(index)}
//                     className="bg-red-500 rounded-[6px] text-white text-[12px] leading-[30px] font-medium px-3 cursor-pointer hover:bg-red-600"
//                   >
//                     Remove
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}

//           {/* {breakSchedules.length === 1 && (
//                         <button 
//                             type="button"
//                             onClick={addBreakSchedule}
//                             className='bg-[#00806A] rounded-[6px] text-white text-[12px] leading-[30px] font-medium px-3 cursor-pointer hover:bg-[#006b5a] mb-4'
//                         >
//                             + Add Another Day
//                         </button>
//                     )} */}
//         </div>

//         {/* Navigation Buttons */}
//         <div className="step_btn_area border-t border-[#EBEEFA] pt-5">
//           <div className="flex justify-end items-center gap-3">
//             {/* <button
//               onClick={() => handleBack()}
//               className="bg-[#ffffff] rounded-[6px] text-[#464f60] hover:text-[#ffffff] text-[13px] leading-[36px] lg:text-[14px] lg:leading-[43px] font-medium px-4 lg:px-6 cursor-pointer hover:bg-[#00806A] border border-[#dddfe2] hover:border-[#00806A]"
//             >
//               Previous Step
//             </button> */}
//             <button
//               onClick={() => HandleNextPage()}
//               className="bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[13px] leading-[36px] lg:text-[14px] lg:leading-[43px] font-medium px-5 lg:px-10 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]"
//             >
//               Next Step
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };






const StepThreeEdit = ({id, setShow, industryId }) => {
  const { days } = useSelector((state) => state?.bot);
  const { updateThreeData } = useSelector((state) => state?.botE);
  const dispatch = useDispatch();

  useEffect(()=>{
   dispatch(EditStepThree({company_id:id}))
  },[])

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

  // New useEffect to populate form data when updateThreeData is available
  useEffect(() => {
    if (updateThreeData?.res && days?.res) {
      populateFormData(updateThreeData.res);
    }
  }, [updateThreeData, days]);

  // Helper function to parse time string (e.g., "11:00 AM" -> {time: "11:00", period: "AM"})
  const parseTime = (timeString) => {
    if (!timeString) return { time: "", period: "AM" };
    
    const parts = timeString.trim().split(" ");
    if (parts.length !== 2) return { time: "", period: "AM" };
    
    return {
      time: parts[0],
      period: parts[1]
    };
  };

  // Helper function to get day name from day_id
  const getDayName = (dayId) => {
    const dayObj = days?.res?.find((d) => d.id === dayId || d.day_id === dayId);
    return dayObj?.day || "";
  };

  // Function to populate form data from API response
  const populateFormData = (apiData) => {
    if (!apiData || !Array.isArray(apiData)) return;

    const availabilityData = [];
    const breakData = [];

    apiData.forEach((schedule) => {
      const dayName = getDayName(schedule.day_id);
      
      // Parse availability times
      const startTime = parseTime(schedule.start_time);
      const endTime = parseTime(schedule.end_time);

      // Create availability schedule
      const availabilitySchedule = {
        day: dayName,
        startTime: startTime.time,
        startPeriod: startTime.period,
        endTime: endTime.time,
        endPeriod: endTime.period
      };
      availabilityData.push(availabilitySchedule);

      // Create break schedule if break times exist
      if (schedule.start_break_time && schedule.end_break_time) {
        const startBreakTime = parseTime(schedule.start_break_time);
        const endBreakTime = parseTime(schedule.end_break_time);

        const breakSchedule = {
          day: dayName,
          startTime: startBreakTime.time,
          startPeriod: startBreakTime.period,
          endTime: endBreakTime.time,
          endPeriod: endBreakTime.period
        };
        breakData.push(breakSchedule);
      }
    });

    // Update state with populated data
    if (availabilityData.length > 0) {
      setAvailabilitySchedules(availabilityData);
    }

    if (breakData.length > 0) {
      setBreakSchedules(breakData);
    } else {
      // If no break data, keep at least one empty schedule
      setBreakSchedules([
        { day: "", startTime: "", startPeriod: "AM", endTime: "", endPeriod: "AM" }
      ]);
    }
  };

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
  // const HandleNextPage = async () => {
  //   try {
  //     // Validate that we have at least one complete availability schedule
  //     const validAvailabilitySchedules = availabilitySchedules.filter(
  //       (schedule) => schedule.day && schedule.startTime && schedule.endTime
  //     );

  //     if (validAvailabilitySchedules.length === 0) {
  //       toast.error("Please add at least one availability schedule");
  //       return;
  //     }

  //     // Create availability array for API payload
  //     const availability_arr = validAvailabilitySchedules.map(
  //       (availSchedule) => {
  //         // Find corresponding break schedule for the same day
  //         const breakSchedule = breakSchedules.find(
  //           (breakSched) =>
  //             breakSched.day === availSchedule.day &&
  //             breakSched.startTime &&
  //             breakSched.endTime
  //         );

  //         const dayId = getDayId(availSchedule.day);

  //         const scheduleData = {
  //           day_id: dayId,
  //           start_time: formatTime(
  //             availSchedule.startTime,
  //             availSchedule.startPeriod
  //           ),
  //           end_time: formatTime(
  //             availSchedule.endTime,
  //             availSchedule.endPeriod
  //           ),
  //         };

  //           if (existingSchedule && existingSchedule.id) {
  //         scheduleData.id = existingSchedule.id;
  //       }

  //         // Add break times if they exist for this day
  //         if (breakSchedule) {
  //           scheduleData.start_break_time = formatTime(
  //             breakSchedule.startTime,
  //             breakSchedule.startPeriod
  //           );
  //           scheduleData.end_break_time = formatTime(
  //             breakSchedule.endTime,
  //             breakSchedule.endPeriod
  //           );
  //         }

  //         return scheduleData;
  //       }
  //     );

  //     // Prepare the payload
  //     const payload = {
  //       company_id: industryId,
  //       availability_arr: availability_arr,
  //     };

  //     console.log("Dispatching payload:", payload);

  //     // Dispatch the API call
  //     const result = dispatch(updateStepThree(payload)).then((res) => {
  //       console.log("res", res);
  //       if (res?.payload?.status_code === 200) {
  //         setShow({
  //           StepOne: false,
  //           StepTwo: false,
  //           StepThree: false,
  //           StepFour: true,
  //           StepFive: false,
  //           StepSix: false,
  //           StepSeven: false,
  //         });
  //       }
  //       else if(res?.payload?.response?.data?.status_code===422){
  //         toast.error(res?.payload?.response?.data?.errors?.[0]?.msg)
  //       }
  //     });
  //   } catch (error) {
  //     console.error("Error in HandleNextPage:", error);
  //     toast.error("An error occurred. Please try again.");
  //   }
  // };



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

        const dayId = getDayId(availSchedule.day); // Current selected day from the form

        // Find existing schedule data from updateThreeData to get the availability ID
        // Note: We match by the original day_id to find the existing record
        const existingSchedule = updateThreeData?.res?.find(
          (schedule) => {
            // You might need to adjust this logic based on how you want to match existing records
            // For now, matching by the current day_id, but you might want to match by index or another identifier
            return schedule.day_id === dayId;
          }
        );

        const scheduleData = {
          day_id: dayId, // Current selected day ID from the form (user can change this)
          start_time: formatTime(
            availSchedule.startTime,
            availSchedule.startPeriod
          ),
          end_time: formatTime(
            availSchedule.endTime,
            availSchedule.endPeriod
          ),
        };

        // Include the existing availability record ID if it exists (for updates)
        if (existingSchedule && existingSchedule.id) {
          scheduleData.availability_id = existingSchedule.id; // Availability record ID (named as availability_id in payload)
        }

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
      company_id: id,
      availability_arr: availability_arr,
    };

    console.log("Dispatching payload:", payload);

    // Dispatch the API call
    const result = dispatch(updateStepThree(payload)).then((res) => {
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
          StepEight: false,
        });
      }
      else if(res?.payload?.response?.data?.status_code===422){
        toast.error(res?.payload?.response?.data?.errors?.[0]?.msg)
      }
    });
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
       StepEight: false,
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
        </div>

        {/* Break Time Section */}
        <div className="step_content_wraper">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[#435971] text-[18px] lg:text-[20px] lg:leading-[30px] font-medium">
              Break time
            </h3>
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
export default StepThreeEdit;
