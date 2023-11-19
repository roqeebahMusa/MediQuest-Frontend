import React,{useState} from 'react'
import {TfiAngleDown} from "react-icons/tfi"
import { useNavigate } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import MenuDrop from './MenuDrop';


const Header:React.FC = () => {
  const Navigate = useNavigate()
  const [showmenu, setShowmenu] =useState<boolean>(false)
  const handleSignup = () =>{
    Navigate("/register")
  }
  const handleLogin = () =>{
    Navigate("/login")
  }
  const changeMenuShow = ()=>{
    setShowmenu(!showmenu)
  }
  return (
    <div className='bg-slate-200 px-[90px] sm:px-[16px] md:px-[30px] lg:px-[60px]'>
      <div className='flex items-center justify-between bg-slate-200 h-[70px]'>
        <div className="flex items-center justify-between ">
          <div className='mr-28 sm:mr-0 lg:mr-10'>
            <h1 className='text-[#0D3859] font-bold text-[30px]'>MediQuest</h1>
            
          </div>
          <div className='flex justify-between gap-10 text-black sm:hidden md:hidden lg:gap-6'>
            <nav>Book Now</nav>
            <nav>Services</nav>
            <nav>About Us</nav>
            <div className="flex items-center gap-2"><nav>More</nav> <TfiAngleDown/></div>
          </div>
        </div>
        <div className="sm:hidden md:hidden">
          <button className='bg-transparent text-black border border-[black] mr-2 py-2 px-5 rounded-[10px] lg:text-[14px]'
          onClick={handleSignup}
          >Sign Up</button>
          <button className='bg-black text-white py-2 px-6 rounded-[10px] lg:text-[14px]'
          onClick={handleLogin}
          >Log in</button>
        </div>
        <div className="text-black text-[30px] hidden sm:block md:block lg:hidden">
          <div className=""
          onClick={changeMenuShow}
          >
            {showmenu?<AiOutlineClose/>: <AiOutlineMenu/>}
            {showmenu && (
              <div className="">
                <MenuDrop/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header