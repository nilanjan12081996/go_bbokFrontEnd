'use client';

import React, { useEffect, useState } from 'react';

import { Poppins } from 'next/font/google';
import { League_Spartan } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Nunito_Sans } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { Select, Table, TextInput, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Pagination } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { checkAvilableSearch, getCoins, setIsClick } from '../reducers/CoinSlice';
import { FaArrowRightLong } from 'react-icons/fa6';
import { getSearchHistory } from '../reducers/SearchHistroySlice';
import { toast, ToastContainer } from 'react-toastify';

import Create_Resume_plus from "../assets/imagesource/Create_Resume_plus.png";
import Improve_existing_resume_icon from "../assets/imagesource/Improve_existing_resume_icon.png";
import jd_based_resume from "../assets/imagesource/jd_based_resume.png";
import calendar_img from "../assets/imagesource/calendar_img.png";

import { BiEdit } from "react-icons/bi"
import { CgFileDocument } from "react-icons/cg";

import { MdMiscellaneousServices } from "react-icons/md";
import { BiSolidCalendar } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { bookingData, dashBoardData, userData } from '../reducers/DashBoardSlice';
import CalendarComponent from './CalenderComponent';



const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'], // or ['latin-ext'] etc.
  weight: ['400', '500', '600', '700'], // specify desired weights
  variable: '--font-inter', // optional, for Tailwind usage
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],   // You can add "latin-ext" if needed
  variable: "--font-nunito-sans", // optional CSS variable
  weight: ["300", "400", "600", "700", "900"], // choose the weights you need
});

const Page = () => {
  const {dashBoards,bookingCount,userCount}=useSelector((state)=>state?.dash)
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(dashBoardData())
dispatch(bookingData())
dispatch(userData())
console.log("dashBoards",dashBoards);

  },[])
  return (
    <div className={`${poppins.className} antialiased`}>
      <ToastContainer />
      <div className='mb-0'>
        <div className='mb-5'>
          <div className='flex gap-4'>
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-5'>
              <div className='bg-white rounded-[10px] px-5 py-5 lg:py-7'>
                <div className='flex justify-between items-center mb-4'>
                  <p className='text-base lg:text-[18px] lg:leading-[18px] text-[#6d6e70] font-medium'>Services</p>
                  <div className='w-[50px] h-[50px] lg:w-[75px] lg:h-[75px] bg-[#E1E1FF] rounded-[8px] flex items-center justify-center'>
                    <MdMiscellaneousServices className='text-[#6260FF] text-3xl lg:text-5xl' />
                  </div>
                </div>
                <h3 className='text-[32px] leading-[40px] lg:text-[48px] lg:leading-[48px] text-[#202224] font-bold'>{dashBoards?.service_count}</h3>
              </div>
              <div className='bg-white rounded-[10px] px-5 py-5 lg:py-7'>
                <div className='flex justify-between items-center mb-4'>
                  <p className='text-base lg:text-[18px] lg:leading-[18px] text-[#6d6e70] font-medium'>Bookings</p>
                  <div className='w-[50px] h-[50px] lg:w-[75px] lg:h-[75px] bg-[#FFFCE1] rounded-[8px] flex items-center justify-center'>
                    <BiSolidCalendar className='text-[#DAA644] text-3xl lg:text-5xl' />
                  </div>
                </div>
                <h3 className='text-[32px] leading-[40px] lg:text-[48px] lg:leading-[48px] text-[#202224] font-bold'>{bookingCount?.count}</h3>
              </div>
              <div className='bg-white rounded-[10px] px-5 py-5 lg:py-7'>
                <div className='flex justify-between items-center mb-4'>
                  <p className='text-base lg:text-[18px] lg:leading-[18px] text-[#6d6e70] font-medium'>Customers</p>
                  <div className='w-[50px] h-[50px] lg:w-[75px] lg:h-[75px] bg-[#E1FDFF] rounded-[8px] flex items-center justify-center'>
                    <FaUsers className='text-[#108F98] text-3xl lg:text-5xl' />
                  </div>
                </div>
                <h3 className='text-[32px] leading-[40px] lg:text-[48px] lg:leading-[48px] text-[#202224] font-bold'>{userCount?.count}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-[10px] p-7 mb-14'>
          <h2 className='text-[22px] leading-[22px] text-black font-medium mb-6'>Schedule</h2>
          <div className='calendar_box'>
            {/* <Image src={calendar_img} alt="calendar_img" className='mb-5' /> */}
            <CalendarComponent/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;