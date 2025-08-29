'use client';

import { Button, Label, Modal, ModalBody, ModalHeader, TextInput } from "flowbite-react";
import Image from "next/image";
import registerStepone from "../assets/imagesource/register_stepone.png";
import { useForm } from "react-hook-form";
import VerifyOtpModal from "./verifyOtpModal";
import { useDispatch, useSelector } from "react-redux";
import { registerCustomer } from "../reducers/AuthSlice";
import { toast } from "react-toastify";
import { useState } from "react";
import { checkSubscription } from "../reducers/ProfileSlice";
import { useRouter } from "next/navigation";
import { getSearchHistory } from "../reducers/SearchHistroySlice";
import { FcGoogle } from "react-icons/fc";

import { RiGoogleFill } from "react-icons/ri";
import Link from 'next/link';

const RegistrationModal = ({ openRegisterModal, setOpenRegisterModal, setOpenVerifyOtpModal, setOpenLoginModal, openPricModal, setOpenPriceModal }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { loading } = useSelector((state) => state?.auth);
    const [error, setError] = useState()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const password = watch("password");
    const onSubmit = (data) => {
        console.log("registration data", data)
        dispatch(registerCustomer(data)).then((res) => {
            console.log("registration res", res)
            if (res?.payload?.status_code === 201) {
                toast.success(res?.payload?.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                    theme: "light",
                });
                //setOpenRegisterModal(false);
                //setOpenLoginModal(true);
                // setOpenPriceModal(true)
                dispatch(checkSubscription()).then((res) => {
                    console.log("res", res);
                    if (res?.payload?.data) {

                        setOpenRegisterModal(false);
                        router.push('/dashboard');
                        dispatch(getSearchHistory({ week: 0 }));
                    } else {

                        setOpenRegisterModal(false);
                        router.push('/plans');
                        dispatch(getSearchHistory({ week: 0 }));
                    }
                })
            } else if (res?.payload?.response?.data?.status_code === 422) {
                const validationErrors = res?.payload?.response?.data?.data || []
                console.log("validationErrors", validationErrors);
                const combinedMessages = validationErrors.map((e) => e.message).join(' | ');
                setError(combinedMessages);
            }
        })
    };

    const openLoginModal = () => {
        setOpenLoginModal(true);
        setOpenRegisterModal(false);
    }

    const handlePriceModal = () => {
        setOpenPriceModal(true)
        setOpenRegisterModal(false);
    }

    return (
        <>
            <Modal size="6xl" show={openRegisterModal} onClose={() => setOpenRegisterModal(false)}>
                <ModalHeader className='border-none pb-0 absolute right-3 top-3 bg-transparent'>&nbsp;</ModalHeader>
                <ModalBody className='bg-white p-0'>
                    <div className="lg:flex">
                        <div className='w-6/12 hidden lg:block register_image'>
                            &nbsp;
                        </div>
                        <div className='lg:w-6/12 flex justify-center items-center'>
                            <div className='py-16 px-5 lg:py-10 lg:px-20'>
                                <h2 className='text-[#000000] text-2xl lg:text-[30px] leading-[35px] font-semibold pb-5'>Sign Up</h2>
                                <div className='form_area'>
                                    
                                    <div className="mb-8 flex justify-center items-center">
                                        <button className="google_btn"><FcGoogle className="text-[24px] mr-2" /> Continue with Google</button>
                                    </div>
                                    <div className="mb-4 text-center continue_width">
                                        <p className="text-[#525252] text-[14px] leading-[20px]">Or</p>
                                    </div>
                                    <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-0">
                                        <div className='flex gap-4'>
                                            <div className='w-full mb-2'>
                                                <div className="mb-0 block">
                                                    <Label>First Name</Label>
                                                </div>
                                                <TextInput type="text" placeholder="Enter First Name"
                                                    {...register("first_name", {
                                                        required: "First name is required",
                                                    })}
                                                />
                                                {errors?.first_name && (
                                                    <span className="text-red-500">
                                                        {errors?.first_name?.message}
                                                    </span>
                                                )}
                                            </div>
                                            <div className='w-full mb-2'>
                                                <div className="mb-0 block">
                                                    <Label>Last Name</Label>
                                                </div>
                                                <TextInput type="text" placeholder="Enter Last Name"
                                                    {...register("last_name", {
                                                        required: "Last name is required",
                                                    })}
                                                />
                                                {errors?.last_name && (
                                                    <span className="text-red-500">
                                                        {errors?.last_name?.message}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className='mb-2'>
                                            <div className="mb-0 block">
                                                <Label>Email Address</Label>
                                            </div>
                                            <TextInput type="email" placeholder="Enter your Email Id"
                                                {...register("email", {
                                                    required: "Email is required",
                                                })}
                                            />
                                            {errors?.email && (
                                                <span className="text-red-500">
                                                    {errors?.email?.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className='mb-2'>
                                            <div className="mb-0 block">
                                                <Label>Username</Label>
                                            </div>
                                            <TextInput type="text" placeholder="Enter your Username"
                                                {...register("username", {
                                                    required: "Username is required",
                                                })}
                                            />
                                            {errors?.username && (
                                                <span className="text-red-500">
                                                    {errors?.username?.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className='mb-2'>
                                            <div className="mb-0 block">
                                                <Label>Enter your Password</Label>
                                            </div>
                                            <TextInput type="password" placeholder='Type your password'
                                                {...register("password", {
                                                    required: "Password is required",
                                                })}
                                            />
                                            {errors?.password && (
                                                <span className="text-red-500">
                                                    {errors?.password?.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className='mb-2'>
                                            <div className="mb-0 block">
                                                <Label>Confirm your Password</Label>
                                            </div>
                                            {/* <TextInput type="password" placeholder='Type your password'
                                                {...register("confirm_password", {
                                                    required: "Password is required",
                                                })}
                                            />
                                            {errors?.confirm_password && (
                                                <span className="text-red-500">
                                                    {errors?.confirm_password?.message}
                                                </span>
                                            )} */}
                                            <TextInput
                                                type="password"
                                                placeholder="Type your password"
                                                {...register("confirm_password", {
                                                    required: "Confirm Password is required",
                                                    validate: (value) =>
                                                        value === password || "Password do not Match",
                                                })}
                                            />
                                            {errors.confirm_password && (
                                                <span className="text-red-500">
                                                    {errors.confirm_password.message}
                                                </span>
                                            )}
                                        </div>
                                        <Button  type="button" onClick={handlePriceModal} className='mt-2'>{loading ? "Wait..." : "Sign Up"}</Button>
                                        {
                                            error && (
                                                <div className="text-center text-sm text-red-600 mt-3">{error}</div>
                                            )
                                        }
                                    </form>

                                    <div className="mt-6 text-center">
                                        <p className="text-[#615D5D] text-[14px] leading-[20px] font-normal">Already have an account? <Link onClick={() => openLoginModal(true)} className="text-[#000000] hover:text-[#615D5D] font-medium" href="/" passHref>Sign in</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>


        </>
    )
};

export default RegistrationModal;