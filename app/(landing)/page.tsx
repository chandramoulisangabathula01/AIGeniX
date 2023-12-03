import  Link  from 'next/link'
import Image from 'next/image'


export default function LandingPage(){
  return(

    
    <main className='w-screen h-screen relative '>
     
     apt install git

    <div className='flex items-center w-full h-full bg-cover bg-center' style={{backgroundImage:"url(/main-bg.webp)"}}>
      <div className=' grid justify-items-center md:pl-40 pb-56 md:pb-20 flex-col gap-5 z-[10] max-w-[850px]'>
        
        <h1 className='  text-[50px] text-white font-semibold w-full h-full sm:3xl md:text-4xl lg:text-6xl xl:text-8xl'>
          Make anything possible with 
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
            {" "} AIGeni Studio
          </span>
        </h1>
          <p className='text-gray-200  text-md hidden md:block'>
          Unleash Your Creativity, Redefine the Possible and Transforming Visions into Reality with AI-Powered Brilliance
          </p>
          
      </div>
    </div>
          <div className='absolute bottom-0 right-0 z-[10] "'>
            <Image src="/horse.png" alt="horse" height={300} width={300} className='absolute invisible lg:visible right-55 top-40 '/>

            <Image src="/cliff.webp" alt="cliff" height={480} width={480}  className='invisible lg:visible'/>
          </div>
          <div className='absolute bottom-0 z-[5] w-full h-auto'>
              <Image src="/trees.webp" alt="trees" width={2000} height={2000} className='w-full h-full'/>
          </div>
          <Image src="/stars.png" alt="horse" height={300} width={300} className='absolute left-0 top-0 z-[10]'/>
  
    </main>
  )
}