import React from 'react'
import {TfiAngleDown} from "react-icons/tfi"
import { useNavigate } from 'react-router-dom'

const Header:React.FC = () => {
  const Navigate = useNavigate()
  const handleSignup = () =>{
    Navigate("/register")
  }
  const handleLogin = () =>{
    Navigate("/login")
  }
  return (
    <div className='bg-slate-200 px-[90px]'>
      <div className='flex items-center justify-between bg-slate-200 h-[70px]'>
        <div className="flex items-center justify-between ">
          <div className='mr-28'>
            <h1 className='text-[#0D3859] font-bold text-[30px]'>MediQuest</h1>
            
          </div>
          <div className='flex justify-between gap-10 text-black'>
            <nav>Book Now</nav>
            <nav>Services</nav>
            <nav>About Us</nav>
            <div className="flex items-center gap-2"><nav>More</nav> <TfiAngleDown/></div>
          </div>
        </div>
        <div className="">
          <button className='bg-transparent text-black border border-[black] mr-2 py-2 px-5 rounded-[10px]'
          onClick={handleSignup}
          >Sign Up</button>
          <button className='bg-black text-white py-2 px-6 rounded-[10px]'
          onClick={handleLogin}
          >Log in</button>
        </div>
      </div>
    </div>
  )
}

export default Header