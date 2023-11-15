// import React from 'react'
import {Outlet} from "react-router-dom"
import Header from "../../pages/LandingPage/Header/Header"
import Hero from "../../pages/LandingPage/Hero/Hero"
import About from "../../pages/LandingPage/About/About"
import Choose from "../../pages/LandingPage/Choose/Choose"
import Services from "../../pages/LandingPage/Services/Services"
import Contacts from "../../pages/LandingPage/Contact/Contacts"
import Footer from "../../pages/LandingPage/Footer/Footer"

const WebLayout:React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Choose />
      <Services />
      <Contacts />
      <Footer />
        <Outlet />
    </div>
  )
}

export default WebLayout