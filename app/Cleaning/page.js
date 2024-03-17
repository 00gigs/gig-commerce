'use client'
import React from 'react'
import Navbar from '../component/Navbar'
import Link from 'next/link'; // Import Link from Next.js
const Page = () => {

 


  return (
    <div className='h-100 bg-slate-200'>
        <Navbar/>
        <div className='text-black'>
          <Link href='/Booking' className="p-3 border-black flex justify-center bg-green-200 font-bold w-full  mt-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold" > Book HouseKeeping services today </Link>
<div className=' border-black mx-8  p-3 text-center mt-4'>
  <div className='flex-1 mb-8'>
<img className='float-right w-48 h-40 object-cover mx-3 my-2 border-2 border-black rounded' src='https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
  <h1 className='font-bold text-sm mb-4'>"HANZ OFFERS PREMIUM CLEANING SERVICES, EMBRACING UNMATCHED DEDICATION TO THOROUGHNESS AND EXCELLENCE."</h1>
  <p className='font-light text-[26px]'>Transform your home with Hanz, your elite choice for maid services. From thorough dusting to sparkling floors, our expertise in domestic tidiness and order brings unparalleled cleanliness to your living spaces. Trust Hanz to rejuvenate your home into a flawless, inviting sanctuary. Let us fulfill your cleaning desires with meticulous attention and zeal.</p>
  </div>
</div>   
<div>
<Link href='/Booking' className=" p-3 flex justify-center bg-green-200 font-bold w-full  mt-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold" > Book HouseKeeping services today </Link>
</div>
<div className='border-b-4 mb-2 mt-2 text-center h-screen mx-8 py-2  border-black'>
<h1 className='font-bold text-sm mb-4'>"EXPERT CLEANING TEAMS PROVIDE AFFORDABLE, HIGH-QUALITY SERVICES FOR YOUR HOME OR OFFICE."</h1>
<p className='font-light text-[26px]'>At Hanz, we bridge the gap between you and unparalleled residential and commercial cleaning excellence. Our dedicated team of professional cleaners and maids is ready to tackle any cleaning challenge, ensuring your living and working environments are not just cleaned, but transformed into pristine, welcoming spaces. Our services include:</p>
  <img className='float-left w-48 h-52 object-cover mx-3 my-2 border-4 border-black rounded' src='https://images.unsplash.com/photo-1686828751885-040f0a0fb77a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
  <ul className='text-[20px] italic'>
    <li>- Thorough cleaning and sanitization </li>
    <li>- Expert maid and janitorial services</li>
    <li>- Deep cleaning for homes and offices</li>
    <li>- Eco-friendly cleaning solutions</li>
    <li>- Specialized carpet and upholstery cleaning </li>
    <li>- Window washing and blind cleaning </li>
    <li>- Detailed kitchen and bathroom cleaning
...and much more!</li>
  </ul>
 <p className='font-medium text-lg'>Let Hanz connect you with the cleaning expertise you need to maintain immaculate environments, reflecting your high standards and preferences.</p>
 
</div>

            </div>
            </div>
  )
}

export default Page
