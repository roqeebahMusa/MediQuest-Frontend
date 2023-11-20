import React from 'react'
import { MdNotifications } from 'react-icons/md'

const NavBar:React.FC = () => {
  return (
    <div className='bg-slate-200 h-[70px] fixed top-0 right-0 left-[230px] px-6'>
        <div className="flex justify-between items-center h-[70px]">
        <div className=''>
            <h1 className="text-[#0D3859] font-medium text-[30px]">MediQuest</h1>
        </div>
        <div className=" flex items-center">
            <input 
            className='rounded-[20px] px-4 py-1 outline-none border-none text-black'
            type="text" placeholder='Search' />
            <div className='text-black ml-3 text-[20px]'>
            <MdNotifications/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NavBar