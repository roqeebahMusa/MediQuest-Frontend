import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import ForgotPassword from "../pages/ForgotPassword"
import Register from "../pages/Register"
import VerifyPassword from "../pages/VerifyPassword"
import CreateNewPassword from "../pages/CreateNewPassword"
import RegisterConfirm from "../pages/RegisterConfirm"
import LandingWebLayout from "../component/layout/LandingWebLayout"
import MediQuestLandingPage from "../pages/landing/MediQuestLandingPage"
import DashboardLayout from "../component/layout/DashboardLayout"
import AdminDashBoard from "../pages/AdminDashBoard"
import About from "../pages/About"
import Services from "../pages/Services"
import Header from "../component/blocks/Header"


export const Index = createBrowserRouter([

    
    {
        path: "/",
        element: <LandingWebLayout/>,
        children:[
            {
                index: true,
                element: <MediQuestLandingPage/>
                
            },

          
            {
                path: "/",
                element: <Header/>
            },

            {
                 path: "/about",
                 element: <About />
            },

            {
               path: "/services",
               element: <Services />
            },

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