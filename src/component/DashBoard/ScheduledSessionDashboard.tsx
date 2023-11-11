import React from 'react'
import Button from '../Button'
import {MdOutlineToday} from "react-icons/md"

const ScheduledSession:React.FC = () => {
  return (
    <div className='h-full w-full  mb-60 '>
        <div className='flex justify-between  mt-6'>
        <Button/>
        <div className='text-[#1F1F1F] flex gap-3'>
          <div>
          <span>Today's date</span>
            <h3 className='font-bold'>2023-06-06</h3>
          </div>
          <div className='w-[50px] h-[50px] bg-[#CCCCCC] rounded-[5px] p-4'>
            {<MdOutlineToday/>}
            </div>

        </div>
        </div>
        <div className='w-[800px] h-[300px] bg-[#F5F5F5] border text-[#CCCCCC] mt-20 p-10 rounded-[12px] '>
            <div className=''>
            <h2 className='text-[#189BDB] font-bold text-2xl mb-6'>Test Session</h2>
           <div className='text-[#1F1F1F] font-semibold'>
            <h3>Test Doctor</h3>
           <h3>2023-07-20</h3>
            <span>Starts 18:00</span>
           </div>
            </div>
            <button className='bg-[#DAEBF8] h-[40px] w-[700px] text-[#1F1F1F] mt-6 text-xs'>Book Now</button>

        </div>
    
    </div>
  )
}

export default ScheduledSession