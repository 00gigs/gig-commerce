'use client'
import React from 'react'
import Navbar from '../component/Navbar'
import Link from 'next/link'; // Import Link from Next.js
const Page = () => {
  return (
    <div className='h-100 bg-slate-200'>
        <Navbar/>
        <div className='text-black'>
         <p className="italic underline text-indigo-200 font-bold tracking-widest text-center m-2 text-xl	">Hanz</p>
          <Link href='/Booking' className="shadow-xl p-3 border-black flex justify-center bg-amber-600 font-bold w-full  mt-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold " >
        
             <span className="moving-text">Book Moving services today </span>
             </Link>
<div className=' border-black mx-8  p-3 text-center mt-4'>
  <div className='flex-1 mb-8'>
<img className='float-right w-48 h-40 object-cover mx-3 my-2 border-2 border-black rounded' src='https://images.pexels.com/photos/4246266/pexels-photo-4246266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
  <h1 className='font-bold text-sm mb-4'>"HANZ PROVIDES SUPERIOR MOVING SERVICES, COMMITTED TO UNRIVALED PRECISION AND EXCELLENCE IN RELOCATIONS."</h1>
  <p className='font-light text-[26px]'>Relocate with ease using Hanz, your premier choice for moving services. From secure packing to smooth transportation, our expertise in home and office relocations offers unparalleled peace of mind. Trust Hanz to transition your belongings into their new space with precision and care. Let us meet your moving needs with unwavering dedication and efficiency.</p>
  </div>
</div>   
<div>
<Link href='/Booking' className="shadow-xl p-3 flex justify-center bg-amber-600 font-bold w-full  mt-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold" > 
<span className="moving-text">Book Moving services today </span>
</Link>
</div>
<div className='border-b-4 mb-2 mt-2 text-center h-screen mx-8 py-2  border-black'>
<h1 className='font-bold text-sm mb-4'>"OUR MOVING EXPERTS PROVIDE AFFORDABLE, TOP-NOTCH SERVICES FOR RESIDENTIAL AND COMMERCIAL RELOCATIONS."</h1>
<p className='font-light text-[26px]'>At Hanz, we make your residential and commercial moving journeys seamless and stress-free. Our team of expert movers is equipped to manage every aspect of your move, ensuring every item is not just relocated, but securely and efficiently transitioned to your new setting. Our comprehensive moving solutions include:</p>
  <img className='float-left w-48 h-52 object-cover mx-3 my-2 border-4 border-black rounded' src='https://images.pexels.com/photos/5025512/pexels-photo-5025512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
  <ul className='text-[20px] italic'>
    <li>- Expert packing and careful unpacking </li>
    <li>- Efficient and secure loading and unloading</li>
    <li>- Reliable transportation for both short and long distances</li>
    <li>- Tailored moving strategies for a smooth experience</li>
    <li>- Careful handling and transport of delicate and bulky items</li>
    <li>- Strategic setup and arrangement in your new space</li>
    <li>- Safe handling and setup of electronics and appliances
...and much more!</li>
  </ul>
 <p className='font-medium text-lg'>Let Hanz connect you with the moving expertise you need to ensure a smooth and stress-free transition, meeting your high expectations and needs.</p>
 
</div>

            </div>
            </div>
  )
}

export default Page
