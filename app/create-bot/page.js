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
import { AiFillPlusCircle } from "react-icons/ai";

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
            <h3 className='text-[22px] leading-[22px] text-black font-medium pb-4'>Create bot</h3>
            <p className='text-[13px] leading-[2px] text-[#747577] font-normal pb-0'>Easily organize, update, and control all your services in one place.</p>
        </div>
        <div className='bg-white rounded-[10px] p-10'>
            <div className='step_wraper w-10/12 mx-auto pb-16'>
                <ul className='flex items-center justify-between'>
                    <li className='text-center relative z-20'>
                        <div className='number_box active_step inline-flex bg-[#EBEBEB] w-[40px] h-[40px] rounded-[50px] text-[#585858] text-[16px] leading-[40px] font-medium items-center justify-center mb-2'>1</div>
                        <p className='step_laber_box text-[#8F8F8F] text-base font-medium'>Step 1</p>
                    </li>
                    <li className='text-center relative z-20'>
                        <div className='number_box active_step_two inline-flex bg-[#EBEBEB] w-[40px] h-[40px] rounded-[50px] text-[#585858] text-[16px] leading-[40px] font-medium items-center justify-center mb-2'>2</div>
                        <p className='step_laber_box text-[#8F8F8F] text-base font-medium'>Step 2</p>
                    </li>
                    <li className='text-center relative z-20'>
                        <div className='number_box active_step_three inline-flex bg-[#EBEBEB] w-[40px] h-[40px] rounded-[50px] text-[#585858] text-[16px] leading-[40px] font-medium items-center justify-center mb-2'>3</div>
                        <p className='step_laber_box text-[#8F8F8F] text-base font-medium'>Step 3</p>
                    </li>
                    <li className='text-center relative z-20'>
                        <div className='number_box active_step_four inline-flex bg-[#EBEBEB] w-[40px] h-[40px] rounded-[50px] text-[#585858] text-[16px] leading-[40px] font-medium items-center justify-center mb-2'>4</div>
                        <p className='step_laber_box text-[#8F8F8F] text-base font-medium'>Step 4</p>
                    </li>
                    <li className='text-center relative z-20'>
                        <div className='number_box active_step_five inline-flex bg-[#EBEBEB] w-[40px] h-[40px] rounded-[50px] text-[#585858] text-[16px] leading-[40px] font-medium items-center justify-center mb-2'>5</div>
                        <p className='step_laber_box text-[#8F8F8F] text-base font-medium'>Step 5</p>
                    </li>
                    <li className='text-center relative z-20'>
                        <div className='number_box active_step_six inline-flex bg-[#EBEBEB] w-[40px] h-[40px] rounded-[50px] text-[#585858] text-[16px] leading-[40px] font-medium items-center justify-center mb-2'>6</div>
                        <p className='step_laber_box text-[#8F8F8F] text-base font-medium'>Step 6</p>
                    </li>
                </ul>
            </div>
            {/* step one start here */}
            <div className='step_box_one'>
                <div className='step_content_wraper'>
                    <div className='flex gap-4 mb-8'>
                        <div className="w-6/12">
                            <div className="mb-1 block">
                                <Label htmlFor="countries">Industry *</Label>
                            </div>
                            <Select id="countries" required>
                                <option>Health</option>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                            </Select>
                        </div>
                        <div className="w-6/12 step_field">
                            <div className="mb-1 block">
                                <Label htmlFor="countries">Business Name *</Label>
                            </div>
                            <TextInput id="base" type="text" sizing="md" placeholder='Habbibs' />
                        </div>
                    </div>
                </div>
                <div className='step_btn_area border-t border-[#EBEEFA] pt-5'>
                    <div className='flex justify-end items-center'>
                       <button className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[43px] font-medium px-10 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]'>Next Step</button>
                    </div>
                </div>
            </div>
            {/* step one ends here */}

            {/* step two start here */}
            <div className='step_box_two hidden'>
                <div className='step_content_wraper'>
                    <div className='flex gap-4'>
                        <div className='w-11/12'>
                            <div className='flex gap-4 mb-8'>
                                <div className="w-6/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Service Name *</Label>
                                    </div>
                                    <TextInput id="base" type="text" sizing="md" placeholder='Heart checkup' />
                                    <div className='mt-4'>
                                        <p className='text-[#7C7C7C] text-[13px] leading-[20px] font-medium pb-1'>Service Name Eg.</p>
                                        <div>
                                            <ul className='flex gap-2'>
                                                <li className='text-[12px] leading-[24px] text-black border border-[#D8D8D8] rounded-[6px] py-1 px-3 shadow'>Haircut </li>
                                                <li className='text-[12px] leading-[24px] text-black border border-[#D8D8D8] rounded-[6px] py-1 px-3 shadow'>Haircut </li>
                                                <li className='text-[12px] leading-[24px] text-black border border-[#D8D8D8] rounded-[6px] py-1 px-3 shadow'>Haircut </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-6/12">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Duration *</Label>
                                    </div>
                                    <div className='flex gap-1 step_field'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
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
                        <div className='w-1/12'>
                          <button className='text-[#00806A] text-3xl cursor-pointer hover:text-black mt-8'><AiFillPlusCircle /></button>
                        </div>
                    </div>
                </div>
                <div className='step_btn_area border-t border-[#EBEEFA] pt-5'>
                    <div className='flex justify-end items-center gap-3'>
                        <button className='bg-[#ffffff] rounded-[6px] text-[#464f60] hover:text-[#ffffff] text-[14px] leading-[43px] font-medium  px-6 cursor-pointer hover:bg-[#00806A] border border-[#dddfe2] hover:border-[#00806A]'>Previous Step</button>
                        <button className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[43px] font-medium px-10 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]'>Next Step</button>
                    </div>
                </div>
            </div>
            {/* step two ends here */}

            {/* step three start here */}
            <div className='step_box_three hidden'>
                <div className='step_content_wraper mb-6'>
                    <h3 className='text-[#435971] text-[20px] leading-[30px] mb-3 font-medium'>Availability</h3>
                    <div className='flex gap-4'>
                        <div className='w-10/12 '>
                            <div className='flex gap-4 mb-4'>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Choose Day*</Label>
                                    </div>
                                    <Select id="countries" required>
                                        <option>Choose Day</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </Select>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Start Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">End Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 mb-4'>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Choose Day*</Label>
                                    </div>
                                    <Select id="countries" required>
                                        <option>Choose Day</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </Select>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Start Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">End Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 mb-4'>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Choose Day*</Label>
                                    </div>
                                    <Select id="countries" required>
                                        <option>Choose Day</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </Select>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Start Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">End Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 mb-4'>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Choose Day*</Label>
                                    </div>
                                    <Select id="countries" required>
                                        <option>Choose Day</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </Select>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Start Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">End Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 mb-4'>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Choose Day*</Label>
                                    </div>
                                    <Select id="countries" required>
                                        <option>Choose Day</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </Select>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Start Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">End Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 mb-4'>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Choose Day*</Label>
                                    </div>
                                    <Select id="countries" required>
                                        <option>Choose Day</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </Select>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Start Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">End Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 mb-4'>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Choose Day*</Label>
                                    </div>
                                    <Select id="countries" required>
                                        <option>Choose Day</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </Select>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Start Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">End Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/12 mt-7'>
                            <button className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[40px] font-medium px-5 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2] flex items-center'><BiCopy className='text-base mr-1' /> copy to all week</button>
                        </div>
                    </div>
                </div>
                <div className='step_content_wraper'>
                    <h3 className='text-[#435971] text-[20px] leading-[30px] mb-3 font-medium'>Break time</h3>
                    <div className='flex gap-4'>
                        <div className='w-10/12 '>
                            <div className='flex gap-4 mb-4'>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Choose Day*</Label>
                                    </div>
                                    <Select id="countries" required>
                                        <option>Choose Day</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </Select>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Start Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">End Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 mb-4'>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Choose Day*</Label>
                                    </div>
                                    <Select id="countries" required>
                                        <option>Choose Day</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </Select>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Start Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">End Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 mb-4'>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Choose Day*</Label>
                                    </div>
                                    <Select id="countries" required>
                                        <option>Choose Day</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </Select>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Start Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">End Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 mb-4'>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Choose Day*</Label>
                                    </div>
                                    <Select id="countries" required>
                                        <option>Choose Day</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </Select>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Start Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">End Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 mb-4'>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Choose Day*</Label>
                                    </div>
                                    <Select id="countries" required>
                                        <option>Choose Day</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </Select>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Start Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">End Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 mb-4'>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Choose Day*</Label>
                                    </div>
                                    <Select id="countries" required>
                                        <option>Choose Day</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </Select>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Start Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">End Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 mb-4'>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Choose Day*</Label>
                                    </div>
                                    <Select id="countries" required>
                                        <option>Choose Day</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </Select>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">Start Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-4/12 step_field">
                                    <div className="mb-1 block">
                                        <Label htmlFor="countries">End Time*</Label>
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className='w-10/12'>
                                            <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                        </div>
                                        <div className='w-2/12'>
                                            <Select id="countries" required>
                                                <option>AM</option>
                                                <option>PM</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/12 mt-7'>
                            <button className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[40px] font-medium px-5 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2] flex items-center'><BiCopy className='text-base mr-1' /> copy to all week</button>
                        </div>
                    </div>
                </div>
                <div className='step_btn_area border-t border-[#EBEEFA] pt-5'>
                    <div className='flex justify-end items-center gap-3'>
                        <button className='bg-[#ffffff] rounded-[6px] text-[#464f60] hover:text-[#ffffff] text-[14px] leading-[43px] font-medium px-6 cursor-pointer hover:bg-[#00806A] border border-[#dddfe2] hover:border-[#00806A]'>Previous Step</button>
                        <button className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[43px] font-medium px-10 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]'>Next Step</button>
                    </div>
                </div>
            </div>
            {/* step three ends here */}

            {/* step four start here */}
            <div className='step_box_one hidden'>
                <div className='step_content_wraper'>
                    <div className="mb-2 block">
                        <Label htmlFor="countries">Languages</Label>
                    </div>
                    <div className='flex gap-6 mb-8'>
                        
                        <div class="flex items-center justify-between px-4 py-2 border-2 border-[#E2E2E2] rounded-lg w-4/12">
                            <div className='flex items-center'>
                                <Image src={french_flag} alt="french_flag" className='mb-0' />
                                <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-base font-medium text-[#000000] dark:text-gray-300">French(FR)</label>
                            </div>
                            <Checkbox id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                        <div class="flex items-center justify-between px-4 py-2 border-2 border-[#E2E2E2] rounded-lg w-4/12">
                            <div className='flex items-center'>
                                <Image src={english_flag} alt="english_flag" className='mb-0' />
                                <label for="bordered-checkbox-2" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">English(EN)</label>
                            </div>
                            <Checkbox id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                        <div class="flex items-center justify-between px-4 py-2 border-2 border-[#E2E2E2] rounded-lg w-4/12">
                            <div className='flex items-center'>
                                <Image src={spanish_flag} alt="spanish_flag" className='mb-0' />
                                <label for="bordered-checkbox-3" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Spanish(ES)</label>
                            </div>
                            <Checkbox id="bordered-checkbox-3" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </div>

                    </div>
                </div>
                <div className='step_btn_area border-t border-[#EBEEFA] pt-5'>
                    <div className='flex justify-end items-center gap-3'>
                        <button className='bg-[#ffffff] rounded-[6px] text-[#464f60] hover:text-[#ffffff] text-[14px] leading-[43px] font-medium  px-6 cursor-pointer hover:bg-[#00806A] border border-[#dddfe2] hover:border-[#00806A]'>Previous Step</button>
                        <button className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[43px] font-medium px-10 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]'>Next Step</button>
                    </div>
                </div>
            </div>
            {/* step four ends here */}

            {/* step five start here */}
            <div className='step_box_one hidden'>
                <div className='step_content_wraper'>
                    <div className='flex gap-4 mb-8'>
                        <div className="w-6/12 step_field">
                            <div className="mb-1 block">
                                <Label htmlFor="countries">Enter Bot Name</Label>
                            </div>
                            <TextInput id="base" type="text" sizing="md" placeholder='Enter Bot Name' />
                        </div>
                        <div className="w-6/12 step_field">
                            <div className="mb-1 block">
                                <Label htmlFor="countries">Bot Welcome Message</Label>
                            </div>
                            <TextInput id="base" type="text" sizing="md" placeholder='"Hi [Name], thanks for contacting [BusinessName]."' />
                        </div>
                    </div>
                    <div className="mb-2 block">
                        <Label htmlFor="countries">Bot Icons</Label>
                    </div>
                    <div className='flex gap-6 mb-8 select_bot_wrap'>

                        <label class="radio-button-label">
                            <input type="radio" name="radio-control" value="lsb" />
                            <Image src={bot01} alt="bot01" className='' />
                        </label>

                        <label class="radio-button-label">
                            <input type="radio" name="radio-control" value="nosb"/>
                            <Image src={bot02} alt="bot02" className='' />
                        </label>

                        <label class="radio-button-label">
                            <input type="radio" name="radio-control" value="rsb" />
                            <Image src={bot03} alt="bot03" className='' />
                        </label>


                    </div>
                </div>
                <div className='step_btn_area border-t border-[#EBEEFA] pt-5'>
                    <div className='flex justify-end items-center gap-3'>
                        <button className='bg-[#ffffff] rounded-[6px] text-[#464f60] hover:text-[#ffffff] text-[14px] leading-[43px] font-medium  px-6 cursor-pointer hover:bg-[#00806A] border border-[#dddfe2] hover:border-[#00806A]'>Previous Step</button>
                        <button className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[43px] font-medium px-10 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]'>Next Step</button>
                    </div>
                </div>
            </div>
            {/* step five ends here */}

            {/* step six start here */}
            <div className='step_box_one hidden'>
                <div className='step_content_wraper'>
                    <div className='mb-8 bg-white p-5 border border-[#929292] rounded-[10px] h-[480px] overflow-scroll overflow-x-hidden'>
                        <Image src={code_img} alt="code_img" className='' />
                    </div>
                </div>
                <div className='step_btn_area border-t border-[#EBEEFA] pt-5'>
                    <div className='flex justify-end items-center gap-3'>
                        <button className='bg-[#ffffff] rounded-[6px] text-[#464f60] hover:text-[#ffffff] text-[14px] leading-[43px] font-medium  px-6 cursor-pointer hover:bg-[#00806A] border border-[#dddfe2] hover:border-[#00806A]'>Previous Step</button>
                        <button className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[43px] font-medium px-8 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]'>Copy Code</button>
                    </div>
                </div>
            </div>
            {/* step six ends here */}
        </div>
    </div>
  )
}

export default page