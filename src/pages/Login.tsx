import {Link} from "react-router-dom"
import login from "../assets/MediQuestLAB/verify.jpg"

const Login:React.FC = () => {
  return (
    <div className='bg-slate-300 h-[100vh] w-screen flex justify-center items-center sm:bg-white md:bg-white' >
       <div className="bg-slate-50 flex rounded-[10px] sm:bg-transparent sm:w-screen md:bg-transparent md:w-screen">
       <div className='bg-[#0D3859] h-[650px] w-[500px] m-auto rounded-[10px] sm:hidden md:hidden'>
       <img src={login} alt="" />
       </div>
        <div className='flex flex-col gap-4 mx-10 mt-10 sm:mt-0 md:mt-0 sm:w-screen sm:mx-0 md:w-screen md:mx-0'>
            <h1 className='text-[#177eb1] text-center text-[50px] font-extrabold  sm:text-[45px]  '>MediQuest</h1>
            <h2 className='text-black text-center text-[35px] sm:text-[20px] md:text-[20px] '>Login to your account</h2>
            <div className="mx-4">
            <input type="email" 
            className="bg-white text-black placeholder:text-slate-400 outline-[#4EB2E4] p-4 h-[60px] w-[400px] border-slate-400 border-[1px] rounded-[30px] sm:h-[40px] sm:w-full md:h-[40px] md:w-full" 
            placeholder='Email' />
            </div>
            <div className="mx-4">
            <input type="password" 
            className="bg-white text-black placeholder:text-slate-400 outline-[#4eb2e4] p-4 h-[60px] w-[400px] border-slate-400 border-[1px] rounded-[30px] sm:h-[40px] sm:w-full md:h-[40px] md:w-full " 
            placeholder='Password' />
            </div> 
            <div className="mx-6">
                <Link 
                    to={`/forgotpassword`}
                    style={{
                        textDecoration:"none",
                        color: "#177eb1",
                        transition: "all ease-in 300ms"
                    }}
                    >
                <p className=''>Forgot password?</p>
                </Link>
            </div>
            <div className="mx-4 mt-8  ">
                <button className='bg-[#0D3859] rounded-[30px] h-[60px] w-[400px]  custom-hover sm:h-[40px] sm:w-full md:h-[40px] md:w-full'>Login</button>
            </div>
            <div className="">
             <p className=' text-black text-center'>Dont have an account? 
                 <Link 
                    to={`/register`}
                    style={{
                        textDecoration:"none",
                        color: "#177eb1",
                        transition: "ease-in 300ms"
                    }} ><span className='ml-2'>Signup</span>
                 </Link> </p>
            </div>
            
                
        </div>
       </div>
    </div>
  )
}

export default Login