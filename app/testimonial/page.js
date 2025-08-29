'use client';

import React from 'react'

import Slider from "react-slick";

import testi_face from "../assets/imagesource/testi_face.png";
import quote_icon from "../assets/imagesource/quote_icon.png";
import rating_icon from "../assets/imagesource/rating_icon.png";
import photo from "../assets/imagesource/Photo.png";
import photo2 from "../assets/imagesource/Photo2.png";
import Photo3 from "../assets/imagesource/Photo3.png";
import Image from 'next/image';

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true  ,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows:false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
  };
  return (
    <div>
        <Slider {...settings}>
            <div className='px-3 pb-4'>
                <div className='bg-white rounded-[20px] p-6 shadow-lg text-left'>
                    <div className='flex justify-between items-center mb-5'>
                        <div className='flex gap-2 items-center justify-center'>
                            <div><Image src={photo} alt='photo' className='w-[63px] h-[63px] rounded-[100px]' /></div>
                            <div>
                                <p className='text-[20px] leading-[30px] text-[#0C0819] font-extrabold mb-0'>Jane Cooper</p>
                                <p className='text-[18px] leading-[30px] text-[#140153] font-medium mb-0'>Marketing Coordinator</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-[13px] leading-[20px] text-[#0C0819]'>Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison 
                            to combat diseases…and it was...</p>
                    </div>
                </div>
            </div>
            <div className='px-3 pb-4'>
                <div className='bg-white rounded-[20px] p-6 shadow-lg text-left'>
                    <div className='flex justify-between items-center mb-5'>
                        <div className='flex gap-2 items-center justify-center'>
                            <div><Image src={Photo3} alt='Photo3s' className='w-[63px] h-[63px] rounded-[100px]' /></div>
                            <div>
                                <p className='text-[20px] leading-[30px] text-[#0C0819] font-extrabold mb-0'>Cameron Williamson</p>
                                <p className='text-[18px] leading-[30px] text-[#140153] font-medium mb-0'>Nursing Assistant</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-[13px] leading-[20px] text-[#0C0819]'>However rare side effects observed among children can be metabolic acidosis, coma, respiratory depression, and hypoglycemia-</p>
                    </div>
                </div>
            </div>
            <div className='px-3 pb-4'>
                <div className='bg-white rounded-[20px] p-6 shadow-lg text-left'>
                    <div className='flex justify-between items-center mb-5'>
                        <div className='flex gap-2 items-center justify-center'>
                            <div><Image src={photo2} alt='photo2' className='w-[63px] h-[63px] rounded-[100px]' /></div>
                            <div>
                                <p className='text-[20px] leading-[30px] text-[#0C0819] font-extrabold mb-0'>Robert Fox</p>
                                <p className='text-[18px] leading-[30px] text-[#140153] font-medium mb-0'>Dog Trainer</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-[13px] leading-[20px] text-[#0C0819]'>Twenty 30-second applications within half an hour is well in excess of almost anyone’s use of a sanitizer.</p>
                    </div>
                </div>
            </div>
            <div className='px-3 pb-4'>
                <div className='bg-white rounded-[20px] p-6 shadow-lg text-left'>
                    <div className='flex justify-between items-center mb-5'>
                        <div className='flex gap-2 items-center justify-center'>
                            <div><Image src={testi_face} alt='testi_face' className='w-[63px] h-[63px] rounded-[100px]' /></div>
                            <div>
                                <p className='text-[20px] leading-[30px] text-[#0C0819] font-extrabold mb-0'>Jane Cooper</p>
                                <p className='text-[18px] leading-[30px] text-[#140153] font-medium mb-0'>Marketing Coordinator</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-[13px] leading-[20px] text-[#0C0819]'>Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison 
                            to combat diseases…and it was...</p>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
  )
}

export default Testimonial