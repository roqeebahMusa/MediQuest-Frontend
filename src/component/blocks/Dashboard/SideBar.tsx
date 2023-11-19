import React from 'react'
import { FaHome } from 'react-icons/fa'
import {  MdAnalytics, MdLogout, MdMenu, MdMessage, MdReport, MdSettings, MdSupportAgent } from 'react-icons/md'
import { RiCalendarLine } from 'react-icons/ri'

const SideBar:React.FC = () => {
  return (
    <div className='fixed pl-6  top-0 w-[230px] left-0 bottom-0 bg-slate-300 text-black shadow-[0 2px 5px rgba(0, 0, 0, 0.1)]'>
        <div className="h-[70px] text-[25px] pt-5">
            <MdMenu/>
        </div>
        <div className="space-y-9 ">
            <div className="flex items-center gap-4 cursor-pointer">
                <div className=" text-[25px]">
                    <FaHome/>
                </div>
                <div className="">Dashboard</div>
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
                <div className="text-[25px]">
                    <MdSupportAgent/>
                </div>
                <div className="">Patients</div>
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
                <div className="text-[25px]">
                    <MdReport/>
                </div>
                <div className="">Notification</div>
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
                <div className="text-[25px]">
                    <MdAnalytics/>
                </div>
                <div className="">Analytics</div>
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
                <div className="text-[25px]">
                    <MdMessage/>
                </div>
                <div className="">FeedBacks</div>
            </div>
            <div className="flex items-center gap-4 cursor-pointer ">
                <div className="text-[25px]">
                    <RiCalendarLine/>
                </div>
                <div className="">Calendar</div>
            </div>
           
            <div className="flex items-center gap-4 cursor-pointer">
                <div className="text-[25px]">
                    <MdSettings/>
                </div>
                <div className="">Settings</div>
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
                <div className="text-[25px]">
                    <MdLogout/>
                </div>
                <div className="">Log Out</div>
            </div>
        </div>
    </div>
  )
}

export default SideBar