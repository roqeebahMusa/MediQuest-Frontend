import React from 'react'
import AboutPic from "../assets/About.jpg"

const About:React.FC = () => {
  return (

    <div className='w-[100%] bg-[#0D3859] flex items-center sm:w-[100%] sm:min-h-[100vh] px-[90px] sm:bg-[#0D3859] sm:flex-col sm:px-[16px] md:px-[30px]'>

        <section className='w-[50%] h-[89vh] flex flex-col justify-center items-center sm:w-[100%] sm:h-[100vh]
 sm:flex sm:flex-col sm:justify-center'>
            <div className='w-[100%] h-[45%] sm:w-[100%] sm:h-[67%] md:h-[55%] '>
                <h1 className='text-white font-bold mb-2 text-[35px] leading-10  sm:text-[25px] sm:font-bold sm:mb-4 sm:leading-8 md:text-[25px] md:leading-8'>Increase Visibility and Streamline Booking Management with Our Laboratory Booking Website</h1>

                 <p className='md:text-[14px] text-white'>Our laboratory booking website offers laboratories and clinics numerous advantages, including increased
                  visibility and streamlined booking management. With our user-friendly platform, patients can easily find and book appointments, while laboratories and clinics can efficiently manage their bookings.</p>

            </div>
            

            <div className='w-[100%] h-[30%] flex justify-between items-center md:h-[40%]'>
                <section className='w-[47%] h-[85%]'>
                    <h1 className='text-white font-bold mb-4 text-[23px] sm:text-[16px] sm:mb-1 md:mb-1'>Increased Visibility</h1>
                    <p className='text-white sm:text-[12px] md:text-[14px]'>Our platform helps laboratories and clinics increase their visibility, reaching a wider audience of patients.</p>
                </section>

                <section className='w-[47%] h-[85%]'>
                <h1 className='text-white font-bold mb-4 text-[23px] sm:text-[16px] sm:mb-1 md:mb-1'>Streamlined Booking</h1>
                    <p className='text-white sm:text-[12px] md:text-[14px]'>Efficiently manage appointments with our streamlined booking system, reducing administrative tasks.</p>
                </section>
            </div>
        </section>

<section className='flex justify-center items-center sm:w-[100%] h-[400px] md:w-[50%] md:flex md:justify-center md:items-center'>
<div style={{
backgroundImage: `url(${AboutPic})`,
}}
 className='w-[500px] rounded-[10px] h-[500px] bg-cover bg-center bg-red-600 sm:w-[100%] sm:bg-yellow-500 sm:h-[400px] md:w-[100%] md:h-[400px]'></div>
</section>
    </div>
  )
}

export default About
