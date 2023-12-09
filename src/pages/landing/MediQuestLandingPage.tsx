import React from 'react'
import { RiBox2Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import pix1 from "../../assets/ab.jpg"
import pix2 from "../../assets/Health.jpg"
import pix3 from "../../assets/About.jpg"
import Footer from '../../component/blocks/Footer';
import "./MediQuestLandingPage.css"
import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const MediQuestLandingPage:React.FC = () => {

  const [showButton, setShowButton] = useState(true);
  const Navigate = useNavigate()
  

  const handleSignup = () =>{
    Navigate("/register")
  }



const onScroll = () => {
  window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
}


  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);

  });

  const scrollToTop = () => {
    window.scrollTo(0,0)
  }


  return (
    <div className='text-black '>
      <section className="">
        <div style={{
          backgroundImage: `url(${pix1})`
        }} className="bg-your-image bg-cover bg-center">
        <div className="px-[90px] h-[90vh] flex flex-col justify-center sm:px-[16px] md:px-[30px] lg:px-[60px]">

          <h1
           className='header font-bold text-7xl mb-6 w-[800px] sm:w-[100%] sm:text-5xl md:w-[80%] md:text-6xl lg:w-[550px] lg:text-6xl text-[#0D3859]'>Find the Perfect Lab for Your Need</h1>

          <p className="mb-6 text-[#0D3859] text-2xl sm:text-[17px] md:w-[70%] md:text-[20px] lg:text-[17px]">Book your laboratory tests online and get fast, accurate results.</p>
          <div className="">
              <button className='bg-[#0D3859] text-white border-[black] py-3 px-7 mr-2 rounded-[7px] lg:px-5 lg:py-2 text-[18px] sm:text-[16px] md:text-[16px]'>Search</button>
              <button className='bg-transparent text-[#0D3859] border border-[#0d3859] py-3 px-6 rounded-[7px] md:px-5 lg:px-5 lg:py-2 text-[18px] sm:text-[16px] md:text-[16px]'>Learn More</button>
          </div>
        </div>
        </div>
      </section>
      <section className="">
        <div className="bg-slate-300 flex justify-between items-center py-[70px] px-[90px] sm:px-[16px] sm:flex-col sm:py-[40px] sm:gap-7 md:px-[30px] md:gap-0 md:py-[50px] lg:px-[60px] lg:py-[50px] lg:gap-[0]">
          <div className="w-[50%] sm:w-[100%] sm:mr-0 md:w-[100%] md:mr-4 ">
            <h1 className='font-bold text-[40px] mb-4 line48 sm:text-4xl md:text-4xl lg:text-4xl '>Find and Book Laboratory Tests with Ease</h1>
            <p className=" text-[18px] md:text-[15px] lg:text-[15px]">Discover a wide range of laboratory tests and conveniently book them online.</p>
            <div className="flex justify-between gap-4 mt-10 sm:flex-col sm:mt-8 md:mt-5 md:gap-3 ">
              <div className="">
                <div className='text-[40px] md:text-[35px] sm:text-[35px]'>
                <RiBox2Line/>
                 </div>
                <h1 className='font-bold text-[24px] mb-3 sm:text-[19px] sm:mb-3 md:mb-[10px] md:text-[19px]'>Convenient</h1>
                <p className="text-[18px] sm:text-[16px] md:text-[14px] lg:text-[15px]">Search for tests, compare prices and book appointments at your preferred laboratory.</p>
              </div>
              <div className="">
                <div className='text-[40px] sm:mt-2 md:text-[35px] sm:text-[35px] '>
                <RiBox2Line/>
                </div>
                <h1 className='font-bold text-[24px] mb-3 sm:text-[20px] sm:mb-3 md:mb-[10px] md:text-[19px]'>Efficient</h1>
                <p className="text-[18px] sm:text-[16px] md:text-[14px] lg:text-[15px]">Save time and effort by easily booking your laboratory tests online.</p>
              </div>
            </div>
          </div>
          <div className="w-[500px] h-[580px] bg-red-600 sm:w-[100%] sm:bg-yellow-500 sm:h-[450px] md:w-[100%] md:h-[500px] lg:h-[500px] rounded-md overflow-hidden">
            
            <img className='w-[100%] h-[100%] object-cover' src={pix2} alt="" />
          </div>
        </div>
      </section>
      <section className="text-white">
        <div className="bg-[#0D3859] flex gap-[100px] justify-between items-center py-[70px] px-[90px] sm:px-[16px] sm:flex-col-reverse sm:py-[45px] sm:gap-7 md:px-[30px] md:gap-0 md:py-[50px] lg:px-[60px] lg:py-[50px] lg:gap-0">
        <div className="w-[500px] h-[580px] bg-red-600 sm:w-[100%] sm:bg-green-500 sm:h-[450px] md:w-[100%] md:h-[500px] lg:h-[500px] rounded-md overflow-hidden">
            <img className='w-[100%] h-[100%] object-cover' src={pix3}  alt="" />
          </div>
          <div className="w-[50%] ml-[60px] sm:w-[100%] sm:ml-0 md:w-[100%] md:ml-4">
            <h1 className='font-bold text-[40px] mb-4 line48 sm:text-4xl md:text-4xl lg:text-4xl '>Save Time and Access Test Results Online with Our Laboratory Booking Webapp.</h1>
            <p className=" text-[18px] md:text-[15px] lg:text-[15px]">Our laboratory booking website offers a convenient solution for patients, allowing them to save time and access their test results online.</p>
            <div className="flex items-center gap-2 mt-[16px] md:items-start lg:items-start">
            <RiBox2Line/>
              <p className='text-[18px] sm:text-[16px] md:text-[14px]'>Time-saving booking process for labratory appointments.</p>
            </div>
            <div className="flex items-center gap-2 my-3 md:items-start lg:items-start">
              <RiBox2Line/>
              <p className='text-[18px] sm:text-[16px] md:text-[14px]'>Convenient access to test results through our online platform.</p>
            </div>
            <div className="flex items-center gap-2 md:items-start lg:items-start">
            <RiBox2Line/>
              <p className='text-[18px] sm:text-[16px] md:text-[14px]'>Streamlined experience for patients seeking laboratory services.</p>
            </div>
          </div>
          
        </div>
      </section>
      
      <section className="">
        <div className="bg-white py-[60px] px-[90px] text-center sm:px-[16px] sm:py-[45px] md:px-[30px] md:py-[50px] lg:px-[60px] lg:py-[50px]">
          <h1 className="font-bold text-[3rem] mb-6 sm:text-4xl md:text-4xl md:mb-4  ">Book Your Lab Tests Online</h1>
            <p className="mb-4 text-[18px] md:text-[15px] sm:text-[15px]">Find a laboratory near you and schedule your tests conveniently.</p>
            <div className="">
              <button className='bg-[#0D3859] text-white py-2 px-4 mr-2 rounded-[10px] md:text-[15px] sm:text-[15px] text-[18px]'
              onClick={handleSignup}
              >  Register</button>
              <button className='bg-transparent text-black border border-[#0D3859] py-2 px-4 rounded-[10px] md:text-[15px] text-[18px] sm:text-[15px]'>Learn More</button>
          </div>
        </div>
      </section>
      {/* <section className="">
        <div className="bg-slate-300 py-[60px] px-[90px]">
          <div className="flex justify-between ">
            <h1 className="font-bold text-[40px] line48 ">Discover the Impact of Our Platform with these statistics</h1>
            <div className="">
              <p className='text-[18px]'> Our platform has helped thousands of patients and laboratories achieve their goals</p>
              <div className='flex justify-between mt-5'>
                <div className="">
                  <h1 className="font-bold text-[40px] mb-2 ">50%</h1>
                  <p className=''>Patients report improved health outcomes with our platform</p>
                </div>
                <div className="">
                  <h1 className="font-bold text-[40px] mb-2 ">50%</h1>
                  <p className=''>Laboratories and clinics experience increased efficiency and productivity</p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="">
            <img src="" alt="graph" />
          </div>
        </div>
      </section>
      <section className=''>
        <div className="bg-slate-600 text-white py-[80px] px-[90px]">
          <h1 className="font-bold text-5xl mb-8">Stay Updated with Health News</h1>
          <p className="">Subscribe to our newsletter and receive updates on health news and laboratory tests.</p>
          <div className="pt-[20px]">
            <input className='bg-white placeholder:text-[16px] w-[450px] rounded-[10px] py-3 px-6 border-black mr-4 border-[1px]' type="text" placeholder='Your Email Address' />
            <button className='bg-black text-white font-bold py-3 px-6 rounded-[10px]' >Subscribe Now! </button>
          </div>
          <p className="mt-3 text-[12px]">By clicking Subscribe Now, you agree to our Terms and Conditions</p>
        </div>
      </section> */}
        <section  style={{
          backgroundImage: `url(${pix1})`
        }} className='bg-cover bg-center'>
        <div className="bg-your-book text-[#0D3859] bg-cover bg-center flex justify-between py-[100px] px-[90px] sm:flex-col sm:gap-4 sm:px-[16px] sm:py-[40px] md:px-[30px] md:py-[50px] lg:px-[60px] lg:py-[50px]">
          <div className="">
            <h1 className="font-bold text-5xl mb-4 sm:text-4xl md:text-4xl md:w-3/4">Discover the Lab Booking Experience</h1>
            <p className='text-[18px] sm:text-[15px] md:text-[15px]'>Find the right laboratory for your needs today</p>
          </div>
          
          <div className="flex">
            <button className='bg-[#0D3859] text-white border-[black] h-12 py-2 px-4 mr-2 rounded-[10px] md:h-12 md:text-[15px] text-[18px] lg:h-10 lg:text-[15px]'
            onClick={handleSignup}>Register</button>
            <button className='bg-transparent text-white border border-[white] h-12 py-2 px-4 rounded-[10px] md:h-12 md:text-[15px] lg:h-10 lg:text-[15px] text-[18px]'>Contact</button>
          </div>
        </div>
        </section>
        <FaArrowUp className={showButton ? "showButton" : "hidden"} onClick={scrollToTop} />
        <Footer />
    </div>
  )
}

export default MediQuestLandingPage