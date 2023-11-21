import React from 'react'
import Button from '../Button'
import  {AiOutlineMedicineBox} from "react-icons/ai"
import {FaWheelchair} from "react-icons/fa" 
import {MdOutlineToday} from "react-icons/md"
import {AiOutlineEye} from "react-icons/ai"

const Settings:React.FC = () => {
  return (
    <div className='h-full w-full  mb-[80px]'>

        <div className='flex justify-between mb-40'>
        <Button/>
        <h2 className='text-[#1F1F1F] font-bold text-2xl'>Settings</h2>
        <div className='text-[#1F1F1F] flex gap-3'>
            <div>
            <span>Today's Date</span>
            <h3 className='font-bold'>2023-06-06</h3>
            </div>
            <div className='w-[50px] h-[50px] bg-[#CCCCCC] rounded-[5px] p-4'>
            {<MdOutlineToday/>}
            </div>
        </div>
        </div>

        <div>

            <div className='w-[700px] h-[100px] bg-white border text-[#CCCCCC] mb-10  rounded-[10px]'>
                <div className='flex gap-10 p-4'>

                    <div className='w-[50px] h-[70px] p-6 pl-4 rounded-[5px] bg-[#CCCCCC] text-[#4EB2E4]'>
                    {<AiOutlineMedicineBox/>}
                    </div>

                    <div>
                        <h2 className='text-[#4EB2E4] font-semibold text-lg'>Account Settings</h2>
                        <span className='text-[#1F1F1F]'>Edit your Account Details & Change Password</span>
                    </div>
                </div>
            </div>

            <div className='w-[700px] h-[100px] bg-white border text-[#CCCCCC] rounded-[10px] mb-10'>
                <div className='flex gap-10 p-4'>

                    <div className='w-[50px] h-[70px] p-6 pl-4 rounded-[5px] bg-[#CCCCCC] text-[#4EB2E4]'>
                    {<AiOutlineEye/>}
                    </div>

                    <div>
                        <h2 className='text-[#4EB2E4] font-semibold text-lg'> View Account Settings</h2>
                        <span className='text-[#1F1F1F]'>View Personal Information About Your Account</span>
                    </div>
                </div>
            </div>

            <div className='w-[700px] h-[100px] bg-white border text-[#CCCCCC]  rounded-[10px]'>
                <div className='flex gap-10 p-4'>

                    <div className='w-[50px] h-[70px] p-6 pl-4 rounded-[5px] bg-[#CCCCCC] text-[#4EB2E4]'>
                    {<FaWheelchair/>} 
                    </div>

                    <div>
                        <h2 className='text-[#D81515] font-semibold text-lg'>Delete Account</h2>
                        <span className='text-[#1F1F1F]'>Will Permanently Remove your Account</span>
                    </div>
                </div>
            </div>


        </div>

    </div>
  )
}

export default Settings