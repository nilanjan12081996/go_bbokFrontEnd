'use client';

import React from 'react'

import { Roboto } from 'next/font/google';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa6";

import footerLogo from "../assets/imagesource/footer_logo.png";
import Image from 'next/image';

import { ImLocation } from "react-icons/im";
import Script from 'next/script';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['700'], // optional: define font weights
  variable: '--font-roboto', // optional: for CSS variables
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const Footer = () => {
  return (
    <div className='footer_area'>
                              {/* <Script

    src="https://gobookapinew.bestworks.cloud/bot-widget.js" 

    data-company="MQ=="/> */}
{/* </Script>  */}
      <div className='footer_top lg:py-14 py-10 px-6 lg:px-0'>
        <div className='max-w-6xl mx-auto'>
          <div className='footer_top_container pb-8'>
            <div className='lg:flex'>
              <div className='lg:w-5/12 lg:pr-20 mb-4 lg:mb-0 text-center lg:text-left'>
                 <Image src={footerLogo} alt='footerLogo' className='inline-block mb-6' />
                 <p className='text-sm leading-[24px] text-white font-medium'>
                  GoBook is a simple WhatsApp booking and reminder solution, designed to help small businesses (salons, clinics, gyms, etc.) save time and reduce no-shows. 
                  </p>
              </div>
              <div className='lg:w-7/12'>
                <div className='lg:flex'>
                  <div className='lg:w-6/12 text-left'>
                     <h3 className='text-[20px] leading-[24px] text-white font-semibold mb-6'>Need help?</h3>
                     <p className='text-sm leading-[24px] text-white hover:text-[#00806A] font-medium mb-3 inline-block'>contact us via WhatsApp or by email at support@gobook.fr</p>
                  </div>
                   
                   <div className='lg:w-6/12 text-center lg:text-left'>
                     <h3 className='text-[20px] leading-[24px] text-white font-semibold mb-6'>Contact Us</h3>
                     <p className='text-sm leading-[24px] text-white font-medium mb-3 inline-block'>WhatsApp: +33 681566495</p>
                     <p className='text-sm leading-[24px] text-white font-medium mb-3 inline-block'>Email: support@gobook.fr</p>
                     <p className='text-sm leading-[24px] text-white font-medium mb-3 inline-block'>Address: 60 Rue François 1er, 75008 Paris, France</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer_bottom_box border-t border-[#FFFFFF] pt-6 lg:flex justify-between items-center'>
            <div className='mb-4 lg:mb-0 text-center lg:text-left'>
              <p className='text-[12px] leading-[24px] text-white'>Copyright © 2025 GoBook. All rights reserved.</p>
            </div>
            <div>
               <ul className='flex justify-center items-center gap-4'>
                  <li>
                    <Link href="/" passHref>
                      <FaFacebookF className='text-[#ffffff] hover:text-[#0866ff] text-xl mr-1' />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" passHref>
                      <BsTwitterX className='text-[#ffffff] hover:text-[#ffffff] text-xl mr-1' />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" passHref>
                      <GrInstagram className='text-[#ffffff] hover:text-[#ff008b] text-xl mr-1' />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" passHref>
                      <FaYoutube className='text-[#ffffff] hover:text-[#ff0033] text-xl mr-1' />
                    </Link>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default Footer