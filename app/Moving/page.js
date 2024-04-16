'use client'
import React from 'react'
import Navbar from '../component/Navbar'
import Link from 'next/link'; // Import Link from Next.js
const Page = () => {
  return (
    <div className='h-full bg-slate-100'>
        <Navbar/>
        <div className='text-black'>
         <p className="italic  bg-clip-text text-transparent bg-gradient-to-l from-amber-200 via-teal-300 to-amber-200   font-bold tracking-widest text-center m-2 text-xl	">Hanz</p>
          <Link href='/Booking' className="shadow-xl p-3 border-black flex justify-center bg-amber-600 font-bold w-full  mt-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold " >
        
             <span className="moving-text">Request Local Movers Today </span>
             </Link>
<div className=' border-black mx-8  p-3 text-center mt-4'>
  <div className='flex-1 mb-8'>
<img className='float-right w-48 h-40 object-cover mx-3 my-2 border-2 border-black rounded' src='https://images.pexels.com/photos/4246266/pexels-photo-4246266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
  <h1 className='font-bold text-sm mb-4 noto-sans-indic'>"HANZ DELIVERS RELIABLE MOVING SERVICES WITH A FOCUS ON EFFICIENCY AND PRECISION."</h1>
  <p className='font-light text-[26px] noto-znamenny'>Make your move hassle-free with Hanz, your dependable choice for residential and commercial moving services. From loading and unloading to careful packing and unpacking, our experienced team handles every detail of your move with precision and care. Trust Hanz to manage your relocation smoothly and securely.</p>
  </div>
</div>   
<div>
<Link href='/Booking' className="shadow-xl p-3 flex justify-center bg-amber-600 font-bold w-full  mt-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold" > 
<span className="moving-text">Request Local Movers Today </span>
</Link>
</div>
<div className='mb-2 mt-2 text-center  mx-8 py-2  border-black'>
<h1 className='font-bold text-sm mb-4 noto-sans-indic'>"OUR SKILLED MOVERS PROVIDE AFFORDABLE, QUALITY SERVICES FOR YOUR MOVE."</h1>
<p className='font-light text-[26px] noto-znamenny'>At Hanz, we help make your move seamless and stress-free. Our team of skilled movers expertly manages each step of the process, ensuring your belongings are safely transported and properly settled in your new space. Our comprehensive moving services include:</p>
  <img className='float-left w-48 h-52 object-cover mx-3 my-2 border-4 border-black rounded' src='https://images.pexels.com/photos/5025512/pexels-photo-5025512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
  <ul className='text-[20px] italic noto-sans-indic'>
    <li>- Loading and Unloading: Efficiently moving items onto and off of a truck. </li>
    <li>- Packing and Unpacking: Carefully packing and unpacking items during a move.</li>
    <li>- Organizing: Helping arrange items in the new location for ease of access.</li>
    <li>- Furniture Assembly and Disassembly: Assembling and disassembling furniture for transportation.</li>
    <li>- Furniture Placement: Helping set up furniture in the new location to the customer's specifications.</li>
  </ul>
 <p className='font-medium text-lg noto-znamenny'>"Let Hanz provide you with cost-effective, reliable moving solutions that meet your needs and exceed your expectations. Enjoy a smooth and stress-free moving experience with our team."</p>
 
</div>

            </div>
            </div>
  )
}

export default Page
