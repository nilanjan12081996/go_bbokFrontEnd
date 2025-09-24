import Link from 'next/link'
import React from 'react'

import aboutBanner from "../assets/imagesource/about_banner.png";
import bannerImg from "../assets/imagesource/banner_img.png";
import About_us from "../assets/imagesource/About_us.png";
import Image from 'next/image';

import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

const page = () => {
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
                  <h1 className="text-[22px] leading-[24px] lg:text-[60px] lg:leading-[60px] text-black font-bold mb-2 lg:mb-4 pl-2 lg:pl-0">FAQs</h1>
               </div>
           </div>
        </div>
        </div>
      </div>
            {/* Why Choose Us section start here */}
      <div className="about_section">
        <div className="accordian_section max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
          <Accordion>
            <AccordionPanel>
                <AccordionTitle>What is GoBook?</AccordionTitle>
                <AccordionContent className="accodian_cont">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        GoBook is a SaaS platform that allows businesses to create their own WhatsApp bot. The bot automates appointment bookings, handles customer queries, and helps you stay connected with clients 24/7.
                    </p>
                </AccordionContent>
            </AccordionPanel>
                        <AccordionPanel>
                <AccordionTitle>How does the WhatsApp bot work?</AccordionTitle>
                <AccordionContent className="accodian_cont">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                       Once you register on GoBook, you can configure your business details and availability. Customers can then message your WhatsApp number, and the bot will automatically respond, schedule appointments, and confirm bookings.
                    </p>
                </AccordionContent>
            </AccordionPanel>
                        <AccordionPanel>
                <AccordionTitle>Do I need any technical knowledge to use GoBook?</AccordionTitle>
                <AccordionContent className="accodian_cont">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        No. GoBook is designed for everyone — from small business owners to large teams. The setup is simple, and you can get your WhatsApp bot running in minutes without coding.
                    </p>
                </AccordionContent>
            </AccordionPanel>
                        <AccordionPanel>
                <AccordionTitle>Can I customize the bot’s replies?</AccordionTitle>
                <AccordionContent className="accodian_cont">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Yes. You can personalize your bot’s responses, working hours, and appointment rules to fit your business needs.
                    </p>
                </AccordionContent>
            </AccordionPanel>
                        <AccordionPanel>
                <AccordionTitle>What types of businesses can use GoBook?</AccordionTitle>
                <AccordionContent className="accodian_cont">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Any business that takes appointments or bookings can benefit from GoBook — salons, clinics, gyms, consultants, freelancers, and more.
                    </p>
                </AccordionContent>
            </AccordionPanel>
                          <AccordionPanel>
                <AccordionTitle>How will I receive my appointments?</AccordionTitle>
                <AccordionContent className="accodian_cont">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        All appointments are managed directly through WhatsApp and also stored inside your GoBook dashboard for easy tracking.
                    </p>
                </AccordionContent>
            </AccordionPanel>

                <AccordionPanel>
                <AccordionTitle>Is my customer data secure?</AccordionTitle>
                <AccordionContent className="accodian_cont">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Yes. GoBook uses secure encryption and follows best practices to keep your and your customers’ data safe.
                    </p>
                </AccordionContent>
            </AccordionPanel>

                   <AccordionPanel>
                <AccordionTitle>Can I try GoBook before subscribing?</AccordionTitle>
                <AccordionContent className="accodian_cont">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Yes. We offer a free trial so you can test the platform and see how it works for your business before committing.
                    </p>
                </AccordionContent>
            </AccordionPanel>
                 <AccordionPanel>
                <AccordionTitle>Do my customers need to install anything?</AccordionTitle>
                <AccordionContent className="accodian_cont">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        No. Customers simply message your WhatsApp number as usual — they don’t need to download any extra app.
                    </p>
                </AccordionContent>
            </AccordionPanel>

                  <AccordionPanel>
                <AccordionTitle>How do I get started?</AccordionTitle>
                <AccordionContent className="accodian_cont">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Click the Register button on the homepage, create your account, and follow the step-by-step setup to launch your WhatsApp bot.
                    </p>
                </AccordionContent>
            </AccordionPanel>

        </Accordion>
        </div>
      </div>
      {/* Why Choose Us section ends here */}
    </div>
  )
}

export default page