
import React from 'react';
// import Navbar1 from '@/components/Navbar1';
import { SignIn } from '@clerk/nextjs';
import '@/components/twCssComponents.css';
import Image from 'next/image'
import Link from 'next/link'

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen flex items-center lg:justify-end md:justify-center w-full h-full overflow-hidden object-cover transition-opacity duration-300 pointer  visible opacity-100">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="object-cover w-full h-full absolute top-0 left-0"
      >
        <source src="/Stylevideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
      
      {/* <Navbar1 /> */}
        <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-5 md:px-10'>
          <div className=' flex flex-row gap-3 items-center'>
            
            <Image 
              src="/xlogo.png"
              alt="logo"
              width={45}
              height={45}
              className="w-full h-full object-contain rounded-full"
            />
            <h1 className='align-center items-center  hidden sm:block text-center flex text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 mt-5'>AIGeniX Studio</h1>

          </div>
          
          
        <div className='flex relative lg:mr-20 sm:mr-1'>
        
          
          <Link className=" bg-transparent   hover:border-transparent  text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 font-semibold rounded-lg  px-5 py-2.5 text-center me-2 mb-2" href={'/sign-in'}>Login</Link>
          <Link className=" bg-transparent   hover:border-transparent  text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 font-semibold rounded-lg  px-5 py-2.5 text-center me-2 mb-2" href={'/sign-up'}>Register</Link>
          
        
        
        {/* <h1 className="relative bg-transparentr4 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black text-white  dark:bg-white-900 rounded-md group-hover:bg-opacity-0">
              Purple to pink
          </span>
        </h1> */}
      </div>
        
        
      </div>
       
          <div className='flex hidden sm:block justify-items-start md:pl-40 pb-56 md:pb-20 flex-col gap-5 z-[10] max-w-[1050px]'>
            <h1 className='text-[50px] text-white font-semibold w-full h-full sm:3xl md:text-4xl lg:text-6xl xl:text-8xl'>
              Elevate Your Creativity with 
              <span className='text-transparent bg-clip-text pt-3 bg-gradient-to-r from-purple-500 to-cyan-500'>
                {" "} AIGeniX Studio
              </span>
            </h1>
          </div>


        <div className=" relative z-10 row-start-1 col-start-6 xl:col-start-7 col-span-7 xl:col-span-6">
          <SignIn />
      </div>
      


      {children}
    </div>
  );
};

export default Page;
