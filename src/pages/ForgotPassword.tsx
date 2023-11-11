import React from 'react'
import pix from "../assets/react.svg"

const ForgotPassword = () => {
  return (
    <div className='bg-slate-300 h-screen w-screen pt-8'> 
      <div className="">
        <div className=" text-black text-center mx-10">
          <p className='mb-20 text-[18px] font-medium'>Forgot Password</p>
          <div className="flex justify-center h-[200px] mb-20 ">
          <img src={pix} className='h-[100%] w-[100%] ' />
          </div>
          <p className='mb-10 text-[18px] font-medium'>Please enter your registered email address to receive a verification code</p>
          <form action="">
          <div className="mx-6">
            <input type="email" 
            className="bg-white text-black placeholder:text-slate-400 outline-[#4EB2E4] p-4 h-[55px] w-[400px] border-slate-300 border-[1px] rounded-[30px] sm:h-[50px] sm:w-full md:h-[50px] md:w-full" 
            placeholder='Enter email'/>
            </div>
            <div className="mx-6 mt-6 text-white">
                 <button className='bg-[#0D3859] rounded-[30px] h-[55px] w-[400px]  sm:h-[50px] sm:w-full md:h-[50px] md:w-full'>Submit</button>
             </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword

// import React from 'react'
// import {Link} from "react-router-dom"

// const ForgotPassword:React.FC = () => {
//   return (
//     <div className='bg-slate-300 h-screen w-screen flex justify-center items-center sm:bg-white md:bg-white'>
//        <div className="bg-slate-50 flex rounded-[10px] sm:bg-transparent sm:w-screen md:bg-transparent md:w-screen">
//         <div className='flex flex-col gap-4 mx-10 mt-10 sm:mt-0 md:mt-0 sm:w-screen sm:mx-0 md:w-screen md:mx-0'>
//             <h1 className=' text-center text-[50px] text-[#177eb1] font-extrabold  sm:text-[45px]'>MediQuest</h1>
//             <h2 className='text-black text-center text-[35px] sm:text-[20px]'>Sign Up</h2>
//             <div className="mx-6">
//             <input type="text" 
//             className="bg-white text-black placeholder:text-slate-400 outline-[#4EB2E4] p-4 h-[55px] w-[400px] border-slate-400 border-[1px] rounded-[30px] sm:h-[40px] sm:w-full md:h-[40px] md:w-full" 
//             placeholder='FullName'/>
//             </div>
//             <div className="mx-6">
//             <input type="email" 
//             className="bg-white text-black placeholder:text-slate-400 outline-[#4EB2E4] p-4 h-[55px] w-[400px] border-slate-400 border-[1px] rounded-[30px] sm:h-[40px] sm:w-full md:h-[40px] md:w-full" 
//             placeholder='Email'/>
//             </div>
//             <div className="mx-6">
//             <input type="password" 
//             className="bg-white text-black placeholder:text-slate-400 outline-[#4EB2E4] p-4 h-[55px] w-[400px] border-slate-400 border-[1px] rounded-[30px] sm:h-[40px] sm:w-full md:h-[40px] md:w-full" 
//             placeholder='Password' />
//             </div> 
//             <div className="mx-6 mt-8">
//                 <button className='bg-[#0D3859] rounded-[30px] h-[55px] w-[400px]  custom-hover sm:h-[40px] sm:w-full md:h-[40px] md:w-full'>Register</button>
//             </div>
//             <div className="">
//              <p className=' text-black text-center'>Already have an account? 
//                  <Link 
//                     to={`/login`}
//                     style={{
//                         textDecoration:"none",
//                         color: "#177eb1",
//                     }} ><span className='ml-2'>Login</span>
//                  </Link> </p>
//             </div>
                
//         </div>
//         <div className='bg-[#0D3859] h-[650px] w-[500px] m-auto rounded-[10px] sm:hidden md:hidden'>
//         </div>
//        </div>
//     </div>
//   )
// }

// export default ForgotPassword