'use Client';

import { Button, Checkbox, Label, Modal, ModalBody, ModalHeader, TextInput } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import loginImg from "../assets/imagesource/login_img.png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginCustomer } from "../reducers/AuthSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";
import { checkSubscription, getProfile } from "../reducers/ProfileSlice";
import { getSearchHistory } from "../reducers/SearchHistroySlice";
import { FcGoogle } from "react-icons/fc";

import { RiGoogleFill } from "react-icons/ri";


const LoginModal = ({ openLoginModal, setOpenLoginModal, setOpenRegisterModal }) => {
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

    const onSubmit = (data) => {
        dispatch(loginCustomer(data)).then((res) => {
            console.log("login res", res)
            if (res?.payload?.status_code === 200) {
                        setOpenLoginModal(false);
                        router.push('/dashboard');

            } else if (res?.payload?.response?.data?.status_code === 401) {
                setError(res?.payload?.response?.data?.message)
            }
        })
    };
    const handleSignup = () => {
        setOpenRegisterModal(true)
        setOpenLoginModal(false)
    }

    return (
        <>
            <Modal size="6xl" show={openLoginModal} onClose={() => setOpenLoginModal(false)}>
                <ModalHeader className='border-none pb-0 absolute right-3 top-3 bg-transparent'>&nbsp;</ModalHeader>
                <ModalBody className='bg-white p-0'>
                    <div className="lg:flex">
                        <div className='w-6/12 hidden lg:block login_image'>
                            &nbsp;
                        </div>
                        <div className='lg:w-6/12 py-20 px-10 lg:py-32 lg:px-20'>
                            <div className='py-0 px-0'>
                                <h2 className='text-[#000000] text-[30px] leading-[35px] font-semibold pb-4'>Sign in</h2>
                                <div className='form_area'>
                                    
                                    <div className="mb-8 flex justify-center items-center">
                                        <button className="google_btn"><FcGoogle className="text-[24px] mr-2" /> Continue with Google</button>
                                    </div>

                                    <div className="mb-4 text-center continue_width">
                                        <p className="text-[#525252] text-[14px] leading-[20px]">Or</p>
                                    </div>
                                    
                                    <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-0">
                                        <div className='mb-2'>
                                            <div className="mb-1 block">
                                                <Label htmlFor="email1">Your Email</Label>
                                            </div>
                                            <TextInput id="email1" type="email" placeholder="name@flowbite.com"
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
                                            <div className="mb-1 block">
                                                <Label htmlFor="password1">Enter your Password</Label>
                                            </div>
                                            <TextInput id="password1" type="password"
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
                                        <div className="flex items-center justify-end gap-0 mb-8">
                                            <div>
                                                <Link className='text-[#111111] hover:text-[#666666] text-sm underline' href="" passHref>Forget your password</Link>
                                            </div>
                                        </div>
                                        <Button type="submit">{loading ? "Wait..." : "Sign in"}</Button>
                                        {
                                            error && (
                                                <div className="text-center text-sm text-red-600 mt-3">{error}</div>
                                            )
                                        }
                                        {/* <p className="text-center mt-2 flex justify-center items-center">Already Have an account? <button className="sign_up_btn" onClick={handleSignup}>Sign Up</button> </p> */}
                                    </form>
                                    <div className="mt-6 text-center">
                                        <p className="text-[#615D5D] text-[14px] leading-[20px] font-normal">Don’t have an account? <Link onClick={() => handleSignup(true)} className="text-[#000000] hover:text-[#615D5D] font-medium" href="/" passHref>Sign Up</Link></p>
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

export default LoginModal;