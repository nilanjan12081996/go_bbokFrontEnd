'use client';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { cancelSubscription, changePassword, getProfile, uploadPhoto } from "../reducers/ProfileSlice";
import { useForm } from "react-hook-form";
import { Button, FileInput, Label, TextInput } from "flowbite-react";
import SubsCancelModal from "../modal/SubsCancelModal";
import { SlEnvolope } from "react-icons/sl";
import profileUser from "../assets/imagesource/profile_user.png";
import Image from "next/image";
import { MdEdit } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

const page = () => {
  const dispatch = useDispatch()
  const { profileData } = useSelector((state) => state?.profile)
  const [subsId, setSubsId] = useState()
  const [openCancelModal, setOpenCandelModal] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const password = watch("newPassword");
  useEffect(() => {
    dispatch(getProfile())
  }, [])
  console.log("profileData", profileData)

  useEffect(() => {
    setValue("first_name", profileData?.data?.first_name)
    setValue("last_name", profileData?.data?.last_name)
    setValue("email", profileData?.data?.email)
    setValue("username", profileData?.data?.username)
  }, [profileData?.data])
  const handleCancelSubs = (id) => {
    // dispatch(cancelSubscription({ subscription_id: id })).then((res) => {
    //   console.log("res", res);
    //   if (res?.paylaod?.status_code === 200) {
    //     dispatch(getProfile())
    //   }

    // })
    setOpenCandelModal(true)
    setSubsId(id)
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const formData = new FormData();
      formData.append("avatar", file);
      dispatch(uploadPhoto(formData)).then((res) => {
        console.log("Res: ", res);
        if (res?.payload?.status_code === 200) {
          dispatch(getProfile());
        }
      });
    }
  };

  const onSubmit = (data) => {
    console.log("data:", data);
    const payload = {
      user_id: profileData?.data?.id,
      oldPassword: data?.oldPassword,
      newPassword: data?.newPassword,
      confirmPassword: data?.confirmPassword
    }

    dispatch(changePassword(payload)).then((res) => {
      console.log("res", res);
      if (res?.payload?.status_code === 200) {
        toast.success(res?.payload?.message)
      }
    })
  }
  return (
    <>
      <div>
        <div>
          <ToastContainer />
          <div className='mb-8'>
              <h3 className='text-[22px] leading-[22px] text-black font-medium pb-4'>My Account</h3>
              <p className='text-[13px] leading-[2px] text-[#747577] font-normal pb-0'>Manage and update your account details in one place.</p>
          </div>
          <div className="bg-white rounded-2xl">
            <div className="w-full lg:w-full p-5 lg:p-10 mb-4">
              <div className="account_setting_section">
                <div className="lg:flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="relative">
                        {
                          profileData?.data?.avatar ? (
                            <Image src={profileData?.data?.avatar} width={120}
                              height={120} alt='profileUser' className='w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] rounded-[50px] overflow-hidden' />
                          ) : (
                            <Image src={profileUser} alt='profileUser' className='w-[120px] h-[120px] rounded-[50px] overflow-hidden' />
                          )
                        }

                        <div className="absolute right-0 top-0">
                          <button
                            type="button"
                            className="bg-white p-2 rounded-full shadow-md text-[#757575] hover:bg-[#00806A] hover:text-white"
                          >
                            <FileInput
                              className="absolute opacity-0 h-3 w-5 border border-black"
                              id="file"
                              accept="image/*"
                              onChange={handleFileChange}
                            />
                            <MdEdit className="text-xl" />
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="text-[#000000] text-xl pb-2"> {profileData?.data?.fullname} Moni Roy</p>
                        <p className="text-[#777777] text-base pb-2">{profileData?.data?.email} moniroy@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  {/* <div>
                    <button className="bg-[#0E5D4F] hover:bg-black text-white text-base leading-[46px] rounded-[8px] px-8 cursor-pointer">Edit</button>
                  </div> */}
                </div>
                <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="lg:pt-6">
                      <div className="common-section-box-content">
                        <div className="lg:flex gap-8 mb-4">
                          <div className="account_user_section w-8/12 lg:w-4/12 mb-2 lg:mb-0">
                            {/* {profileData?.userDetails?.avatar !== null ? (
                            <img
                              src={
                                profileData?.base +
                                "/" +
                                profileData?.userDetails?.avatar
                              }
                              alt="Profile Preview"
                              className="object-cover w-full h-full rounded-lg"
                            />
                          ) : (
                            <img
                              src={photorealisticImage}
                              alt="Profile Preview"
                              className="object-cover w-full h-full rounded-lg"
                            />
                          )} */}
                            {/* <div className="absolute right-1 top-1">
                              <button
                                type="button"
                                className="bg-white p-2 rounded-full shadow-md text-[#757575] hover:bg-[#ff1a03] hover:text-white"
                              >
                                <FileInput
                                  className="absolute opacity-0 h-3 w-5 border border-black"
                                  id="file"
                                  accept="image/*"
                                // onChange={handleFileChange}
                                />
                                <MdEdit className="text-xl" />
                              </button>
                            </div> */}
                            &nbsp;
                          </div>
                        </div>
                        <div className="lg:flex gap-6 mb-3">
                          <div className="w-full lg:w-6/12">
                            <div className="mb-1 block">
                              <Label className="">First Name </Label>
                            </div>
                            <TextInput
                              id="base"
                              type="text"
                              sizing="md"
                              className=""
                              {...register("first_name")}
                              readOnly
                            />
                          </div>
                          <div className="w-full lg:w-6/12">
                            <div className="mb-1 block">
                              <Label className="">Last Name </Label>
                            </div>
                            <TextInput
                              id="base"
                              type="text"
                              sizing="md"
                              className=""
                              {...register("last_name")}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="lg:flex gap-6 mb-3">
                          <div className="w-full lg:w-6/12">
                            <div className="mb-1 block">
                              <Label className="">
                                Email <span className="text-[#ff1a03]"></span>
                              </Label>
                            </div>
                            <TextInput
                              id="base"
                              type="text"
                              sizing="md"
                              required
                              {...register("email")}
                              readOnly
                            />
                          </div>
                          <div className="w-full lg:w-6/12">
                            <div className="mb-1 block">
                              <Label className="">User Name </Label>
                            </div>
                            <TextInput
                              id="base"
                              type="text"
                              sizing="md"
                              {...register("username")}
                              readOnly
                            />
                          </div>
                        </div>

                        <div className="lg:flex justify-between mt-3">
                          <div className="py-10 w-full mt-5">
                            <p className="text-[#000000] text-[18px] pb-4">My email Address</p>
                            <div className="flex items-center gap-2">
                              <div>
                                <div className="bg-[#e6eeec] w-[56px] h-[56px] rounded-full flex justify-center items-center">
                                  <SlEnvolope className="text-2xl text-[#055346]" />
                                </div>
                              </div>
                              <div>
                                <p className="text-[#000000] text-[16px]">{profileData?.data?.email}moniroy@gmail.com</p>
                                <p className="text-[#808080] text-[16px]">1 month ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mt-10">
                            <p className="text-[#000000] text-[18px] pb-4">Change Paasowrd</p>

                            <div className="w-full lg:w-12/12">
                              <div className="mb-1 block">
                                <Label className="">Old Password </Label>
                              </div>
                              <TextInput
                                id="base"
                                type="password"
                                sizing="md"
                                {...register("oldPassword", { required: "Old Password is Required" })}
                              />
                              {errors?.oldPassword && (
                                <span className="text-red-500">
                                  {errors?.oldPassword?.message}
                                </span>
                              )}
                            </div>
                            <div className="w-full lg:w-12/12">
                              <div className="mb-1 block">
                                <Label className="">New Passowrd </Label>
                              </div>
                              <TextInput
                                id="base"
                                type="password"
                                sizing="md"
                                {...register("newPassword", { required: "New Password is Required" })}
                              />
                              {errors?.newPassword && (
                                <span className="text-red-500">
                                  {errors?.newPassword?.message}
                                </span>
                              )}
                            </div>
                            <div className="w-full lg:w-12/12">
                              <div className="mb-1 block">
                                <Label className="">Confirm Passowrd </Label>
                              </div>
                              <TextInput
                                id="base"
                                type="password"
                                sizing="md"
                                {...register("confirmPassword", {
                                  required: "Confirm Password is required",

                                  validate: (value) =>
                                    value === password || "Password do not Match",
                                })}

                              />
                              {errors.confirmPassword && (
                                <span className="text-red-500">
                                  {errors.confirmPassword.message}
                                </span>
                              )}
                            </div>
                            <div>
                              <button className="bg-[#00806A] hover:bg-black text-white text-base leading-[46px] rounded-[8px] px-8 cursor-pointer mt-3">Update</button>
                            </div>

                          </div>

                        </div>

                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          openCancelModal && (
            <SubsCancelModal
              openCancelModal={openCancelModal}
              setOpenCandelModal={setOpenCandelModal}
              subsId={subsId}
              profileData={profileData}
            />
          )
        }
      </div>
    </>
  )
}
export default page