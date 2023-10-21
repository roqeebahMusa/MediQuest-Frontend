import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Index } from './routes/Allroutes'
import {RouterProvider} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={Index} />
  </React.StrictMode>,
)
