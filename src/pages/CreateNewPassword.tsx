

import React from 'react'
import pix from "../assets/react.svg"

const CreateNewPassword:React.FC = () => {
  return (
    <div className='bg-slate-300 h-screen w-screen pt-8'> 
      <div className="">
        <div className=" text-black text-center mx-10">
          <p className='mb-20 text-[18px] font-medium'>Create New Password</p>
          <div className="flex justify-center h-[200px] mb-20 ">
          <img src={pix} className='h-[100%] w-[100%] ' />
          </div>
          <p className='mb-10 text-[18px] font-medium'>Your new password must be different from the old password</p>
          <form action="">
          <div className="mx-6 flex flex-col items-center">
            <input type="password" 
            className="bg-white text-black placeholder:text-slate-400 outline-0 p-4 h-[55px] w-[400px] border-slate-300 border-[1px] rounded-[30px] sm:h-[50px] sm:w-full md:h-[50px] md:w-full" 
            placeholder='New password' required/>
            <input type="password" 
            className="bg-white text-black placeholder:text-slate-400 outline-0 p-4 h-[55px] w-[400px] border-slate-300 border-[1px] rounded-[30px] sm:h-[50px] sm:w-full md:h-[50px] md:w-full mt-2" 
            placeholder='Confirm new password' required/>
            </div>
            <div className="mx-6 mt-6 text-white">
                 <button className='bg-[#0D3859] rounded-[30px] h-[55px] w-[400px]  sm:h-[50px] sm:w-full md:h-[50px] md:w-full'>Save Password</button>
             </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateNewPassword