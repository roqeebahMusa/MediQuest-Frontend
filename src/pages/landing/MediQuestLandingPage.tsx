import React from 'react'
import { RiBox2Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const MediQuestLandingPage:React.FC = () => {
  const Navigate = useNavigate()
  const handleSignup = () =>{
    Navigate("/register")
  }
  return (
    <div className='text-black '>
      <section className="">
        <div className="">
        <div className="px-[90px] h-[90vh] flex flex-col justify-center">
          <h1 className='font-bold text-[56px] mb-4 w-[600px] line67'>Find the Perfect Lab for Your Needs</h1>
          <p className="mb-5">Book your laboratory tests online and get fast, accurate results</p>
          <div className="">
              <button className='bg-black text-white border-[black] py-2 px-4 mr-2 rounded-[10px]'>Search</button>
              <button className='bg-transparent text-black border border-[black] py-2 px-4 rounded-[10px]'>Learn More</button>
          </div>
        </div>
        </div>
      </section>
      <section className="">
        <div className="bg-slate-300 flex gap-[100px] justify-between items-center py-[70px] px-[90px]">
          <div className="w-[50%] mr-[60px]">
            <h1 className='font-bold text-[40px] mb-4 line48 '>Find and Book Laboratory Tests with Ease</h1>
            <p className=" text-[17px]">Discover a wide range of laboratory tests and conviently book them online</p>
            <div className="flex justify-between gap-8 mt-10">
              <div className="">
                <div className='text-[40px]'>
                <RiBox2Line/>
                 </div>
                <h1 className='font-bold text-[20px] mb-5'>Convenient</h1>
                <p className="text-[15px]">Search for tests, compare prices and book appointments at your preferred laboratory</p>
              </div>
              <div className="">
                <div className='text-[40px]'>
                <RiBox2Line/>
                </div>
                <h1 className='font-bold text-[20px] mb-5'>Efficient</h1>
                <p className="text-[15px]">Save time and effort by easily booking your laboratory tests online</p>
              </div>
            </div>
          </div>
          <div className="w-[500px] h-[600px] bg-red-600">
            
            <img src="" alt="" />
          </div>
        </div>
      </section>
      <section className="">
        <div className="bg-slate-500 flex gap-[100px] justify-between items-center py-[70px] px-[90px]">
        <div className="w-[500px] h-[600px] bg-red-600">
            <img src="" alt="" />
          </div>
          <div className="w-[50%] ml-[60px]">
            <h1 className='font-bold text-[40px] mb-4 line48 '>Save Time and Access Test Results Online with Our Laboratory Booking Website</h1>
            <p className=" text-[17px]">Our laboratory booking website offers a convenient solution for patients, allowing them to save time and access their test results online.</p>
            <div className="flex items-center gap-2 mt-[16px]">
            <RiBox2Line/>
              <p className='text-[14px]'>Time-saving booking process for labratory appointments.</p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <RiBox2Line/>
              <p className='text-[14px]'>Convenient access to test results through our online platform.</p>
            </div>
            <div className="flex items-center gap-2">
            <RiBox2Line/>
              <p className='text-[14px]'>Streamlined experience for patients seeking laboratory services.</p>
            </div>
          </div>
          
        </div>
      </section>
      
      <section className="">
        <div className="bg-slate-400 py-[60px] px-[90px] text-center">
          <h1 className="font-bold text-[3rem] mb-6 ">Book Your Lab Tests Online</h1>
            <p className="mb-4">Find a laboratory near you and schedule your tests conveniently</p>
            <div className="">
              <button className='bg-black text-white border-[black] py-2 px-4 mr-2 rounded-[10px]'
              onClick={handleSignup}
              >  Register</button>
              <button className='bg-transparent text-black border border-[black] py-2 px-4 rounded-[10px]'>Learn More</button>
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
        <section>
        <div className="bg-slate-300 flex justify-between py-[100px] px-[90px]">
          <div className="">
            <h1 className="font-bold text-5xl mb-4">Discover the Lab Booking Experience</h1>
            <p className=''>Find the right laboratory for your needs today</p>
          </div>
          
          <div className="">
            <button className='bg-black text-white border-[black] py-2 px-4 mr-2 rounded-[10px]'
            onClick={handleSignup}
            >Register</button>
            <button className='bg-transparent text-black border border-[black] py-2 px-4 rounded-[10px]'>Contact</button>
          </div>
        </div>
        </section>
    </div>
  )
}

export default MediQuestLandingPage