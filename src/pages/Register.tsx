import React, {useState, } from 'react'
import {Link, useNavigate} from "react-router-dom"
import ShowToast from '../component/common/ShowToast';
import { RegisterMediUser } from '../utils/ApiCalls';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

const Register:React.FC = () => {
  const Navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [spin, setSpin] = useState(false)
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		password: "",
	});
  const togglePassword = ()=>{
    setPasswordVisible(!passwordVisible)
  }
	const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};
 
  const RegisterUserSubmit = async () => {
		try {
      setSpin(false)
      console.log("before api call");
			const res = await RegisterMediUser(formData);
      console.log("after api call");
			ShowToast(true, "Registration Successfull");
			Navigate("/login");
      console.log("response", res)
		} catch (error:any) {
			return error;
		}
	};
  return (
    <div className='bg-slate-300 h-screen w-screen flex justify-center items-center sm:bg-white md:bg-white'>
       <div className="bg-slate-50 flex rounded-[10px] sm:bg-transparent sm:w-screen md:bg-transparent md:w-screen">
        <div className='flex flex-col gap-4 mx-10 justify-center sm:mt-0 md:mt-0 sm:w-screen sm:mx-4 md:w-screen md:mx-6'>
            <h1 className=' text-center text-[50px] text-[#177eb1] font-extrabold  sm:text-[45px]'>MediQuest</h1>
            <h2 className='text-black text-center text-[35px] sm:text-[20px]'>Sign Up</h2>
           <form 
           
            onSubmit={(e)=>{
              e.preventDefault()
              RegisterUserSubmit()
            }}>
           <div className="mx-6 mb-2">
            <input type="text"
            onChange={onChangeValue}
            required 
            className="bg-white text-black placeholder:text-slate-400 outline-[#4EB2E4] p-4 h-[55px] w-[400px] border-slate-400 border-[1px] rounded-[30px] sm:h-[45px] sm:w-full md:h-[45px] md:w-full" 
            placeholder='FullName'/>
            </div>
            
            <div className="mx-6 mb-2">
            <input type="email"
            onChange={onChangeValue}
            required  
            className="bg-white text-black placeholder:text-slate-400 outline-[#4EB2E4] p-4 h-[55px] w-[400px] border-slate-400 border-[1px] rounded-[30px] sm:h-[45px] sm:w-[100%] md:h-[45px] md:w-full" 
            placeholder='Email'/>
            </div>

            <div className="mx-6 mb-2 flex items-center justify-between border-slate-400 border-[1px] w-[400px] rounded-[30px] outline-[#4eb2e4]  ">
            <input type={passwordVisible? "text": "password"} 
            required
             onChange={onChangeValue}
            className="bg-transparent text-black placeholder:text-slate-400  p-4 h-[55px] rounded-[30px]  outline-none sm:h-[45px] sm:w-full md:h-[45px] md:w-full " 
            placeholder='Password' />
              <div className="pr-4"onClick={togglePassword}>
                {passwordVisible?<div className='text-black'>
                  <MdVisibility/>
                </div> :
                <div className='text-black'>
                  <MdVisibilityOff/>
                </div>}
              </div>
            </div>
            <div className="mx-6 mb-2">
            <input type="password"
            // value={formData.password}
            onChange={onChangeValue}
            required  
            className="bg-white text-black placeholder:text-slate-400 outline-[#4EB2E4] p-4 h-[55px] w-[400px] border-slate-400 border-[1px] rounded-[30px] sm:h-[45px] sm:w-full md:h-[45px] md:w-full" 
            placeholder='Confirm Password' />
            </div> 
            <div className="mx-6 mt-8">
                <button type='submit' className='bg-[#0D3859] text-white rounded-[30px] h-[55px] w-[400px]  sm:h-[45px] sm:w-full md:h-[45px] md:w-full'>Register</button>
            </div>
            <div className="">
             <p className=' text-black text-center'>Already have an account? 
                 <Link 
                    to={`/login`}
                    style={{
                        textDecoration:"none",
                        color: "#177eb1",
                    }} ><span className='ml-2'>Login</span>
                 </Link> </p>
            </div>
           </form>
                
        </div>
        <div className='bg-[#0D3859] h-[650px] w-[500px] m-auto rounded-[10px] sm:hidden md:hidden'>
        </div>
       </div>
    </div>
  )
}

export default Register