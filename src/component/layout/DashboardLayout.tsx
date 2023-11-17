import React from 'react'
import SideBar from '../blocks/Dashboard/SideBar'
import NavBar from '../blocks/Dashboard/NavBar'
import { Outlet } from 'react-router-dom'

const DashboardLayout:React.FC = () => {
  return (
    <div className='  '>
        <SideBar/>
        <div className='bg-slate-300 ml-[230px]'>
            <NavBar/>
                <div className=' bg-black h-[100vh] mt-[70px]'>
                    <Outlet/>
                </div>
        </div>
    </div>
  )
}

export default DashboardLayout