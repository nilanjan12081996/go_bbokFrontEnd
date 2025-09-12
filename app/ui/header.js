'use client';

import React, { useEffect } from 'react';
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Modal, ModalBody, ModalFooter, ModalHeader, Checkbox, Label, TextInput, Select } from "flowbite-react";
import Link from 'next/link';
import logo from '../assets/imagesource/logo.png';
import Image from 'next/image';

import { useState } from "react";

import { ToastContainer } from 'react-toastify';
import VerifyOtpModal from '../modal/verifyOtpModal';
import LoginModal from '../modal/LoginModal';
import RegistrationModal from '../modal/RegistrationModal';
import PriceListModal from '../modal/PriceListModal';

import { FaArrowRight } from "react-icons/fa6";
import { HiLightningBolt } from "react-icons/hi";
import { getCurrency, getCurrencyOut, getPlans, setSelectedCurrency } from '../reducers/CreateBotSlice';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openVerifyOtpModal, setOpenVerifyOtpModal] = useState(false);
  const [openPricModal, setOpenPriceModal] = useState(false)
    const { selectedCurrency, planList } = useSelector((state) => state.bot);
  const dispatch=useDispatch()
  // For mobile menu start here
  // Add state to manage navbar collapse
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
   const{currencyOut}=useSelector((state)=>state?.bot)

  // Function to toggle navbar
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Function to close navbar when menu item is clicked
  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };
  // For mobile menu ends here
useEffect(()=>{
  dispatch(getCurrencyOut())
},[])

useEffect(() => {
  dispatch(getCurrencyOut()).then((res) => {
    if (res?.payload?.res?.length > 0) {
      // find Euro in the response
      const euroCurrency = res.payload.res.find(
        (cur) => cur.currency_short_name.toUpperCase() === "EUR"
      );
      console.log("euroCurrency",euroCurrency);
      

      if (euroCurrency) {
        dispatch(setSelectedCurrency(euroCurrency.id)); // set Euro by default
      
      
      } else {
        // fallback → if euro not found, set first currency
        dispatch(setSelectedCurrency(res.payload.res[0].id));
        
      }
    }
  });
}, [dispatch]);

 useEffect(() => {
    // Avoid injecting the script multiple times
    if (!document.querySelector("#google-translate-script")) {
      const addScript = document.createElement("script");
      addScript.id = "google-translate-script";
      addScript.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;
      document.body.appendChild(addScript);
    }

    // Only define init once
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        if (!document.querySelector(".skiptranslate")) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,de,fr,es", // choose
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            "google_translate_element"
          );
        }
      };
    }
  }, []);


  return (
    <div>
      <ToastContainer />
      <div className="header_section w-full lg:pb-0 absolute left-0 lg:top-4">
        <div className="max-w-6xl mx-auto pt-2 lg:pt-0 lg:py-5 px-4 lg:px-5 rounded-b-2xl relative z-10">
          <div className="w-full">
            <div className="header_top flex justify-between items-center">
              <div className="flex items-center justify-between">
                {/* Logo area start here */}
                <div className="mr-2 hidden lg:block">
                  <Link href="/" passHref>
                    <Image src={logo} alt='logo' className='  ' />
                  </Link>
                </div>
                <div className="mr-2 lg:hidden">
                  <Link href="/" passHref>
                    <Image src={logo} alt='logo' className='w-[70px]' />
                  </Link>
                </div>
                {/* Logo area ends here */}

              </div>
              {/* Main menu start here */}
              <div className="menu_section pb-0">
                <div className="main_menu">
                  <Navbar fluid rounded className="bg-transparent pt-0 pb-0">
                    <div className="flex md:order-2 text-black toggle_point">
                      <NavbarToggle onClick={toggleNavbar} />
                    </div>
                    <NavbarCollapse className={isNavbarOpen ? 'block' : 'hidden md:block'}>
                      <li onClick={closeNavbar}>
                        <Link href="/" passHref>
                          Home
                        </Link>
                      </li>
                      <li onClick={closeNavbar}>
                        <Link href="/" passHref>
                          How It Works
                        </Link>
                      </li>
                      <li onClick={closeNavbar}>
                        <Link href="/pricing" passHref>
                          Pricing
                        </Link>
                      </li>
                      {/* <li onClick={closeNavbar}>
                        <Link href="/" passHref>
                          Testimonials
                        </Link>
                      </li> */}
                      <li onClick={closeNavbar}>
                        <Link href="/faqs" passHref>
                          FAQ
                        </Link>
                      </li>
                    </NavbarCollapse>
                  </Navbar>
                </div>
              </div>
              {/* Main menu ends here */}
              {/* Login section start here */}
              <div className="mr-10 lg:mr-0 flex items-center mt-0 lg:mt-0">
                <div className="flex gap-2">
                  <div id="google_translate_element" className="ml-4"></div>
                  {/* <button onClick={() => setOpenLoginModal(true)} className="text-[#666666] bg-white cursor-pointer font-medium text-xs lg:text-[16px] rounded-[5px] px-2 py-1 lg:px-6 lg:py-2 border-1 border-[#666666] hover:bg-[#666666] hover:text-[#ffffff]">
                    Login
                  </button>
                  <button onClick={() => setOpenRegisterModal(true)} className="text-white bg-[#00806A] flex items-center cursor-pointer font-medium text-xs lg:text-[16px] rounded-[5px] px-2 py-1 lg:px-6 lg:py-3 border-1 border-[#00806A] hover:bg-white hover:text-[#00806A]">
                    <HiLightningBolt className='text-xl mr-1  ' />
                    Try for Free
                  </button> */}
                  <button onClick={() => setOpenLoginModal(true)} className="text-[#666666] bg-white cursor-pointer font-medium text-xs lg:text-[16px] rounded-[5px] px-2 py-1 lg:px-6 lg:py-2 border-1 border-[#666666] hover:bg-[#666666] hover:text-[#ffffff]">
                    Login
                  </button>
                  <button onClick={() => setOpenRegisterModal(true)} className="text-white bg-[#00806A] flex items-center cursor-pointer font-medium text-xs lg:text-[16px] rounded-[5px] px-2 py-1 lg:px-6 lg:py-2 border-1 border-[#00806A] hover:bg-white hover:text-[#00806A]">
                    <HiLightningBolt className='text-xl mr-1 hidden lg:block' />
                    Try for Free
                  </button>
                  <div className='currency_wrap'>
                    <Select id="countries" onChange={(e) => {
                        dispatch(setSelectedCurrency(e.target.value)); // store currency_id in redux
                        }} required>
                        {/* {
                          language?.data?.map((lan)=>(
                            <option>
                              {lan?.language}
                            </option>
                          ))
                        } */}
                        
                        {
                          currencyOut?.res?.map((cur,curIndex)=>(
                             <option key={curIndex} value={cur?.id}>{cur?.currency_symbol} {cur?.currency_short_name}</option>
                          ))
                        }
                       
                    </Select>
                  </div>
                </div>
              </div>
              {/* Login section ends here */}
            </div>
          </div>

          {/* Login popup start here */}
          <>
            {openLoginModal &&
              <LoginModal
                openLoginModal={openLoginModal}
                setOpenLoginModal={setOpenLoginModal}
                setOpenRegisterModal={setOpenRegisterModal}
              />
            }
          </>
          {/* Login popup ends here */}


          {/* register popup start here */}
          <>
            {openRegisterModal &&
              <RegistrationModal
                openRegisterModal={openRegisterModal}
                setOpenRegisterModal={setOpenRegisterModal}
                openVerifyOtpModal={openVerifyOtpModal}
                setOpenVerifyOtpModal={setOpenVerifyOtpModal}
                setOpenLoginModal={setOpenLoginModal}
                openPricModal={openPricModal}
                setOpenPriceModal={setOpenPriceModal}
              />
            }
          </>
          {/* register popup ends here */}
          {/* {
            openPricModal && (
              <PriceListModal
                openPricModal={openPricModal}
                setOpenPriceModal={setOpenPriceModal}
              />
            )
          } */}
        </div>
      </div>
    </div>
  )
}

export default Header