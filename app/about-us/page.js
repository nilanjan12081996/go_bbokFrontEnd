import Link from 'next/link'
import React from 'react'

import aboutBanner from "../assets/imagesource/about_banner.png";
import bannerImg from "../assets/imagesource/banner_img.png";
import About_us from "../assets/imagesource/About_us.png";
import how_it_works_img from "../assets/imagesource/how_it_works_img.png";
import How_it_works from "../assets/imagesource/How_it_works.png";
import banner01 from "../assets/imagesource/banner01.png";
import Image from 'next/image';

const page = () => {
  return (
    <div>
      <div className='banner_area p-4 lg:p-0'>
        {/* home banner section start here */}
        <div className="home_banner_area relative">
          <Image src={aboutBanner} alt='aboutBanner' className="hidden lg:block" />
          <Image src={bannerImg} alt='bannerImg' className="block lg:hidden" />
          <div className="banner_content_area absolute w-full h-full left-0 top-0">
           <div className='max-w-6xl mx-auto flex justify-center items-center h-full'>
               <div className="w-full px-4 pt-14 lg:pt-24 text-center">
                  <h1 className="text-xl leading-[24px] lg:text-[60px] lg:leading-[60px] text-black font-bold mb-2 lg:mb-4">About Us</h1>
               </div>
           </div>
        </div>
        </div>
      </div>
      {/* Why Choose Us section start here */}
      <div className="about_section">
        <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
          <div className="lg:flex mb-28">
            <div className="lg:w-6/12 mb-4 lg:mb-0">
              <Image src={banner01} alt='banner01' className="" />
            </div>
            <div className="lg:w-6/12 lg:pl-10 flex justify-center items-center">
              <div>
                <p className="text-[#69697B] font-medium text-sm leading-[24px] lg:text-base lg:leading-[26px] pb-4">
                  GoBook is a simple WhatsApp booking and reminder solution, designed to help small businesses (salons, clinics, gyms, etc.) save time and reduce no-shows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us section ends here */}
    </div>
  )
}

export default page