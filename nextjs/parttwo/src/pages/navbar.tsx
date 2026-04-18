import Typewriter from 'typewriter-effect';
import Link from 'next/link';
// 'use client';

import { useRouter } from 'next/navigation';

export default function navigation(){
  const router = useRouter();
  const signUpScreen=()=>{
router.push('signUp')
  }
    return(
        <>
        <title>my site</title>
        <nav className="flex justify-between bg-orange-400 ">
        <div className="flex space-x-4 items-center">
        <div className="avatar  ">
            <div className="w-16 rounded-full relative ml-6">
                <img src="https://as1.ftcdn.net/jpg/09/74/33/60/1000_F_974336018_jEKoxXenZpjpCiKkNmPoNntUjBOER8SV.webp" alt=" logo" className="rounded-full"/>
           <span className="w-3 h-3 absolute bottom-0 right-0 bg-green-400 rounded-full border-2 border-white"></span>
            </div>
        </div>
       </div>
           {/* <img src="https://as1.ftcdn.net/jpg/09/74/33/60/1000_F_974336018_jEKoxXenZpjpCiKkNmPoNntUjBOER8SV.webp" alt="Sample Image" className="w-21 h-20 ml-5 rounded-full" /> */}
      <div className="flex gap-5">
      <Link className="text-white hover:text-blue-900  px-5 py-9 font-sans text-xl " href={'http://localhost:3000'}> Home</Link>
      <p className="text-white hover:text-blue-900 px-5 py-9 text-xl font-sans">About us</p>
      <p className="text-white hover:text-blue-900  px-5 py-9 text-xl font-sans">Contact us</p>
      <p className="text-white hover:text-blue-900  px-5 py-9 text-xl font-sans">Privacy Policy</p>
      </div>
      <div className="flex items-center gap-3">
      <button className=" ml-auto h-9 w-20 rounded bg-white text-orange-500 hover:text-blue-900 focus: ring-1 flex items-center justify-center  " onClick={signUpScreen}>Sign up</button>
      <button className=" ml-auto mr-5 h-9 w-20 rounded bg-white text-orange-500 hover:text-blue-900 focus: ring-1 flex items-center justify-center"> login</button>
      </div>
        </nav>
        <div className='flex flex-row'>
          <div className='flex flex-col ml-auto '>
          
            <div className='ml-auto mt-32 title-font text-medium text-orange-500 font-bold text-3xl'>
            <Typewriter 
          options={{
            strings: ['Hello,Foodies! taste the best', 'Welcome to my site!', 'Order your food!, And Enjoy'],
            autoStart: true,
            loop: true,
          }}
        />
            </div>
            
           <div className='mt-0'>
                <p>Welcome to Foodies Corner, where every </p>
                <p>bite is a delight! Indulge in our freshly prepared,</p>
                <p>mouthwatering dishes made with the finest ingredients.</p> 
                <p>Whether you're craving a quick snack or a hearty meal,</p>
                <p>we've got something to satisfy your taste buds—order now</p> 
                <p>and enjoy delicious flavors delivered to your doorstep!  </p>
                </div>
            </div>
       <div className="ml-auto h-96 w-96 py-16 mr-16 ">
       
        <img src="assets/image.png" alt="fruits" />
       </div>
       </div>
        </>
    )
}