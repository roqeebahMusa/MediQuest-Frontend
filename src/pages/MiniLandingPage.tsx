import {Link } from "react-router-dom"

const MiniLandingPage = () => {
  return (
    <div className='sm:pt-20 sm:custom-bg '>
        <div className='sm: my-12'>
            <h1 className='sm:text-center sm:text-[#177eb1] sm:font-extrabold  sm:text-[45px]'>MediQuest</h1>
        </div>
        <div className='sm:text-center sm:mx-3 leading-8'>
            <p className=''>How is your health today, Sounds like not good!
            Don't worry. Find your doctor online Book as you wish with <span className='sm:text-[#177eb1] font-semibold text-lg'>MediQuest </span> 
             we offer you a feel medical channeling service. make your appointment now.</p>
        </div>
        <div>
       <div className=" sm:text-center sm: mt-12 ">
                <Link to={'/login'}>
                <button className='bg-white text-[#0D3859] rounded-[30px] sm:h-[40px] sm:w-6/12 '>Login</button></Link>
        </div>
        <div className="mt-3 sm:text-center ">
                <Link to={'/register'}>
                <button className='bg-[#0D3859] rounded-[30px] sm:h-[40px] sm:w-6/12 '>Register</button>
                </Link>
        </div>
       </div>
    </div>
  )
}

export default MiniLandingPage