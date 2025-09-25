'use client';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import aboutBanner from "../assets/imagesource/about_banner.png";
import bannerImg from "../assets/imagesource/banner_img.png";
import Image from 'next/image';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

import LoginModal from '../modal/LoginModal';
import { IoCheckmark } from 'react-icons/io5';
import { getPlans } from '../reducers/CreateBotSlice';
import { MdOutlineCancel } from 'react-icons/md';

const page = () => {
    const { selectedCurrency, planList } = useSelector((state) => state.bot);
   
   const dispatch = useDispatch()
   const [openLoginModal, setOpenLoginModal] = useState(false);
   const hanleloginModal = () => {
      setOpenLoginModal(true)
   }

    useEffect(() => {
      if (selectedCurrency) {
        dispatch(getPlans({currency_id:selectedCurrency}));
      }
    }, [selectedCurrency]);
   return (
      <div>
         <div className='banner_area p-0 lg:p-0'>
            {/* home banner section start here */}
            <div className="home_banner_area relative">
               <Image src={aboutBanner} alt='aboutBanner' className="hidden lg:block" />
               <Image src={bannerImg} alt='bannerImg' className="block lg:hidden" />
               <div className="banner_content_area absolute w-full h-full left-0 top-0">
                  <div className='max-w-6xl mx-auto flex justify-center items-center h-full'>
                     <div className="w-full px-4 pt-14 lg:pt-24 text-left lg:text-center">
                        <h1 className="text-[22px] leading-[24px] lg:text-[60px] lg:leading-[60px] text-black font-bold mb-2 lg:mb-4 pl-2 lg:pl-0">Pricing</h1>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Plan section ends here */}
         {/* <div className="plan_sec py-10 px-5 lg:px-0 lg:py-20">
            <div className='max-w-6xl mx-auto'>
               <div className="relative text-center mb-12">
                  <h2 className="text-[#000000] text-[27px] leading-[37px] lg:text-[50px] lg:leading-[57px] font-medium pb-2 lg:pb-6">Flexible plans for <span>every need</span></h2>
                  <p className="text-[#000000] text-base lg:text-[20px] lg:leading-[20px] font-normal">Choose a plan that’s right for you</p>
               </div>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:w-8/12 mx-auto">
                  <div className="rounded-[12px] px-6 py-10 border border-[#C9C9C9]">
                     <h3 className="text-[#191d23] text-[22px] leading-[22px] font-bold pb-4">Free</h3>
                     <p className="text-[16px] leading-[22px] text-[#95a0af] pb-3 font-normal">Perfect for individuals and small businesses to start using a WhatsApp chatbot at no cost.</p>
                     <h4 className="text-[56px] text-[#191d23] pb-3 font-medium">€0<span className="text-[#4b5768] text-base font-light">/ Month</span></h4>
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
         </div> */}

          <div className="plan_sec py-10 px-5 lg:px-0 lg:py-20">
            <div className='max-w-6xl mx-auto'>
               <div className="relative text-center mb-12">
                  <h2 className="text-[#000000] text-[27px] leading-[37px] lg:text-[50px] lg:leading-[57px] font-medium pb-2 lg:pb-6">Flexible plans for <span>every need</span></h2>
                  <p className="text-[#000000] text-base lg:text-[20px] lg:leading-[20px] font-normal">Choose a plan that’s right for you</p>
               </div>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:w-8/12 mx-auto">
               {
                  planList?.res?.map((plans,index)=>(
                        index%2==0?(
                           <div className="rounded-[12px] px-6 py-10 border border-[#C9C9C9]">
                     <h3 className="text-[#191d23] text-[22px] leading-[22px] font-bold pb-4">{plans?.plan_name}</h3>
                     <p className="text-[16px] leading-[22px] text-[#95a0af] pb-3 font-normal">{plans?.PlanAccess?.[0]?.plan_access_description}</p>
                     <h4 className="text-[56px] text-[#191d23] pb-3 font-medium">{plans?.Price?.[0]?.Currency?.currency_symbol}{plans?.Price?.[0]?.price}<span className="text-[#4b5768] text-base font-light">{plans?.plan_frequency ===1?"/ Month":`/ ${plans?.plan_frequency} Months`} </span></h4>
                     <button onClick={() => hanleloginModal()} className="bg-white hover:bg-[#024E41] text-[#024E41] hover:text-white text-base leading-[44px] font-semibold border-2 w-full cursor-pointer border-[#024E41] rounded-[4px]">Get Started Now</button>
                     <div className="mt-8">
                        <ul>
                           <li className="flex items-center gap-3 mb-3">
                              <div className="w-[32px] h-[32px] rounded-[100px] bg-[#e8edfb] flex items-center justify-center">
                                <IoCheckmark className="text-[#024e41]" />
                              </div>
                              {/* <p className="text-[16px] text-[#191d23]">{plans?.PlanAccess?.[0]?.total_count} {plans?.PlanAccess?.[0]?.plan_access_name}</p> */}
                              <p className="text-[16px] text-[#191d23]">Number of appointments: Limited (20 per month)</p>
                             
                           </li>
                             <li className="flex items-center gap-3 mb-3">
                              <div className="w-[32px] h-[32px] rounded-[100px] bg-[#e8edfb] flex items-center justify-center">
                                <MdOutlineCancel className="text-[#f00e0e]" />
                              </div>
                              {/* <p className="text-[16px] text-[#191d23]">{plans?.PlanAccess?.[0]?.total_count} {plans?.PlanAccess?.[0]?.plan_access_name}</p> */}
                              <p className="text-[16px] text-[#191d23]">Automatic reminders (WhatsApp/SMS/email)</p>
                             
                           </li>

                             <li className="flex items-center gap-3 mb-3">
                              <div className="w-[32px] h-[32px] rounded-[100px] bg-[#e8edfb] flex items-center justify-center">
                                <MdOutlineCancel className="text-[#f00e0e]" />
                              </div>
                              {/* <p className="text-[16px] text-[#191d23]">{plans?.PlanAccess?.[0]?.total_count} {plans?.PlanAccess?.[0]?.plan_access_name}</p> */}
                              <p className="text-[16px] text-[#191d23]">Advanced customization</p>
                           </li>

                           <li className="flex items-center gap-3 mb-3">
                              <div className="w-[32px] h-[32px] rounded-[100px] bg-[#e8edfb] flex items-center justify-center">
                                <MdOutlineCancel className="text-[#f00e0e]" />
                              </div>
                              {/* <p className="text-[16px] text-[#191d23]">{plans?.PlanAccess?.[0]?.total_count} {plans?.PlanAccess?.[0]?.plan_access_name}</p> */}
                              <p className="text-[16px] text-[#191d23]">Priority support</p>
                           </li>
                          
                        </ul>
                     </div>
                  </div>
                        ):(
                     <div className="rounded-[12px] px-6 py-10 border border-[#024E41] bg-[#024E41]">
                     <h3 className="text-[#ffffff] text-[22px] leading-[22px] font-bold pb-4">{plans?.plan_name}</h3>
                     <p className="text-[16px] leading-[22px] text-[#ffffff] pb-3 font-normal">{plans?.PlanAccess?.[0]?.plan_access_description}</p>
                     <h4 className="text-[56px] text-[#ffffff] pb-3 font-medium">{plans?.Price?.[0]?.Currency?.currency_symbol}{plans?.Price?.[0]?.price}<span className="text-[#ffffff] text-base font-light">{plans?.plan_frequency ===1?"/ Month":`/ ${plans?.plan_frequency} Months`}</span></h4>
                     <button onClick={() => hanleloginModal()} className="bg-white hover:bg-[#000000] text-[#024E41] hover:text-white text-base leading-[44px] font-semibold border-2 w-full cursor-pointer border-[#024E41] rounded-[4px]">Get Started Now</button>
                     <div className="mt-8">
                        <ul>
                           <li className="flex items-center gap-3 mb-3">
                              <div className="w-[32px] h-[32px] rounded-[100px] bg-[#e8edfb] flex items-center justify-center">
                                <IoCheckmark className="text-[#024e41]" />
                              </div>
                              <p className="text-[16px] text-[#ffffff]">Number of appointments: Unlimited</p>
                           </li>

                              <li className="flex items-center gap-3 mb-3">
                              <div className="w-[32px] h-[32px] rounded-[100px] bg-[#e8edfb] flex items-center justify-center">
                                <IoCheckmark className="text-[#024e41]" />
                              </div>
                              <p className="text-[16px] text-[#ffffff]">Automatic reminders (WhatsApp/SMS/email)</p>
                           </li>
                              <li className="flex items-center gap-3 mb-3">
                              <div className="w-[32px] h-[32px] rounded-[100px] bg-[#e8edfb] flex items-center justify-center">
                                <IoCheckmark className="text-[#024e41]" />
                              </div>
                              <p className="text-[16px] text-[#ffffff]">Advanced customization</p>
                           </li>
                              <li className="flex items-center gap-3 mb-3">
                              <div className="w-[32px] h-[32px] rounded-[100px] bg-[#e8edfb] flex items-center justify-center">
                                <IoCheckmark className="text-[#024e41]" />
                              </div>
                              <p className="text-[16px] text-[#ffffff]">Priority support</p>
                           </li>
                        </ul>
                     </div>
                  </div>
                
                        )
                  ))
               }
                  
                 
               </div>
            </div>
         </div>
         {/* Plan section ends here */}


         {openLoginModal &&
            <LoginModal
               openLoginModal={openLoginModal}
               setOpenLoginModal={setOpenLoginModal}
            />
         }
      </div>
   )
}

export default page