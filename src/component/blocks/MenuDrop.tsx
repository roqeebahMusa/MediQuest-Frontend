import React from 'react'
import { useNavigate } from 'react-router-dom';

const MenuDrop:React.FC = () => {
    const Navigate = useNavigate()
    const handleSignup = ()=>{
        Navigate("/register")
    }
    const handleLogin = ()=>{
        Navigate("/register")
    }
    const preventPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
      };
  return (
    
    <div className='bg-slate-300'>
          
        <div className='bg-slate-300 w-[100%] h-[100%] absolute top-[70px] right-0 text-black text-[18px] space-y-5 ' onClick={preventPropagation}>
            <nav className='hover hover:bg-[#0D3859] hover:text-white p-5 cursor-pointer'>Book Now</nav>
            <nav className='hover hover:bg-[#0D3859] hover:text-white p-5 cursor-pointer'>Services</nav>
            <nav className='hover hover:bg-[#0D3859] hover:text-white p-5 cursor-pointer'>About Us</nav>
            <nav className='hover hover:bg-[#0D3859] hover:text-white p-5 cursor-pointer'>More</nav>
            <div className="pl-5">
          <button className='bg-transparent text-black border border-[black] mr-2 py-2 px-4 rounded-[10px] sm:text-[18px] md:text-[18px lg:text-[14px]'
          onClick={handleSignup}
          >Sign Up</button>
          <button className='bg-black text-white py-2 px-5 rounded-[10px] sm:text-[18px] md:text-[18px] lg:text-[14px]'
          onClick={handleLogin}
          >Log in</button>
        </div>
        </div>
          
    </div>
  )
}

export default MenuDrop