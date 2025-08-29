import { Label, TextInput } from "flowbite-react";
import Image from "next/image";
import bot01 from "../../app/assets/imagesource/bot01.png";
import bot02 from "../../app/assets/imagesource/bot02.png";
import bot03 from "../../app/assets/imagesource/bot03.png";
const StepFive=({setShow})=>{
      const HandleNextPage = () => {
    setShow({
      StepOne: false, // AddProduct is the first step
      StepTwo: false,
      StepThree: false,
      StepFour: false,
      StepFive: false,
      StepSix: true,
      
    });
  };
  const handleBack = () => {
    setShow({
      StepOne: false, // AddProduct is the first step
      StepTwo: false,
      StepThree: false,
      StepFour: true,
      StepFive: false,
      StepSix: false,
   
    });
  };

    return(
        <>
           <div className='step_box_one'>
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
                        <button onClick={()=>handleBack()} className='bg-[#ffffff] rounded-[6px] text-[#464f60] hover:text-[#ffffff] text-[14px] leading-[43px] font-medium  px-6 cursor-pointer hover:bg-[#00806A] border border-[#dddfe2] hover:border-[#00806A]'>Previous Step</button>
                        <button onClick={()=>HandleNextPage()} className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[43px] font-medium px-10 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]'>Next Step</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StepFive;