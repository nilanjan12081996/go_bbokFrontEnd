'use client';

import React, { useEffect, useState } from 'react';

import { Poppins } from 'next/font/google';
import { League_Spartan } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Nunito_Sans } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { Select, Table, TextInput, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Pagination, Label, Checkbox } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { checkAvilableSearch, getCoins, setIsClick } from '../reducers/CoinSlice';
import { FaArrowRightLong } from 'react-icons/fa6';
import { getSearchHistory } from '../reducers/SearchHistroySlice';
import { toast, ToastContainer } from 'react-toastify';

import { BiCopy } from "react-icons/bi";

import phone01 from "../assets/imagesource/phone01.png";
import phone02 from "../assets/imagesource/phone02.png";
import phone03 from "../assets/imagesource/phone03.png";
import phone04 from "../assets/imagesource/phone04.png";
import phone05 from "../assets/imagesource/phone05.png";
import phone06 from "../assets/imagesource/phone06.png";

import french_flag from "../assets/imagesource/french_flag.png";
import english_flag from "../assets/imagesource/english_flag.png";
import spanish_flag from "../assets/imagesource/spanish_flag.png";

import bot01 from "../assets/imagesource/bot01.png";
import bot02 from "../assets/imagesource/bot02.png";
import bot03 from "../assets/imagesource/bot03.png";

import code_img from "../assets/imagesource/code_img.png";

import { IoCheckmark } from "react-icons/io5";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],   // You can add "latin-ext" if needed
  variable: "--font-nunito-sans", // optional CSS variable
  weight: ["300", "400", "600", "700", "900"], // choose the weights you need
});

const page = () => {
  return (
    <div className={`${poppins.className} antialiased`}>
        <div className='mb-8'>
            <h3 className='text-[22px] leading-[22px] text-black font-medium pb-4'>Subscription Plans</h3>
            <p className='text-[13px] leading-[2px] text-[#747577] font-normal pb-0'>Easily manage, upgrade, and control all your subscription plans in one place.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 w-7/12">
            <div className="rounded-[12px] px-6 py-10 border border-[#C9C9C9] bg-white">
                <div className='mb-4 border border-[#00806A] bg-[#E8FFFB] text-[#00806A] inline-block rounded-[5px]'>
                    <p className='text-[12px] leading-[26px] px-2 font-medium'>Current Plan</p>
                </div>
                <h3 className="text-[#191d23] text-[22px] leading-[22px] font-bold pb-4">Free</h3>
                <p className="text-[16px] leading-[22px] text-[#95a0af] pb-3 font-normal">Perfect for individuals and small businesses to start using a WhatsApp chatbot at no cost.</p>
                <h4 className="text-[56px] text-[#191d23] pb-3 font-medium">$0<span className="text-[#4b5768] text-base font-light">/ Month</span></h4>
                <button className="bg-white hover:bg-[#024E41] text-[#024E41] hover:text-white text-base leading-[44px] font-semibold border-2 w-full cursor-pointer border-[#024E41] rounded-[4px]">Get Started Now</button>
                <div className="mt-8">
                <ul>
                    <li className="flex items-center gap-3 mb-3">
                        <div className="w-[32px] h-[32px] rounded-[100px] bg-[#e8edfb] flex items-center justify-center">
                        <IoCheckmark className="text-[#024e41]" />
                        </div>
                        <p className="text-[16px] text-[#191d23]">3 WhatsApp Chatbot</p>
                    </li>
                    
                </ul>
                </div>
            </div>
            <div className="rounded-[12px] px-6 py-10 border border-[#024E41] bg-[#024E41]">
                <h3 className="text-[#ffffff] text-[22px] leading-[22px] font-bold pb-4">Pro</h3>
                <p className="text-[16px] leading-[22px] text-[#ffffff] pb-3 font-normal">Ideal for growing businesses that need advanced WhatsApp chatbot features to scale and engage more customers.</p>
                <h4 className="text-[56px] text-[#ffffff] pb-3 font-medium">€20.99<span className="text-[#ffffff] text-base font-light">/ Month</span></h4>
                <button className="bg-white hover:bg-[#000000] text-[#024E41] hover:text-white text-base leading-[44px] font-semibold border-2 w-full cursor-pointer border-[#024E41] rounded-[4px]">Get Started Now</button>
                <div className="mt-8">
                <ul>
                    <li className="flex items-center gap-3 mb-3">
                        <div className="w-[32px] h-[32px] rounded-[100px] bg-[#e8edfb] flex items-center justify-center">
                        <IoCheckmark className="text-[#024e41]" />
                        </div>
                        <p className="text-[16px] text-[#ffffff]">Unlimited WhatsApp Chatbot</p>
                    </li>
                </ul>
                </div>
            </div>
        </div>
        </div>
  )
}

export default page