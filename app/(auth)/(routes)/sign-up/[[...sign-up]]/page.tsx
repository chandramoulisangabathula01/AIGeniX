
import React from 'react';
import Navbar1 from '@/components/Navbar1';
import { SignUp } from '@clerk/nextjs';
import '@/components/twCssComponents.css';

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
    
      
      <Navbar1 />
      
        <div className='flex hidden sm:block justify-items-start md:pl-40 pb-56 md:pb-20 flex-col gap-5 z-[10] max-w-[1050px]'>
            <h1 className='text-[50px] text-white font-semibold w-full h-full sm:3xl md:text-4xl lg:text-6xl xl:text-8xl'>
              Elevate Your Creativity with 
              <span className='text-transparent bg-clip-text pt-3 bg-gradient-to-r from-purple-500 to-cyan-500'>
                {" "} AIGeniX Studio
              </span>
            </h1>
          </div>

      <div className=" relative z-10 row-start-1 col-start-6 xl:col-start-7 col-span-7 xl:col-span-6">
        <SignUp />
      </div>

      {children}
    </div>
  );
};

export default Page;
