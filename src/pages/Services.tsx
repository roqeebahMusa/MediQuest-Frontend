import React from 'react'
import Service from "../assets/services.jpg";
import bloodTest from "../assets/blood-test-solid-svgrepo-com.svg"
import sugar from "../assets/sugar-blood-level-diabetes-svgrepo-com.png"
import allergy from "../assets/allergy-test.png"
import xRay from "../assets/x-ray.png"
import std from "../assets/std.png"
import preg from "../assets/pregnancy-test.png"
import ctScan from "../assets/ct-scan.png"
import typhoid from "../assets/typhoid-fever.png"

const Services:React.FC = () => {
  return (
    <div className='w-[100%] min-h-[100vh] bg-[#0D3859]'>
       <section className='w-[100%] h-[89vh] bg-[#0D3859] sm:h-[89vh]'>
        <div className='w-[100%] h-[580px] bg-cover bg-center sm:h-[500px]'>

          <section className='px-[90px] w-[50%] h-[40%] flex flex-col justify-center'>
            <h1 className='text-white font-bold mb-2 text-6xl'>MediQuest</h1>

            <div className=''>
              <h1>Our Services</h1>
              <p></p>
            </div>
          </section>

        </div>
       </section>

       <section className='w-[100%] min-h-[100vh] bg-[#0D3859] px-[90px] rounded-[6px] flex flex-col justify-center items-center sm:w-[100%] sm:px-[16px] sm:min-h-[100vh]'>

        <section className=''>
          <h1 className='text-white font-bold mb-2 text-[35px]'>Our Laboratory Services</h1>
        </section>

        <section className='w-[100%] h-[60vh] flex justify-between items-center sm:w-[100%] sm:min-h-[100vh] sm:flex sm:flex-col sm:justify-between sm:items-center'>
             <div className='w-[20%] h-[80%] bg-white rounded-[6px] flex flex-col px-[20px] justify-around items-center sm:w-[100%] sm:h-[45%]'>

              <div className='w-[100%] h-[50%] flex flex-col justify-center gap-3'>
                  <img className='w-[40%]' src={bloodTest} alt="Blood" />
                  <p className="text-[23px] font-semibold">Blood Tests</p>
              </div>
              <div className='w-[100%] h-[50%] flex justify-center items-center'>
                <p className=''>A lab analysis of things that may be found in your blood,also the functioning of certain organs like kidney,heart,tyhroid, e.t.c</p>
                {/*  examination of a blood sample used to check for a variety of things,including the functioning of certain organs (such as the liver, kidneys,and heart),and certain genetic disorders, as well as to assess an individual’s general health. */}
              </div>
             </div>

         <div className='w-[20%] h-[80%] bg-white rounded-[6px] flex flex-col px-[20px] justify-around items-center sm:w-[100%] sm:h-[45%]'>

              <div className='w-[100%] h-[50%] flex flex-col justify-center gap-3'>
                  <img className='w-[40%]' src={sugar} alt="Blood" />
                  <p className="text-[23px] font-semibold">Sugar Tests</p>
              </div>
              <div className='w-[100%] h-[50%] flex justify-center items-center'>
                <p className=''>A blood sugar test measures the  amount of sugar in a small sample of blood, usually from your fingertip, that you place on a disposable test strip</p>
              </div>
             </div>

        <div className='w-[20%] h-[80%] bg-white rounded-[6px] flex flex-col px-[20px] justify-around items-center sm:w-[100%] sm:h-[45%]'>

             <div className='w-[100%] h-[50%] flex flex-col justify-center gap-3'>
                <img className='w-[40%]' src={allergy} alt="Blood" />
                <p className="text-[25px] font-semibold">Allergy Tests</p>
              </div>

            <div className='w-[100%] h-[50%] flex justify-center items-center'>
              <p className=''>Allergy tests are used to find out which substances cause a person to have an allergic reaction</p>
            </div>
        </div>

        <div className='w-[20%] h-[80%] bg-white rounded-[6px] flex flex-col px-[20px] justify-around items-center sm:w-[100%] sm:h-[45%]'>

            <div className='w-[100%] h-[50%] flex flex-col justify-center gap-3'>
                <img className='w-[40%]' src={xRay} alt="Blood" />
                <p className="text-[25px] font-semibold">X-Rays & Scans</p>
            </div>
            <div className='w-[100%] h-[50%] flex justify-center items-center'>
            <p className=''>x-rays to detect dislocations and fractures of bones as well as detect cancers and pneumonia</p>
            </div>
        </div>

        </section>

        <section className='w-[100%] h-[60vh] flex justify-between items-center sm:w-[100%] sm:min-h-[100vh] sm:flex sm:flex-col sm:justify-between sm:items-center'>
             <div className='w-[20%] h-[80%] bg-white rounded-[6px] flex flex-col px-[20px] justify-around items-center sm:w-[100%] sm:h-[45%]'>

              <div className='w-[100%] h-[50%] flex flex-col justify-center gap-3'>
                  <img className='w-[40%]' src={std} alt="Blood" />
                  <p className="text-[23px] font-semibold">STD Tests</p>
              </div>
              <div className='w-[100%] h-[50%] flex justify-center items-center'>
                <p className=''>Lorem ipsum dolor adipisicing elit. Alias, assumenda! Delectus necessit corrupti minima vel maiores vero molestias?</p>
              </div>
             </div>

         <div className='w-[20%] h-[80%] bg-white rounded-[6px] flex flex-col px-[20px] justify-around items-center sm:w-[100%] sm:h-[45%]'>

              <div className='w-[100%] h-[50%] flex flex-col justify-center gap-3'>
                  <img className='w-[40%]' src={preg} alt="Blood" />
                  <p className="text-[20px] font-semibold">Pregnancy & Infertility Tests</p>
              </div>
              <div className='w-[100%] h-[50%] flex justify-center items-center'>
                <p className=''>Pregnancy and Fertility Testis used to detect ovulation and/or to diagnose infertility -an inability to reproduce by natural means</p>
              </div>
             </div>

        <div className='w-[20%] h-[80%] bg-white rounded-[6px] flex flex-col px-[20px] justify-around items-center sm:w-[100%] sm:h-[45%]'>

             <div className='w-[100%] h-[50%] flex flex-col justify-center gap-3'>
                <img className='w-[40%]' src={ctScan} alt="Blood" />
                <p className="text-[23px] font-semibold">CT Scans</p>
              </div>

            <div className='w-[100%] h-[50%] flex justify-center items-center'>
              <p className=''>A diagnostic imaging procedure that uses a combination of X-rays and computer technology to produce images of the inside of the body.</p>
            </div>
        </div>

        <div className='w-[20%] h-[80%] bg-white rounded-[6px] flex flex-col px-[20px] justify-around items-center sm:w-[100%] sm:h-[45%]'>

            <div className='w-[100%] h-[50%] flex flex-col justify-center gap-3'>
                <img className='w-[40%]' src={typhoid} alt="Blood" />
                <p className="text-[23px] font-semibold">Typhoid Tests</p>
            </div>
            <div className='w-[100%] h-[50%] flex justify-center items-center'>
            <p className=''>A diagnosis of typhoid fever -also enteric fever can usually be confirmed by analysing samples of blood, poo, or pee.</p>
            </div>
        </div>

        </section>
       
       </section>

    </div>

  )
}

export default Services