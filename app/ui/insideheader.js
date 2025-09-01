'use client';

import Image from 'next/image'
import React, { useEffect } from 'react'

import userFace from "../assets/imagesource/user_face.png";
import Flag from "../assets/imagesource/Flag.png";
import bell_icon from "../assets/imagesource/bell_icon.png";

import logoAdmin from "../assets/imagesource/logo_admin.png";

import { Poppins } from 'next/font/google';

import { useState } from "react";
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/AuthSlice';
import { useRouter } from 'next/navigation';
import { getProfile } from '../reducers/ProfileSlice';
import { FaRectangleList } from 'react-icons/fa6';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { BiSolidDashboard } from 'react-icons/bi';
import { Select } from 'flowbite-react';

import { IoIosArrowDown } from "react-icons/io";
import { getLanguage } from '../reducers/CreateBotSlice';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const Insideheader = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const{language}=useSelector((state)=>state?.bot)
  const router = useRouter();
  const { profileData } = useSelector((state) => state?.profile)
  const handleLogout = () => {
    // dispatch(logout())

    try {

      // Dispatch logout action
      dispatch(logout());

      // Navigate to home page
      router.push("/");

      // Force reload to ensure clean state
      // setTimeout(() => {
      //   window.location.reload();
      // }, 100);
    } catch (error) {
      console.error("Logout error:", error);
      // Fallback: still navigate to home
      router.push("/");
    }

  };
useEffect(()=>{
dispatch(getLanguage())
},[])


  return (
    <div className='bg-[#ffffff] rounded-[0px] py-4 px-6 mb-5 border-l border-[#f3f4f6]'>
      <div className='flex lg:justify-end justify-between items-center'>
        <div className='pl-[0] lg:pl-0 block lg:hidden'>
          <Image src={logoAdmin} alt="logoAdmin" className='w-[50px]' />
        </div>
        <div className='flex justify-end items-center gap-3'>
          {/* <div className='relative mr-5 mt-1'>
            <Image src={bell_icon} alt="bell_icon" className='w-[20px] h-[22px]' />
            <div className='bg-[#f93c65] hover:bg-black absolute top-[-9px] right-[-7px] w-[18px] h-[18px] rounded-[50px] flex items-center justify-center'>
              <Link className='text-xs text-white font-medium' href="/" passHref>6</Link>
            </div>
          </div> */}
          <div className='flex items-center gap-0 lang_box'>
            Currency
            <Select id="countries" required>
             {/* {
               language?.data?.map((lan)=>(
                <option>
                  {lan?.language}
                </option>
               ))
             } */}
             <option>Select</option>
             <option>EURO</option>
             <option>USD</option>
            </Select>
          </div>
          <div className='flex justify-end items-center gap-3'>
            {/* <button onClick={handleLogout} className='mr-4 text-black cursor-pointer'>Logout</button> */}
            {/* <p className='text-base text-[#CDCDCD] ${leagueSpartan.className}'>{profileData?.data?.fullname}</p> */}
            <div className='user_face'>
       
                <Image src={userFace} alt="userFace" width={45}
                  height={50} className='rounded-full w-[45px] h-[45px]' />
             
            </div>
             <div className='hidden lg:block'>
                 <p className='text-[#404040] text-[14px] font-bold'>Moni Roy</p>
                 <p className='text-[#565656] text-[12px] font-semibold'>Admin</p>
             </div>
          </div>
          <div className="relative group">
                {/* Profile Picture */}
                <div className='user_face border border-[#5C5C5C] w-[18px] h-[18px] rounded-full flex items-center justify-center'>
                   <IoIosArrowDown className='text-[#565656] text-sm' />
                </div>
                {/* Dropdown */}
                <div
                    className="absolute right-0 mt-0 w-40 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                        My Profile
                    </button>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-100">
                        Logout
                    </button>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insideheader