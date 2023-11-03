import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import {MdOutlineToday} from "react-icons/md"


const DashBoard :React.FC= () => {
  return (
    <div className='w-full h-full ' >
      <div className='text-[#1F1F1F] flex justify-between '>
        <h1>Home</h1>
        <div className='flex gap-3'>
          <div>
          <span>Today's date</span>
          <h3 className='font-bold'>2023-06-06</h3>
          </div>
          <div className='w-[50px] h-[50px] bg-[#CCCCCC] rounded-[5px] p-4'>
            {<MdOutlineToday/>}
            </div>
        </div>
        
      </div>
      <div className='bg-[#B9DDE1] text-[#1F1F1F] w-[800px] h-[300px]  rounded-[12px] p-[20px] '>
        <h2>Welcome!</h2>
        <h1 className='font-bold mb-6 text-2xl'>Test Patient</h1>
        <p className='font-semibold text-sm'>Haven't any idea about labs? no problem lets jumping to "All Doctor" section or "sessions" <br/>
        Track your past and future appointments history.<br/>
        Also find out the expected appointment time</p>
      
        <div className='mt-[20px]'>
        <span className='font-bold'>Channel a lab here</span>
        <div className='mt-6 gap-10 flex'>
        
        <div className='relative'>
          <input className='bg-white w-[300px]  h-[40px] text-xs p-5 rounded-[10px]  ' placeholder='Search lab and will we find the session available' />
         <div className=' absolute ' >
         {<AiOutlineSearch/>}
         </div>
        </div>
        <button className='h-[40px] w-[140px] bg-[#0a95da] text-white text-xs '>Search</button>
        </div>
        </div>
        
      </div>

            
            <div className=" flex flex-col items-center justify-center mt-10">
            
              <span className='text-[#1F1F1F] font-bold text-lg '>Your Upcoming Events</span>  
            
        
            <div className='bg-white border text-[#CCCCCC] w-[800px] rounded-[10px] gap-[20px] min-h-[200px]  flex flex-col '>
              <div className='flex p-10 pr-0 w-[90%] justify-between items-center'>
              <div className='text-[#1F1F1F]'>
                <h3 className=''>Appointment Number</h3>
              </div>

              <div className='text-[#1F1F1F]'>
                <h3>Session</h3>
              </div>

              <div className='text-[#1F1F1F]'>
                <h2>Doctor</h2>
              </div>

              <div className='text-[#1F1F1F]'>
                <h3 className=''>Scheduled data and time</h3>
              </div>
              </div>
              
              <hr className='text-[#4EB2E4] w-[100%] h-5 ' />
              <div className='flex gap-5 p-8 pr-0 w-[90%] justify-between items-center '>
              <h3 className='text-[#4EB2E4] font-semibold'>1</h3>

              <div className='text-[#1F1F1F]'>
              <h3 className='w-[80px]'>Test Session</h3>
              </div>

              
              <div className='text-[#1F1F1F]'>
              <h3 className='w-[80px]'>Test Doctor</h3>
              </div>

              <div className='text-[#1F1F1F]'>
              <h3>2023-01-01 18:00</h3>
              </div>

              </div>
              

            </div>
            
              
            </div>

            </div> 
    
  )
}

export default DashBoard

