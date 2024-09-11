'use client'
import React from 'react'
import Navbar from '../component/Navbar'
import Link from 'next/link'; // Import Link from Next.js
const Page = () => {
  return (
    <div className='h-full '>
        <Navbar/>
        <div className='text-black'>
         <p className="italic  bg-clip-text text-transparent bg-gradient-to-l from-amber-200 via-teal-300 to-amber-200   font-bold tracking-widest text-center m-2 text-xl	">Hanz</p>
          <Link href='/Booking' className="shadow-xl p-3 border-black flex justify-center bg-amber-600 font-bold w-full  mt-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold " >
        
             <span className="moving-text">Request Local Movers Today </span>
             </Link>
<div className=' border-black mx-8  p-3 text-center mt-4'>
  <div className='flex-1 mb-8'>
<img className='float-right w-48 h-40 object-cover mx-3 my-2 border-2 border-black rounded' src='https://images.pexels.com/photos/4246266/pexels-photo-4246266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
  <h1 className='align-middle font-bold text-sm mb-4 noto-sans-indic capitalize text-[#43d445d4] p-2 border-b-4 border-gray-500'>Reliable Moving Services for Property Managers, Homeowners, and Renters in Baltimore, MD</h1>
  <p className='font-light text-[26px] noto-znamenny'>At Hanz Home-Solutions, we provide dependable and efficient moving services tailored for property managers, homeowners, renters, and real estate investors in the Baltimore, MD area. Whether you’re moving into a new home, relocating an office, or managing tenant move-ins/outs, our experienced team offers affordable, high-quality moving services to make your transition smooth and stress-free.</p>
  </div>
</div>   
<div>
<Link href='/Booking' className="shadow-xl p-3 flex justify-center bg-amber-600 font-bold w-full  mt-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold" > 
<span className="moving-text">Request Local Movers Today </span>
</Link>
</div>
<div className='mb-2 mt-2 text-center  mx-8 py-2  border-black'>
<h2 className='font-bold text-sm mb-4 noto-sans-indic'>Hassle-Free Moving Services for Homes and Businesses</h2>
<p className='font-light text-[26px] noto-znamenny'>Our skilled team at Hanz is here to make your next move as seamless as possible. From loading and unloading to packing and unpacking, we handle every detail of your move with efficiency and care. Whether you’re moving locally or relocating your business, trust Hanz to get your belongings safely from one location to another. We specialize in providing cost-effective, reliable solutions for residential and commercial moving.</p>
  <img className='float-left w-48 h-52 object-cover mx-3 my-2 border-4 border-black rounded' src='https://images.pexels.com/photos/5025512/pexels-photo-5025512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
 <h3 className='font-light text-[16px] italic  rounded-xl noto-znamenny bg-[#31ad33d4] p-2 border-b-4 border-gray-500'>Moving Services We Provide</h3> 
  <ul className='text-[20px] italic noto-sans-indic'>
    <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">Loading and Unloading: Expertly moving your items onto and off of the truck with precision.</li>
    <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">Packing and Unpacking: Careful packing of your items to prevent damage and unpacking them upon arrival.</li>
    <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">Organizing: Helping arrange items in your new space for convenient access.</li>
    <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">Furniture Assembly and Disassembly: We handle the assembly and disassembly of your furniture for easy transport.</li>
    <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">Furniture Placement: Our team ensures your furniture is arranged exactly to your specifications in your new location.</li>
  </ul>
<h4 className='font-light text-[16px] italic  rounded-xl noto-znamenny bg-[#31ad33d4] p-2 border-b-4 border-gray-500'>Why Property Managers and Homeowners Choose Hanz Home-Solutions</h4>
<ul>
  <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">Efficient Moving Services: We offer a full range of moving services, perfect for property managers needing fast turnover or homeowners moving into new spaces.</li>
  <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">Affordable Rates: We provide competitive pricing, ensuring that your move is not only smooth but also cost-effective.</li>
  <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">Skilled and Trustworthy Movers: Our team consists of experienced local movers who are trained to handle your belongings with care.
</li>
</ul>
 <h5 className='p-3 font-medium text-lg noto-znamenny mt-3 border-black border-4'> Let Hanz provide you with cost-effective, reliable moving solutions that meet your needs and exceed your expectations. Enjoy a smooth and stress-free moving experience with our team."</h5>
</div>

            </div>
            </div>
  )
}

export default Page
