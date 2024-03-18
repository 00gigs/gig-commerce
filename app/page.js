'use client'
import Navbar from "./component/Navbar";
import Link from 'next/link'; 

export default function Home() {
  return (
    <div className="bg-slate-100 w-screen">
      {/**homepage whole */}
      <Navbar />
      <div className="grid text-center min-h-screen  text-black bg-slate-100 mx-6 p-2 border-4">  {/**content whole */}
        <div>{/**headBanner  */}
          <div className="text-[22px] font-bold italic tracking-wide">
            <h2 className="italic underline text-indigo-200 font-bold tracking-widest">Hanz</h2>
            `Your Premier All-In-One Home 🏡 Solutions Provider`
            </div>
        </div>{/**headBanner  */}
        {/* <div className="flex justify-center">
      <Link href='/Booking' className=" p-3 flex justify-center bg-green-200 rounded-xl shadow-xl font-bold w-1/3  m-3 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold" > "BOOK TODAY" </Link>
      </div> */}

<div className=" flex justify-center bg-gradient-to-r from-teal-200 via-slate-200 to-amber-200 mx-48 rounded-md">
      <Link className="bouncing-div bg-opacity-60 p-3 flex justify-center  rounded-xl shadow-2xl font-bold  m-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold"  href='/Booking'>
          <span className="block whitespace-nowrap">BOOK TODAY</span>
      </Link>
    </div>
        <div className="m-3">{/**text content  */}
          <p className="font-medium text-[20px] italic tracking-wide">In today's fast-paced world, managing property maintenance and home care needs can be a daunting task for homeowners in the Northeast region. Fortunately, Hanz offers a seamless solution with its comprehensive range of home services. From landscaping and general contracting to thorough cleaning and hassle-free moving, Hanz is your go-to platform for all-in-one home solutions. We ensure every service is delivered with unmatched quality and a personal touch.</p>
          <h1 className="font-bold text-[22px] mt-2 underline">Transform Your Outdoors with Hanz Landscaping</h1>
          <img className='float-right w-48 h-44 object-cover mx-3 my-2 border-2 border-black rounded' src='https://img.freepik.com/free-photo/unrecognizable-man-psushing-wheelbarrow-full-seedling_329181-20532.jpg?t=st=1710693774~exp=1710697374~hmac=c24e0cf1561ec782642004107a10258b4b92a064543fe993fd79e551d4aadb31&w=2000'/>
          <p className="font-light text-p[18px] tracking-tight">Dreaming of a lush garden or a bespoke outdoor living area? Look no further than Hanz for your landscaping needs. Our skilled contractors specialize in a wide range of services, from excavating and lawn mowing to mulching and strategic tree installation, ensuring your outdoor space is not just maintained, but thrives. Explore our Landscaping page to see how we can turn your vision into a stunning reality.</p>
          <h1 className="font-bold text-[22px] mt-2 underline">Build Your Vision with Hanz General Contracting</h1>
          <p className="font-light text-p[18px] tracking-tight">Whether it's foundational work, custom renovations, or intricate interior finishes, Hanz's general contracting services are designed to bring your project to life with exceptional attention to detail. Our team of experts bridges the gap between you and top-tier residential and commercial general contracting professionals, ensuring your project exceeds expectations. Visit our General Contractor page to discover how we can transform your space into a masterpiece.</p>
          <h1 className="font-bold text-[22px] mt-2 underline">Keep Your Home Spotless with Hanz Cleaning Services</h1>
          <img className='float-left w-48 h-40 object-cover mx-3 my-2 border-2 border-black rounded' src='https://img.freepik.com/free-photo/professional-cleaning-service-people-working-together-office_23-2150520596.jpg?t=st=1710694272~exp=1710697872~hmac=a293b65938a76b19a3acb69f9f6b6465c0a56f886be9bbc69b04b43db0702852&w=2000'/>
          <p className="font-light text-p[18px] tracking-tight">Maintaining a clean and tidy home is now more effortless than ever with Hanz's cleaning services. Our dedicated professionals are equipped to handle everything from routine housekeeping to deep cleaning tasks, providing you with a spotless living environment. Learn more about our comprehensive cleaning solutions and how we can make your home sparkle on our Cleaning page.</p>
          <h1 className="font-bold text-[22px] mt-2 underline">Move with Confidence with Hanz Moving Services</h1>
          <p className="font-light text-p[18px] tracking-tight">Relocating can be stressful, but with Hanz's moving services, you can enjoy a smooth and worry-free transition. Our team of expert movers is ready to handle every aspect of your move, from packing and loading to transportation and setup in your new space. Check out our Moving page for more information on how we can support your next move.</p>
        </div>{/**text content  */}
        <div className="flex justify-end gap-4">
      <table className="border-4 border-black m-4">{/**Table */}
        <thead>
          <tr className="border-4 border-black">
            <th className="border-r-4 border-black">Services</th>
            <th>Results</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-4 border-black">
            <td className="border-r-4 border-black">Landscaping</td>
            <td>Transform your outdoor space into a personal oasis with Hanz's landscaping services.</td>
          </tr>
          <tr className="border-4 border-black">
            <td className="border-r-4 border-black">General Contracting</td>
            <td>Turn your construction and renovation ideas into reality with precision and passion.</td>
          </tr>
          <tr className="border-4 border-black">
            <td className="border-r-4 border-black">Cleaning Services</td>
            <td>Experience a cleaner, fresher home without lifting a finger.</td>
          </tr>
          <tr className="border-4 border-black">
            <td className="border-r-4 border-black">Moving Services</td>
            <td>Relocate with ease and efficiency, thanks to Hanz's expert moving solutions.</td>
          </tr>
        </tbody>
      </table>{/**Table */}
    </div>
        <div className="p-2 m-4 space-y-4">
        <p  className="font-light text-p[18px] tracking-tight">At Hanz, we understand the importance of finding a reliable partner for your home maintenance and improvement projects. Our platform serves as a bridge between you and the professional services you need, ensuring quality, efficiency, and satisfaction. Trust Hanz to take care of your property, so you can focus on enjoying your home to the fullest.</p>
        <img className='float-right w-52 h-48 object-cover mx-3 my-2 border-2 border-black rounded' src='https://img.freepik.com/free-photo/husband-wife-moving-new-apartment-together-unpacking-furniture-decorate-household-enjoying-relocation-after-buying-first-house-start-new-beginnings-celebrate-life-event_482257-49831.jpg?t=st=1710694409~exp=1710698009~hmac=55369a1b6542e48bcbbf2ddb3f84ab116557727bbda05370207c26a8d0d6e2cf&w=996'/>
          <p  className="font-light text-p[18px] tracking-tight">Discover how Hanz can simplify your home maintenance and improvement tasks by exploring our services today. Let us be your partner in creating a home that reflects your style, meets your needs, and exceeds your expectations.</p>
        </div>
        <div className=" flex justify-center bg-gradient-to-r from-teal-200 via-slate-200 to-amber-200 mx-48 rounded-md">
      <Link className="bouncing-div bg-opacity-60 p-3 flex justify-center  rounded-xl shadow-2xl font-bold  m-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold"  href='/Booking'>
          <span className="block whitespace-nowrap">BOOK TODAY</span>
      </Link>
    </div>
      </div>
      {/**homepage whole */}
    </div>
  );
}
