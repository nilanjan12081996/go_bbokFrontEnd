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
;
import { toast, ToastContainer } from 'react-toastify';


import { useForm } from 'react-hook-form';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import StepSix from './StepSix';

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
      const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

   const [show, setShow] = useState({
    StepOne: true, // AddProduct is the first step
    StepTwo: false,
    StepThree: false,
    StepFour: false,
    StepFive: false,
    StepSix: false,
  });
  const[industryId,setIndustryId]=useState()
  const[businessId,setBusinessId]=useState()
  const[languageId,setLanguageId]=useState()
  const [code,setCode]=useState()
  const isStepActive = (stepNumber) => {
    if (show.StepOne && stepNumber <= 1) return true;
    if (show.StepTwo && stepNumber <= 2) return true;
    if (show.StepThree && stepNumber <= 3) return true;
    if (show.StepFour && stepNumber <= 4) return true;
    if (show.StepFive && stepNumber <= 5) return true;
    if (show.StepSix && stepNumber <= 6) return true;
    return false;
  };
 
  
  return (
    <div className={`${poppins.className} antialiased`}>
        <ToastContainer/>
        <div className='pt-6 lg:pt-0 mb-6'>
         
            <h3 className='text-[22px] leading-[22px] text-black font-medium pb-4'>Create bot</h3>
            <p className='text-[13px] leading-[22px] text-[#747577] font-normal pb-0'>Easily organize, update, and control all your services in one place.</p>
        </div>
        <div className='bg-white rounded-[10px] p-4 lg:p-10'>
            <div className='step_wraper lg:w-10/12 mx-auto pb-8 lg:pb-16'>
                <ul className='flex items-center justify-between'>
                    <li className='text-center relative z-20'>
                        <div className='number_box active_step inline-flex bg-[#EBEBEB] w-[40px] h-[40px] rounded-[50px] text-[#585858] text-[16px] leading-[40px] font-medium items-center justify-center mb-2'>1</div>
                        <p className='step_laber_box text-[#8F8F8F] text-xs lg:text-base font-medium'>Step 1</p>
                    </li>
                    <li className='text-center relative z-20'>
                        <div className={`number_box active_step_two ${isStepActive(2)?"active_step":""} inline-flex bg-[#EBEBEB] w-[40px] h-[40px] rounded-[50px] text-[#585858] text-[16px] leading-[40px] font-medium items-center justify-center mb-2`}>2</div>
                        <p className='step_laber_box text-[#8F8F8F] text-xs lg:text-base font-medium'>Step 2</p>
                    </li>
                    <li className='text-center relative z-20'>
                        <div className={`number_box active_step_three ${isStepActive(3)?"active_step":""} inline-flex bg-[#EBEBEB] w-[40px] h-[40px] rounded-[50px] text-[#585858] text-[16px] leading-[40px] font-medium items-center justify-center mb-2`}>3</div>
                        <p className='step_laber_box text-[#8F8F8F] text-xs lg:text-base font-medium'>Step 3</p>
                    </li>
                    <li className='text-center relative z-20'>
                        <div className={`number_box active_step_four ${isStepActive(4)?"active_step":""} inline-flex bg-[#EBEBEB] w-[40px] h-[40px] rounded-[50px] text-[#585858] text-[16px] leading-[40px] font-medium items-center justify-center mb-2`}>4</div>
                        <p className='step_laber_box text-[#8F8F8F] text-xs lg:text-base font-medium'>Step 4</p>
                    </li>
                    <li className='text-center relative z-20'>
                        <div className={`number_box active_step_five ${isStepActive(5)?"active_step":""} inline-flex bg-[#EBEBEB] w-[40px] h-[40px] rounded-[50px] text-[#585858] text-[16px] leading-[40px] font-medium items-center justify-center mb-2`}>5</div>
                        <p className='step_laber_box text-[#8F8F8F] text-xs lg:text-base font-medium'>Step 5</p>
                    </li>
                    <li className='text-center relative z-20'>
                        <div className={`number_box active_step_six ${isStepActive(6)?"active_step":""} inline-flex bg-[#EBEBEB] w-[40px] h-[40px] rounded-[50px] text-[#585858] text-[16px] leading-[40px] font-medium items-center justify-center mb-2`}>6</div>
                        <p className='step_laber_box text-[#8F8F8F] text-xs lg:text-base font-medium'>Step 6</p>
                    </li>
                </ul>
            </div>
            {/* step one start here */}
          
            {show.StepOne && <StepOne setShow={setShow} industryId={industryId} setIndustryId={setIndustryId} setBusinessId={setBusinessId}/>}
            {/* step one ends here */}

            {/* step two start here */}
         
            {show.StepTwo && <StepTwo setShow={setShow} industryId={industryId} businessId={businessId}/>}
            {/* step two ends here */}

            {/* step three start here */}
          
              {show.StepThree && (
            <StepThree setShow={setShow} industryId={industryId}/>
                )}
            {/* step three ends here */}
            {/* step four start here */}
              {show.StepFour && (
          <StepFour setShow={setShow}
          setLanguageId={setLanguageId}
          />
        )}
            {/* step four ends here */}

            {/* step five start here */}
         
               {show.StepFive && (
          <StepFive
            setShow={setShow}
            languageId={languageId}
            industryId={industryId}
            setCode={setCode}
            
          />
        )}
            {/* step five ends here */}

            {/* step six start here */}
        
            {show.StepSix && <StepSix setShow={setShow} code={code}/>}
            {/* step six ends here */}
        </div>
    </div>
  )
}

export default page