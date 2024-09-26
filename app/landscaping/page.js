"use client";
import React from "react";
import Navbar from "../component/Navbar";
import Link from "next/link"; // Import Link from Next.js
import "../globals.css";
const Page = () => {
  return (
    <div className="h-full ">
      <Navbar />
      <div className="text-black">
        <p className="italic  bg-clip-text text-transparent bg-gradient-to-l from-amber-200 via-teal-300 to-amber-200   font-bold tracking-widest text-center m-2 text-xl		">
          Hanz
        </p>
        <Link
          href="/Booking"
          className="shadow-xl p-3 flex justify-center bg-green-200 font-bold w-full  mt-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold"
        >
          <span className="moving-text">Request Landscaping Help Now </span>
        </Link>
        <div className=" border-black mx-8  p-3 text-center mt-4">
          <div className="flex-1 mb-8">
            <img
              className="float-right w-48 h-30 object-cover mx-3 my-2 border-2 border-black rounded"
              src="https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBpbmd8ZW58MHx8MHx8fDA%3D"
            />
            <h1 className="font-bold text-sm mb-4 noto-sans-indic capitalize underline text-[#8ad7e5]">
              Affordable Landscaping Services for Property Managers, Homeowners,
              and Renters in Baltimore, MD.
            </h1>
            <p className="font-light text-[26px] noto-znamenny">
              At Hanz Home-Solutions, we specialize in providing affordable and
              reliable landscaping services to property managers, real estate
              investors, homeowners, and renters in the Baltimore, MD area.
              Whether you need lawn maintenance, tree trimming, or garden care,
              our skilled local landscapers are here to enhance and maintain
              your outdoor spaces.
            </p>
          </div>
        </div>
        <div>
          <Link
            href="/Booking"
            className="shadow-xl p-3 flex justify-center bg-green-200 font-bold w-full  mt-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold"
          >
            <span className="moving-text">Request Landscaping help Now</span>
          </Link>
        </div>
        <div className=" mb-2 mt-2 text-center  mx-8 py-2  border-black ">
          <h2 className="font-bold text-sm mb-4 uppercase noto-sans-indic">
            Transform Your Yard with Affordable and Reliable Landscaping
            Services
          </h2>
          <p className="font-light text-[26px] noto-znamenny">
            Our experienced landscaping team offers a variety of yard
            maintenance and garden care services designed to beautify and
            maintain your property’s outdoor areas. From mowing lawns to tree
            and bush trimming, we provide high-quality services at competitive
            rates. Whether you're a homeowner preparing for a sale or a property
            manager looking to maintain your rental properties, Hanz
            Home-Solutions ensures your yard is always in top shape.
          </p>
          <img
            className="float-left w-48 h-44 object-cover mx-3 my-2 border-4 border-black rounded"
            src="https://images.unsplash.com/photo-1629575063988-881596e38d31?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <h3 className="font-light text-[16px] italic  rounded-xl noto-znamenny bg-[#8ad7e5] p-2 border-b-4 border-gray-500">Landscaping Services We Provide</h3>
          <ul className="text-[20px] italic noto-sans-indic">
            <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">Grass Cutting: Professional mowing and lawn care to keep your yard neat and healthy. </li>
            <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">
            Tree and Bush Trimming: Pruning and trimming trees and bushes to maintain safety and aesthetics.{" "}
            </li>
            <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">
            Gardening and Planting: Planting flowers, shrubs, and other greenery to enhance the beauty of your outdoor space.
            </li>
            <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">
            Mulching: Spreading mulch to improve soil health and the appearance of garden beds.
            </li>
            <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">
            Leaf and Debris Removal: Keeping your lawn free of leaves and debris to maintain a clean and tidy yard.{" "}
            </li>
          </ul>

          <h4 className="font-light text-[16px] italic  rounded-xl noto-znamenny bg-[#8ad7e5] p-2 border-b-4 border-gray-500">
            {" "}
            Why Property Managers and Homeowners Choose Hanz Home-Solutions
          </h4>
          <ul className='text-[20px] italic noto-sans-indic p-2'>
            <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">
              Reliable Landscaping Services: Our dedicated team offers
              consistent, reliable services, perfect for property managers and
              real estate investors.
            </li>
            <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">
              Affordable Yard Maintenance: We provide cost-effective solutions
              for maintaining lawns, gardens, and other outdoor areas, ensuring
              your property always looks its best.
            </li>
            <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">
              Skilled Local Providers: Our team is made up of skilled local
              workers who are passionate about landscaping and delivering great
              results.
            </li>
          </ul>
         <h6 className="font-light text-[16px] italic  rounded-xl noto-znamenny bg-[#8ad7e5] p-2 border-b-4 border-gray-500">Serving the Baltimore, MD Area.</h6> 

<div>Hanz Home-Solutions proudly serves the Baltimore metropolitan area, offering landscaping services that meet the needs of property managers, homeowners, and real estate professionals. Whether it’s seasonal maintenance or weekly yard care, we’re here to keep your outdoor spaces looking their best.</div>
          <p className="p-3 font-medium text-lg noto-znamenny mt-3 border-black border-4">
            "Let Hanz connect you with the expertise you need to transform and
            maintain your outdoor areas, creating spaces that reflect your
            aesthetic and functional needs."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
