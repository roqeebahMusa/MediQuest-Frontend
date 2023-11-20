import { createBrowserRouter } from "react-router-dom"
// import WebLayout from "../component/layout/WebLayout"
import Login from "../pages/Login"
import ForgotPassword from "../pages/ForgotPassword"
import Register from "../pages/Register"
import VerifyPassword from "../pages/VerifyPassword"
import CreateNewPassword from "../pages/CreateNewPassword"
import RegisterConfirm from "../pages/RegisterConfirm"
// import Header from "../component/blocks/Header"
// import MiniLandingPage from "../pages/MiniLandingPage"
import LandingWebLayout from "../component/layout/LandingWebLayout"
import MediQuestLandingPage from "../pages/landing/MediQuestLandingPage"
// import DashBoard from "../component/DashBoard/HomeDashBoard"
import DashboardLayout from "../component/layout/DashboardLayout"
import AdminDashBoard from "../pages/AdminDashBoard"


export const Index = createBrowserRouter([

    
    {
        path: "/",
        element: <LandingWebLayout/>,
        children:[
            {
                index: true,
                element: <MediQuestLandingPage/>
                
            },

          
            // {
            //     path: "/",
            //     element: <Header/>
            // }
        ]
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
		path: "admin-dashboard",
		element: <DashboardLayout/>,
		children: [
			{
				index: true,
				element: < AdminDashBoard/>,
			},
        ]
    }

        
])