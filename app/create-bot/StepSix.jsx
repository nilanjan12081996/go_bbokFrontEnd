import Image from "next/image";
import code_img from "../../app/assets/imagesource/code_img.png";
const StepSix=({setShow})=>{
     const handleBack = () => {
    setShow({
      StepOne: false, // AddProduct is the first step
      StepTwo: false,
      StepThree: false,
      StepFour: false,
      StepFive: true,
      StepSix: false,

    });
  };
    return(
        <>
         <div className='step_box_one'>
                        <div className='step_content_wraper'>
                            <div className='mb-8 bg-white p-5 border border-[#929292] rounded-[10px] h-[480px] overflow-scroll overflow-x-hidden'>
                                <Image src={code_img} alt="code_img" className='' />
                            </div>
                        </div>
                        <div className='step_btn_area border-t border-[#EBEEFA] pt-5'>
                            <div className='flex justify-end items-center gap-3'>
                                <button onClick={()=>handleBack()} className='bg-[#ffffff] rounded-[6px] text-[#464f60] hover:text-[#ffffff] text-[14px] leading-[43px] font-medium  px-6 cursor-pointer hover:bg-[#00806A] border border-[#dddfe2] hover:border-[#00806A]'>Previous Step</button>
                                <button className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[43px] font-medium px-8 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]'>Copy Code</button>
                            </div>
                        </div>
                    </div>
        </>
    )
}
export default StepSix;