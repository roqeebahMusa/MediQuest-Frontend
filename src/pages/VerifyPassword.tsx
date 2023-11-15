import React from 'react'
import pix from "../assets/react.svg"

const VerifyPassword:React.FC = () => {
  return (
    <div className='bg-slate-300 h-screen w-screen pt-8'> 
      <div className="">
        <div className=" text-black text-center mx-10">
          <p className='mb-20 text-[18px] font-medium'>Verify your email</p>
          <div className="flex justify-center h-[200px] mb-20 ">
          <img src={pix} className='h-[100%] w-[100%] ' />
          </div>
          <p className='mb-10 text-[18px] font-medium'>Enter the 4-digit code sent to your email address or via SMS</p>
          <form action="">
          <div className="mx-6 flex text-center ">
            <input type="text" 
            className="bg-white text-black placeholder:text-slate-400 outline-0 p-4 h-[55px] w-[400px] border-slate-300 border-[1px] rounded-[30px] sm:h-[50px] sm:w-full md:h-[50px] md:w-full" 
            placeholder='' required maxLength={1} min={0} max={9} pattern='[0-9]{1}' size={1}/>
            <input type="text" 
            className="bg-white text-black placeholder:text-slate-400 outline-0 p-4 h-[55px] w-[400px] border-slate-300 border-[1px] rounded-[30px] sm:h-[50px] sm:w-full md:h-[50px] md:w-full"
            placeholder='' required maxLength={1} min={0} max={9} pattern='[0-9]{1}' size={1}/>
            <input type="text" 
            className="bg-white text-black placeholder:text-slate-400 outline-0 p-4 h-[55px] w-[400px] border-slate-300 border-[1px] rounded-[30px] sm:h-[50px] sm:w-full md:h-[50px] md:w-full" 
            placeholder='' required maxLength={1} min={0} max={9} pattern='[0-9]{1}' size={1}/>
            <input type="text" 
            className="bg-white text-black placeholder:text-slate-400 outline-0 p-4 h-[55px] w-[400px] border-slate-300 border-[1px] rounded-[30px] sm:h-[50px] sm:w-full md:h-[50px] md:w-full" 
            placeholder='' required maxLength={1} min={0} max={9} pattern='[0-9]{1}' size={1}/>
            </div>
            <div className="mx-6 mt-6 text-white">
                 <button className='bg-[#0D3859] rounded-[30px] h-[55px] w-[400px]  sm:h-[50px] sm:w-full md:h-[50px] md:w-full'>Verify</button>
             </div>
          </form>
             <div className="mt-8">
                <p>Didn't receive the code?</p>
                <a href="#">Send code again</a>
             </div>
        </div>
      </div>
    </div>
  )
}
export default VerifyPassword