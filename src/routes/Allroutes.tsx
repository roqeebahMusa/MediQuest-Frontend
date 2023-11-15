import { createBrowserRouter } from "react-router-dom"
import WebLayout from "../component/layout/WebLayout"
import Login from "../pages/Login"
import ForgotPassword from "../pages/ForgotPassword"
import Register from "../pages/Register"
import VerifyPassword from "../pages/VerifyPassword"
import CreateNewPassword from "../pages/CreateNewPassword"
import RegisterConfirm from "../pages/RegisterConfirm"
import Header from "../component/blocks/Header"
import MiniLandingPage from "../pages/MiniLandingPage"
import LandingWebLayout from "../component/layout/LandingWebLayout"
import MediQuestLandingPage from "../pages/landing/MediQuestLandingPage"


export const Index = createBrowserRouter([

    {
        path: "/",
        element: <WebLayout/>,
        children: [
            {
                index: true,
                element: <MiniLandingPage />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/registerconfirm",
                element: <RegisterConfirm/>
            },
            {
                path: "/forgotpassword",
                element: <ForgotPassword />
            },
            {
                path: "/verifypassword",
                element: <VerifyPassword />
            },
            {
                path: "/createpassword",
                element: <CreateNewPassword />
            },
            {
                path: "/home",
                element: <Header/>
            }
        ]
    },

    
    {
        path: "/home",
        element: <LandingWebLayout/>,
        children:[
            {
                index: true,
                element: <MediQuestLandingPage/>
                
            }
        ]
    }
        
])