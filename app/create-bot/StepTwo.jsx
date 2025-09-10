"use client";
import { Label, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createServiceSteptwo, getCurrency, getExample } from "../reducers/CreateBotSlice";
import { toast } from "react-toastify";
const StepTwo = ({ setShow, industryId, businessId }) => {
  const { examples,currencyData } = useSelector((state) => state?.bot);
  const dispatch = useDispatch();
  const HandleNextPage = () => {
    setShow({
      StepOne: false, // AddProduct is the first step
      StepTwo: false,
      StepThree: true,
      StepFour: false,
      StepFive: false,
      StepSix: false,
       StepSeven: false,
      StepEight:false
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
    { serviceName: "",servicePrice:"",currency:"", duration: "", timeType: "mins" },
  ]);

  // Add new row
  const handleAddRow = () => {
    setRows([...rows, { 
      serviceName: "", 
      servicePrice: "",
      currency: "",
      duration: "", 
      timeType: "mins" 
    }]);
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

  const onSubmit = (data) => {
    const isValid = rows.every(
      (row) => row.serviceName.trim() !== "" && 
               row.duration.trim() !== "" && 
               row.servicePrice.trim() !== "" && 
               row.currency.trim() !== ""
    );
    if (!isValid) {
      toast.error("Please fill in all service names,durations,price and currency");
      return;
    }
   const service_arr = rows.map((row) => ({
      service_name: row.serviceName.trim(),
      service_price: row.servicePrice.trim(),
      currency_id: parseInt(row.currency), // Convert to number as expected in payload
      duration: `${row.duration.trim()} ${row.timeType}`, // Added space for better formatting
    }));
    const payload = {
      industry_id: industryId,
      company_id: businessId,
      
      service_arr: service_arr,
    };
    dispatch(createServiceSteptwo(payload)).then((res) => {
      if (res?.payload?.status_code === 201) {
        HandleNextPage();
      }
    });
  };
  useEffect(() => {
    dispatch(getExample({ id: industryId }));
    dispatch(getCurrency())
  }, []);
  console.log("examples", examples);

  return (
    <>
      <div className="step_box_two">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className="step_content_wraper">
            {rows?.map((rows, index) => {
              return (
                <>
                  <div className="flex gap-4 mb-0 items-start" key={index}>
                    <div className="w-11/12">
                      <div className="lg:flex gap-4 mb-8">
                        <div className="lg:w-4/12 step_field mb-2 lg:mb-0">
                          <div className="mb-1 block">
                            <Label htmlFor={`service-${index}`}>
                              Service Name *
                            </Label>
                          </div>
                          <TextInput
                            id={`service-${index}`}
                            type="text"
                            sizing="md"
                            value={rows.serviceName}
                            placeholder="Heart checkup"
                            {...register(`rows.${index}.serviceName`, { required: "Service Name is required" })}
                            onChange={(e) =>
                              handleChange(index, "serviceName", e.target.value)
                            }
                          />
                          {errors?.rows?.[index]?.serviceName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.rows[index].serviceName.message}
            </p>
          )}
                          {/* <div className="mt-4">
                            <p className="text-[#7C7C7C] text-[13px] leading-[20px] font-medium pb-1">
                              Service Name Eg.
                            </p>
                            <div>
                              <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                                {examples?.data?.map((ex) => {
                                  return (
                                    <>
                                      <li className="text-[12px] leading-[24px] text-black border border-[#D8D8D8] rounded-[6px] py-1 px-3 shadow">
                                        {ex?.service_name}
                                      </li>
                                    </>
                                  );
                                })}
                              </ul>
                            </div>
                          </div> */}
                          
                        </div>
                        <div className="lg:w-4/12">
                          <div className="mb-1 block">
                            <Label htmlFor={`duration-${index}`}>
                              Service price
                            </Label>
                          </div>
                          <div className="flex gap-1 step_field">
                            <div className="w-8/12 lg:w-9/12">
                              <TextInput
                                id="base"
                                type="text"
                                sizing="md"
                                 {...register(`rows.${index}.servicePrice`, { required: "Service Price is required" })}
                                value={rows.servicePrice}
                                onChange={(e) =>
                                  handleChange(
                                    index,
                                    "servicePrice",
                                    e.target.value
                                  )
                                }
                              />
                              {errors?.rows?.[index]?.servicePrice && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.rows[index].servicePrice.message}
                </p>
              )}
                              
                            </div>
                            <div className="w-8/12 lg:w-6/12">
                              <Select
                               {...register(`rows.${index}.currency`, { required: "Currency is required" })}
                              id={`currency-${index}`}
                              value={rows.currency}
                              onChange={(e) =>
                                handleChange(
                                  index,
                                  "currency",
                                  e.target.value
                                )
                              }
                              required
                              >
                                <option>Select</option>
                                {
                                  currencyData?.res?.map((cur,curIndex)=>(
                                    <option key={curIndex} value={cur?.id}>{cur?.currency_symbol} {cur?.currency_name}</option>
                                  ))
                                }
                              </Select>
                                {errors?.rows?.[index]?.currency && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.rows[index].currency.message}
                </p>
              )}
                            </div>
                          </div>
                        </div>
                        <div className="lg:w-4/12">
                          <div className="mb-1 block">
                            <Label htmlFor={`duration-${index}`}>
                              Duration *
                            </Label>
                          </div>
                          <div className="flex gap-1 step_field">
                            <div className="w-8/12 lg:w-9/12">
                              <TextInput
                                id="base"
                                type="text"
                                sizing="md"
                                {...register(`rows.${index}.duration`, { required: "Duration is required" })}
                                value={rows.duration}
                                onChange={(e) =>
                                  handleChange(
                                    index,
                                    "duration",
                                    e.target.value
                                  )
                                }
                              />
                              {errors?.rows?.[index]?.duration && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.rows[index].duration.message}
                </p>
              )}
                            </div>
                            <div className="w-4/12 lg:w-3/12">
                              <Select
                              {...register(`rows.${index}.timeType`, { required: "Time type is required" })}
                                id={`timeType-${index}`}
                                value={rows.timeType}
                                onChange={(e) =>
                                  handleChange(
                                    index,
                                    "timeType",
                                    e.target.value
                                  )
                                }
                                required
                              >
                                <option>mins</option>
                                <option>hrs</option>
                              </Select>
                                 {errors?.rows?.[index]?.timeType && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.rows[index].timeType.message}
                </p>
              )}
                            </div>
                          </div>
                          {/* <div className="mt-4">
                            <p className="text-[#7C7C7C] text-[13px] leading-[20px] font-medium pb-1">
                              Duration Eg.
                            </p>
                            <div>
                              <ul className="flex gap-2">
                                <li className="text-[12px] leading-[24px] text-black border border-[#D8D8D8] rounded-[6px] py-1 px-3 shadow">
                                  30mins{" "}
                                </li>
                                <li className="text-[12px] leading-[24px] text-black border border-[#D8D8D8] rounded-[6px] py-1 px-3 shadow">
                                  1hr{" "}
                                </li>
                                <li className="text-[12px] leading-[24px] text-black border border-[#D8D8D8] rounded-[6px] py-1 px-3 shadow">
                                  15mins{" "}
                                </li>
                              </ul>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="w-1/12 flex flex-col items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={handleAddRow}
                        className="text-[#00806A] text-3xl cursor-pointer hover:text-black mt-8"
                      >
                        <AiFillPlusCircle />
                      </button>
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
              );
            })}

            <div className="flex">
              <div className="lg:flex justify-between gap-4 mb-8 w-11/12">
                <div className="lg:w-4/12 step_field mb-2 lg:mb-0">
                {
                  examples?.data?.length>0&&(
                       <div className="mt-4">
                    <p className="text-[#7C7C7C] text-[13px] leading-[20px] font-medium pb-1">
                      Service Name Eg.
                    </p>
                    <div>
                      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                        {examples?.data?.map((ex) => {
                          return (
                            <>
                              <li className="text-[12px] leading-[24px] text-black border border-[#D8D8D8] rounded-[6px] py-1 px-3 shadow">
                                {ex?.service_name}
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  )
                }
                 
                </div>
                <div className="lg:w-4/12">
                  <div className="mt-4">
                    <p className="text-[#7C7C7C] text-[13px] leading-[20px] font-medium pb-1">
                      Duration Eg.
                    </p>
                    <div>
                      <ul className="flex gap-2">
                        <li className="text-[12px] leading-[24px] text-black border border-[#D8D8D8] rounded-[6px] py-1 px-3 shadow">
                          30mins{" "}
                        </li>
                        <li className="text-[12px] leading-[24px] text-black border border-[#D8D8D8] rounded-[6px] py-1 px-3 shadow">
                          1hr{" "}
                        </li>
                        <li className="text-[12px] leading-[24px] text-black border border-[#D8D8D8] rounded-[6px] py-1 px-3 shadow">
                          15mins{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/12">&nbsp;</div>
            </div>
          </div>
          <div className="step_btn_area border-t border-[#EBEEFA] pt-5">
            <div className="flex justify-end items-center gap-3">
              {/* <button
                onClick={() => handleBack()}
                className="bg-[#ffffff] rounded-[6px] text-[#464f60] hover:text-[#ffffff] text-[13px] leading-[36px] lg:text-[14px] lg:leading-[43px] font-medium px-4 lg:px-6 cursor-pointer hover:bg-[#00806A] border border-[#dddfe2] hover:border-[#00806A]"
              >
                Previous Step
              </button> */}
              <button
                type="submit"
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
export default StepTwo;
