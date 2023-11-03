import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Choose from '../Choose/Choose'
import Services from '../Services/Services'
import Contacts from '../Contact/Contacts'
import Footer from '../Footer/Footer'

const Weblayouts = () => {
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

export default Weblayouts