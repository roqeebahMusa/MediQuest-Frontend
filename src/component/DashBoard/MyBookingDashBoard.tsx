import React from 'react'
import Button from '../Button'
import {MdOutlineToday} from "react-icons/md"

const MyBookings:React.FC = () => {
  return (
    <div className='h-full w-full text-[#1F1F1F]  '>
        <div className='flex justify-between '>
            <Button/>
            <h2 className='font-semibold'>My Bookings History</h2>
          <div className='text-[#1F1F1F] gap-3 flex'>
            <div>
            <span>Today's date</span>
            <h3 className='font-bold'>2023-06-06</h3>
            </div>
            <div className='w-[50px] h-[50px] bg-[#CCCCCC] rounded-[5px] p-4'>
            {<MdOutlineToday/>}
            </div>
         </div>
        </div>
        
        <h2 className='font-bold mb-10'>My Bookings (1)</h2>
        <div className='w-[800px] h-[70px]  bg-white border p-4 gap-7 text-[#CCCCCC] rounded-[10px] '>
          <div className='flex gap-10 ml-64 '>
          <h3>Date:</h3>
           <input className='bg-[#565252] p-4 border h-[35px] w-[300px] text-[#CCCCCC] rounded-[10px]' type='date'/>
          </div>
        </div>

        <div className='w-[800px] min-h-[300px] bg-[#F5F5F5] border text-[#CCCCCC] mt-20 p-10 rounded-[12px] '>
            <div className=''>
               <div className='text-[#1F1F1F] mb-3'>
               <h3>Booking Date:2023-06-03</h3>
                <h3>Reference Number:MDQ-001</h3>
               </div>
            <h2 className='text-[#189BDB] font-bold text-2xl mb-6'>Test Session</h2>
           <div className='text-[#1F1F1F] font-semibold m-2'>
            <h3 className='mb-4'>Appointment Number:</h3>
           <h3 className='mb-4 font-bold'>01</h3>
            <span>Scheduled Date:2023-01-01</span>
            <h3>Starts:18:00</h3>
           </div>
            </div>
            <button className='bg-[#DAEBF8] h-[40px] w-[700px] text-[#1F1F1F] mt-6 text-xs'>Cancel Booking</button>

        </div>
    </div>
  )
}

export default MyBookings