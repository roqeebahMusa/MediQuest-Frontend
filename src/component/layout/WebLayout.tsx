import React from 'react'
import {Outlet} from "react-router-dom"

const WebLayout:React.FC = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default WebLayout