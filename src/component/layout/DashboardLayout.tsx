import React from 'react'
import SideBar from '../blocks/Dashboard/SideBar'
import NavBar from '../blocks/Dashboard/NavBar'
import { Outlet } from 'react-router-dom'

const DashboardLayout:React.FC = () => {
  return (
    <div className='bg-red-600  '>
        <SideBar/>
        <div className=''>
            <NavBar/>
                <div className='  h-[100vh] pt-[90px] ml-[250px] pr-5 '>
                    <Outlet/>
                </div>
        </div>
    </div>
  )
}

export default DashboardLayout