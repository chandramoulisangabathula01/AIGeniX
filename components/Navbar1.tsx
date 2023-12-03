// eslint-disable-next-line react/jsx-no-undef
import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Link from 'next/link'
// import { Link } from 'lucide-react'

const Navbar1 = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-5 md:px-10'>
        <div className=' flex flex-row gap-3 items-center'>
          
          <Image 
            src="/xlogo.png"
            alt="logo"
            width={45}
            height={45}
            className="w-full h-full object-contain rounded-full"
          />
          <h1 className='align-center items-center hidden sm:block  text-center flex text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 mt-5'>AIGeniX Studio</h1>

        </div>
        {/* <div className='flex justify-items-end gap-5'>
          <h1 className='rounded-[20px] group relative bg-purple-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]  bg-gradient-to-r from-red-500 to-purple-500 mt-5'>LogIn</h1>
          <h1 className='rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] bg-gradient-to-r from-red-500 to-purple-500 mt-5'>SignUp</h1>
          <h1  className="text-white bg-gradient-to-r from-red-500 to-purple-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Purple to Pink</h1>
        </div> */}
        
      <div className='flex relative lg:mr-20 sm:mr-1'>
        
          +<Link className=" bg-transparent   hover:border-transparent  text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 font-semibold rounded-lg  px-5 py-2.5 text-center me-2 mb-2" href={'/sign-in'}>Login</Link>
          <Link className=" bg-transparent   hover:border-transparent  text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 font-semibold rounded-lg  px-5 py-2.5 text-center me-2 mb-2" href={'/sign-up'}>Register</Link>
        
        
        {/* <h1 className="relative bg-transparentr4 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black text-white  dark:bg-white-900 rounded-md group-hover:bg-opacity-0">
              Purple to pink
          </span>
        </h1> */}
      </div>
        
        
    </div>
    
  )
}

export default Navbar1