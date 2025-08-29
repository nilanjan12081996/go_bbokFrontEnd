'use client';

import Image from "next/image";

import bannerImg from "../app/assets/imagesource/banner_img.png";
import banner01 from "../app/assets/imagesource/banner01.png";
import howItWorksImg from "../app/assets/imagesource/how_it_works_img.png";

import bitCoinIcon from "../app/assets/imagesource/bit_coin_icon.png";
import etherum_icon from "../app/assets/imagesource/etherum_icon.png";
import x_coins_icon from "../app/assets/imagesource/x_coins_icon.png";
import Tether_icon from "../app/assets/imagesource/Tether_icon.png";
import bn_binance_coin_icon from "../app/assets/imagesource/bn_binance_coin_icon.png";
import solana_coin from "../app/assets/imagesource/solana_coin.png";
import usdc_icon from "../app/assets/imagesource/usdc_icon.png";
import Create_New_Resume_icon from "../app/assets/imagesource/Create_New_Resume_icon.png";
import ResumeTemplates_icon from "../app/assets/imagesource/ResumeTemplates_icon.png";
import sub01 from "../app/assets/imagesource/sub01.png";
import sub02 from "../app/assets/imagesource/sub02.png";
import Check from "../app/assets/imagesource/Check.png";
import hiring_icon from "../app/assets/imagesource/hiring_icon.png";
import check_point from "../app/assets/imagesource/check_point.png";

import marketing_img from "../app/assets/imagesource/marketing_img.png";
import sales_img from "../app/assets/imagesource/sales_img.png";
import customer_support_img from "../app/assets/imagesource/customer_support_img.png";
import doctor_img from "../app/assets/imagesource/doctor_img.png";
import multilingual_support_img from "../app/assets/imagesource/multilingual_support_img.png";
import coaching_classes_img from "../app/assets/imagesource/coaching_classes_img.png";
import made_easy_img from "../app/assets/imagesource/made_easy_img.png";
import Isolation_Mode from "../app/assets/imagesource/Isolation_Mode.png";


import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

import Link from "next/link";

import { Poppins } from 'next/font/google';
import { Bricolage_Grotesque } from "next/font/google";
import Testimonial from "./testimonial/page";

import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5"
import { IoMdSave } from "react-icons/io";
import { MdTipsAndUpdates } from "react-icons/md";
import { SlCloudUpload } from "react-icons/sl";
import { TiDocumentText } from "react-icons/ti";
import { GrSettingsOption } from "react-icons/gr";

import { HiLightningBolt } from "react-icons/hi";
import { IoCheckmark } from "react-icons/io5";
import { MdClose } from "react-icons/md";


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Button, Select, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPlans } from "./reducers/PlanSlice";
import { features } from "process";
import { getCoins } from "./reducers/CoinSlice";
import { useRouter } from "next/navigation";
import LoginModal from "./modal/LoginModal";
import TradingCoinList from "./TradingCoinList";
import FreeResumeTemplates from "./FreeResumeTemplates/page";




const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'], // specify desired weights
   display: 'swap',
});

// Load font with desired weights & subsets
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"], // required
  weight: ["400", "500", "700"], // choose the weights you need
  variable: "--font-bricolage", // optional (for CSS variables)
});


export default function Home() {
   const { plans } = useSelector((state) => state?.planst)
   const { coins } = useSelector((state) => state?.coinData)
   const dispatch = useDispatch()
   const [searchTerm, setSearchTerm] = useState("");
   const [selectedCurrency, setSelectedCurrency] = useState('USD');
   const [selectedCoin, setSelectedCoin] = useState('');
   const [selectedCoinSymbol, setSelectedCoinSymbol] = useState('');
   const [showDropdown, setShowDropdown] = useState(false);
   const router = useRouter();
   const [openLoginModal, setOpenLoginModal] = useState(false);

   const hanleloginModal = () => {
      setOpenLoginModal(true)
   }


   useEffect(() => {
      dispatch(getPlans())
   }, [])
   console.log("plan", plans);
   useEffect(() => {
      dispatch(getCoins())
   }, [])
   console.log("coinsd", coins)
   // const coinItems = coins?.coins?.map((coin) => coin.item) || [];

   // // Your filtering logic looks correct
   // const filteredCoins = coinItems.filter((coin) =>
   //    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
   // );

   const coinItems = Array.isArray(coins?.coins)
      ? coins.coins.map((coin) => coin.item).filter(Boolean)
      : [];

   // Filter coins based on search term
   const filteredCoins = coinItems.filter((coin) =>
      coin?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin?.symbol?.toLowerCase().includes(searchTerm.toLowerCase())
   );


   const handleCoinSelect = (coin) => {
      console.log(coin, "coin");

      setSelectedCoin(coin.name);
      setSelectedCoinSymbol(coin.symbol.toLowerCase());
      // setSearchTerm(''); // Clear search after selection
      setSearchTerm(coin.name);
      setShowDropdown(false);

   };
   // const handleTryForFree = async () => {
   //    console.log("select currency", selectedCoinSymbol);
   //    console.log("select coin symbol", selectedCoinSymbol);
   //    // router.push("/details")

   //    router.push({
   //       pathname: '/details',
   //       query: {
   //          coin: selectedCoinSymbol,
   //          currency: selectedCurrency
   //       }
   //    });



   // };
   useEffect(() => {
      console.log("currency", selectedCurrency);
   }, [selectedCurrency])


   return (
      <div className={`${poppins.variable} ${bricolage.variable} antialiased home_wrapper_arera`}>

         {/* home banner section start here */}
         <div className="home_banner_area relative">
            <div className="banner_content_area w-full h-full pt-40 pb-20">
               <div className='max-w-6xl mx-auto lg:flex justify-center items-center h-full'>
                  <div className="lg:w-6/12 px-4 pt-24">
                     <h1 className="text-2xl leading-[30px] lg:text-[55px] lg:leading-[60px] text-black font-medium mb-2 lg:mb-4">Elevate Booking Experiences With <span>WhatsApp AI Agents</span></h1>
                     <p className="text-[#686666] text-sm lg:text-[18px] leading-[28px] mb-5 lg:mb-6">
                        Empower your business with smart, responsive AI agents that elevate every customer conversation.
                     </p>
                     <button onClick={() => setOpenRegisterModal(true)} className="text-white bg-[#00806A] flex items-center cursor-pointer font-medium text-xs lg:text-[16px] rounded-[5px] px-2 py-1 lg:px-6 lg:py-3 border-1 border-[#00806A] hover:bg-white hover:text-[#00806A]">
                        <HiLightningBolt className='text-xl mr-1  ' />
                        Build Your Agent Free
                     </button>
                  </div>
                  <div className="lg:w-6/12 relative">
                     <Image src={banner01} alt='banner01' className='w-full lg:mb-[0] absolute right-0 bottom-[-289px]' />
                  </div>
               </div>
            </div>
         </div>
         {/* home banner section ends here */}

         {/* Smart Bots section start here */}
         <div className="smart_bots_sec py-20">
            <div className='max-w-6xl mx-auto'>
                <div className="w-10/12 mx-auto mb-10 text-center">
                  <h2 className="text-[#000000] text-[50px] leading-[64px] pb-4 font-medium">Smart Bots Handling Customer Journeys for <span>Your Business Efficiency</span></h2>
                  <p className="text-[#686666] text-[18px] leading-[29px] px-28">Your bots do the manual work, so you don&apos;t have to Save time for your teams and cut operating costs automating conversations across the entire customer journey.</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                   <div className="text-center">
                     <Image src={marketing_img} alt='marketing_img' className='inline-block' />
                     <h3 className="text-[24px] leading-[54px] text-black mb-0 font-medium">Generate 3x more leads</h3>
                     <p className="text-[#686666] text-[14px] leading-[24px]">Make lead generation a two-way street with engaging, human-like conversations.</p>
                   </div>
                   <div className="text-center">
                     <Image src={sales_img} alt='sales_img' className='inline-block' />
                     <h3 className="text-[24px] leading-[54px] text-black mb-0 font-medium">10x Booking appointments</h3>
                     <p className="text-[#686666] text-[14px] leading-[24px]">Increase meetings and show rates with leads who have high interest and buying intent.</p>
                   </div>
                   <div className="text-center">
                     <Image src={customer_support_img} alt='customer_support_img' className='inline-block' />
                     <h3 className="text-[24px] leading-[54px] text-black mb-0 font-medium">Provide 24/7 assistance</h3>
                     <p className="text-[#686666] text-[14px] leading-[24px]">Delight customers, combining bots and human agents for fast, friendly response times.</p>
                   </div>
                </div>
            </div>
         </div>
         {/* Smart Bots section ends here */}


         {/* Key Features section start here */}
         <div className="key_features_sec py-20">
            <div className='max-w-6xl mx-auto'>
               <h2 className="text-[#000000] text-[50px] leading-[64px] font-medium text-center pb-12">Key Features</h2>
               <div className="flex gap-8 mb-8">
                  <div className="bg-white rounded-[20px] shadow-xl overflow-hidden w-8/12">
                    <Image src={doctor_img} alt='doctor_img' className='inline-block w-full' />
                    <div className="px-8 py-10">
                       <h3 className="text-[#001C41] text-[18px] leading-[24px] font-semibold pb-4">Real-Time Doctor Appointment Booking Made Easy</h3>
                       <p className="text-[#747577] text-[13px] leading-[21px] font-normal">Enable patients to instantly book, reschedule, or inquire about doctor availability and services—all directly through WhatsApp. 
                        Simplify scheduling and reduce your clinic’s administrative workload with seamless AI-powered conversations.</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-[20px] shadow-xl overflow-hidden w-4/12">
                    <Image src={multilingual_support_img} alt='multilingual_support_img' className='inline-block w-full' />
                    <div className="px-8 py-10">
                       <h3 className="text-[#001C41] text-[18px] leading-[24px] font-semibold pb-4">Multilingual support</h3>
                       <p className="text-[#747577] text-[13px] leading-[21px] font-normal">AI Chatbots break language barriers with built-in multilingual support, 
                        detecting user preferences and switching languages seamlessly to ensure global accessibility and comfortable interactions.</p>
                    </div>
                  </div>
               </div>
               <div className="flex gap-8 mb-6">
                  <div className="bg-white rounded-[20px] shadow-xl overflow-hidden w-4/12">
                    <Image src={coaching_classes_img} alt='coaching_classes_img' className='inline-block w-full' />
                    <div className="px-8 py-10">
                       <h3 className="text-[#001C41] text-[18px] leading-[24px] font-semibold pb-4">Tutors & Coaching Classes</h3>
                       <p className="text-[#747577] text-[13px] leading-[21px] font-normal">A WhatsApp chatbot for tutors and coaching classes makes student scheduling simple, fast, and 
                        hassle-free. Instead of calling or visiting in person, students (and parents) can directly book sessions through WhatsApp</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-[20px] shadow-xl overflow-hidden w-8/12">
                    <Image src={made_easy_img} alt='made_easy_img' className='inline-block w-full' />
                    <div className="px-8 py-10">
                       <h3 className="text-[#001C41] text-[18px] leading-[24px] font-semibold pb-4">Real-Time Restaurant Reservation Made Easy</h3>
                       <p className="text-[#747577] text-[13px] leading-[21px] font-normal">Allow guests to instantly book, modify, or inquire about table availability and 
                        dining options—all seamlessly through WhatsApp. Enhance your restaurant’s efficiency and guest experience with AI-powered real-time booking and management.</p>
                    </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Key Features section ends here */}


         {/* client Say section ends here */}
         <div className="client_say_sec bg-[#024E41] py-20">
            <div className='max-w-6xl mx-auto'>
               <div className="w-5/12 relative mb-10">
                  <h2 className="text-[#ffffff] text-[50px] leading-[57px] font-medium pb-0">What our client’s Say!</h2>
                  <Image src={Isolation_Mode} alt='Isolation_Mode' className='absolute right-[25px] bottom-[-15px]' />
               </div>
               <Testimonial/>
            </div>
         </div>
         {/* client Say section ends here */}


         {/* Plan section ends here */}
         <div className="plan_sec py-20">
            <div className='max-w-6xl mx-auto'>
               <div className="relative text-center mb-12">
                  <h2 className="text-[#000000] text-[50px] leading-[57px] font-medium pb-6">Flexible plans for <span>every need</span></h2>
                  <p className="text-[#000000] text-[20px] leading-[20px] font-normal">Choose a plan that’s right for you</p>
               </div>
               <div className="grid grid-cols-2 gap-6 w-8/12 mx-auto">
                  <div className="rounded-[12px] px-6 py-10 border border-[#C9C9C9]">
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
         </div>
         {/* Plan section ends here */}

         {openLoginModal &&
            <LoginModal
               openLoginModal={openLoginModal}
               setOpenLoginModal={setOpenLoginModal}
            />
         }
      </div>

   );
}
