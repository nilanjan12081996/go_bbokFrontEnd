import { Checkbox, Label } from "flowbite-react"
import Image from "next/image";
import french_flag from '../../app/assets/imagesource/french_flag.png'
import english_flag from '../../app/assets/imagesource/english_flag.png'
import spanish_flag from '../../app/assets/imagesource/spanish_flag.png'
const StepFour=({setShow})=>{
      const HandleNextPage = () => {
    setShow({
      StepOne: false, // AddProduct is the first step
      StepTwo: false,
      StepThree: false,
      StepFour: false,
      StepFive: true,
      StepSix: false,
      
    });
  };

  const handleBack = () => {
    setShow({
      StepOne: false, // AddProduct is the first step
      StepTwo: false,
      StepThree: true,
      StepFour: false,
      StepFive: false,
      StepSix: false,
    
    });
  };
    return(
        <>
        <div className='step_box_one'>
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
                        <button onClick={()=>handleBack()} className='bg-[#ffffff] rounded-[6px] text-[#464f60] hover:text-[#ffffff] text-[14px] leading-[43px] font-medium  px-6 cursor-pointer hover:bg-[#00806A] border border-[#dddfe2] hover:border-[#00806A]'>Previous Step</button>
                        <button onClick={()=>HandleNextPage()} className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[43px] font-medium px-10 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]'>Next Step</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StepFour