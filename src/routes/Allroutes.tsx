import { createBrowserRouter } from "react-router-dom"
import WebLayout from "../component/layout/WebLayout"
import Login from "../pages/Login"
import MiniLandingPage from "../pages/MiniLandingPage"
import ForgotPassword from "../pages/ForgotPassword"
import Register from "../pages/Register"

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
                path: "/forgotpassword",
                element: <ForgotPassword />
            }
        ]
    }
])