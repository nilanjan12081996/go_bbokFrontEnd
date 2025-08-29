import { Label, Select, TextInput } from "flowbite-react"
import { BiCopy } from "react-icons/bi";

const StepThree=({setShow})=>{
      const HandleNextPage = () => {
    setShow({
      StepOne: false, // AddProduct is the first step
      StepTwo: false,
      StepThree: false,
      StepFour: true,
      StepFive: false,
      StepSix: false,
      StepSeven: false,
    });
  };
   const handleBack = () => {
    setShow({
      StepOne: false, // AddProduct is the first step
      StepTwo: true,
      StepThree: false,
      StepFour: false,
      StepFive: false,
      StepSix: false,
      StepSeven: false,
    });
  };
    return(
        <>
           <div className='step_box_three'>
                        <div className='step_content_wraper mb-6'>
                            <h3 className='text-[#435971] text-[20px] leading-[30px] mb-3 font-medium'>Availability</h3>
                            <div className='flex gap-4'>
                                <div className='w-10/12 '>
                                    <div className='flex gap-4 mb-4'>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Choose Day*</Label>
                                            </div>
                                            <Select id="countries" required>
                                                <option>Choose Day</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                            </Select>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Start Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">End Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 mb-4'>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Choose Day*</Label>
                                            </div>
                                            <Select id="countries" required>
                                                <option>Choose Day</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                            </Select>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Start Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">End Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 mb-4'>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Choose Day*</Label>
                                            </div>
                                            <Select id="countries" required>
                                                <option>Choose Day</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                            </Select>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Start Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">End Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 mb-4'>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Choose Day*</Label>
                                            </div>
                                            <Select id="countries" required>
                                                <option>Choose Day</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                            </Select>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Start Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">End Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 mb-4'>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Choose Day*</Label>
                                            </div>
                                            <Select id="countries" required>
                                                <option>Choose Day</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                            </Select>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Start Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">End Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 mb-4'>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Choose Day*</Label>
                                            </div>
                                            <Select id="countries" required>
                                                <option>Choose Day</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                            </Select>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Start Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">End Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 mb-4'>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Choose Day*</Label>
                                            </div>
                                            <Select id="countries" required>
                                                <option>Choose Day</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                            </Select>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Start Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">End Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-2/12 mt-7'>
                                    <button className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[40px] font-medium px-5 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2] flex items-center'><BiCopy className='text-base mr-1' /> copy to all week</button>
                                </div>
                            </div>
                        </div>
                        <div className='step_content_wraper'>
                            <h3 className='text-[#435971] text-[20px] leading-[30px] mb-3 font-medium'>Break time</h3>
                            <div className='flex gap-4'>
                                <div className='w-10/12 '>
                                    <div className='flex gap-4 mb-4'>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Choose Day*</Label>
                                            </div>
                                            <Select id="countries" required>
                                                <option>Choose Day</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                            </Select>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Start Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">End Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 mb-4'>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Choose Day*</Label>
                                            </div>
                                            <Select id="countries" required>
                                                <option>Choose Day</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                            </Select>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Start Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">End Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 mb-4'>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Choose Day*</Label>
                                            </div>
                                            <Select id="countries" required>
                                                <option>Choose Day</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                            </Select>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Start Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">End Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 mb-4'>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Choose Day*</Label>
                                            </div>
                                            <Select id="countries" required>
                                                <option>Choose Day</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                            </Select>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Start Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">End Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 mb-4'>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Choose Day*</Label>
                                            </div>
                                            <Select id="countries" required>
                                                <option>Choose Day</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                            </Select>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Start Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">End Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 mb-4'>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Choose Day*</Label>
                                            </div>
                                            <Select id="countries" required>
                                                <option>Choose Day</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                            </Select>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Start Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">End Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 mb-4'>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Choose Day*</Label>
                                            </div>
                                            <Select id="countries" required>
                                                <option>Choose Day</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                            </Select>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">Start Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter Start Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-4/12 step_field">
                                            <div className="mb-1 block">
                                                <Label htmlFor="countries">End Time*</Label>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='w-10/12'>
                                                    <TextInput id="base" type="text" sizing="md" placeholder='Enter End Time' />
                                                </div>
                                                <div className='w-2/12'>
                                                    <Select id="countries" required>
                                                        <option>AM</option>
                                                        <option>PM</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-2/12 mt-7'>
                                    <button className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[40px] font-medium px-5 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2] flex items-center'><BiCopy className='text-base mr-1' /> copy to all week</button>
                                </div>
                            </div>
                        </div>
                        <div className='step_btn_area border-t border-[#EBEEFA] pt-5'>
                            <div className='flex justify-end items-center gap-3'>
                                <button onClick={()=>handleBack()} className='bg-[#ffffff] rounded-[6px] text-[#464f60] hover:text-[#ffffff] text-[14px] leading-[43px] font-medium px-6 cursor-pointer hover:bg-[#00806A] border border-[#dddfe2] hover:border-[#00806A]'>Previous Step</button>
                                <button onClick={()=>HandleNextPage()} className='bg-[#00806A] rounded-[6px] text-white hover:text-[#464f60] text-[14px] leading-[43px] font-medium px-10 cursor-pointer hover:bg-white border border-[#00806A] hover:border-[#dddfe2]'>Next Step</button>
                            </div>
                        </div>
                    </div>
        </>
    )
}
export default StepThree