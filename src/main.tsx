import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Index } from './routes/Allroutes'
import {RouterProvider} from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={Index} />
    <ToastContainer
      position="top-right"
      autoClose={8000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />

  </React.StrictMode>
)
