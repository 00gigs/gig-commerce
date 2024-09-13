"use client";
import React from "react";
import Navbar from "../component/Navbar";
import Link from "next/link"; // Import Link from Next.js
const Page = () => {
  return (
    <div className="h-full ">
      <Navbar />
      <div className="text-black">
        <p className="italic  bg-clip-text text-transparent bg-gradient-to-l from-amber-200 via-teal-300 to-amber-200   font-bold tracking-widest text-center m-2 text-xl	">
          Hanz
        </p>
        <Link
          href="/Booking"
          className="shadow-xl p-3 border-black flex justify-center bg-yellow-200 font-bold w-full  mt-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold"
        >
          <span className="moving-text"> Request Local Handy-Man Today </span>
        </Link>
        <div className=" border-black mx-8  p-3 text-center mt-4">
          <div className="flex-1 mb-8">
            <img
              className="float-right w-48 h-40 object-cover mx-3 my-2 border-2 border-black rounded"
              src="https://images.unsplash.com/photo-1669170930713-f7c778496177?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h1 className="font-bold text-sm mb-4 noto-sans-indic capitalize text-[#825d46dc]">
            "Reliable Handyman Services for Property Managers, Homeowners, and Renters in Baltimore, MD"
            </h1>
            <p className="font-light text-[26px] noto-znamenny">
            At Hanz Home-Solutions, we specialize in providing reliable and cost-effective handyman services to property managers, real estate investors, homeowners, and renters in the Baltimore, MD area. Whether you need help with minor repairs, painting, or property maintenance, our skilled local handymen deliver top-notch services to meet your home and property needs.
            </p>
          </div>
        </div>
        <div>
          <Link
            href="/Booking"
            className="shadow-xl p-3 flex justify-center bg-yellow-200 font-bold w-full  mt-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold"
          >
            {" "}
            <span className="moving-text">
              {" "}
              Request Local Handy-Man Today{" "}
            </span>{" "}
          </Link>
        </div>
        <div className=" mb-2 mt-2 text-center mx-8 py-2  border-black">
          <h2 className="font-bold text-sm mb-4 noto-sans-indic">
         " Comprehensive Handyman Services for Property Maintenance and Home Improvement "
          </h2>
          <p className="font-light text-[26px] noto-znamenny">
          Our team at Hanz is your go-to solution for property maintenance and home improvement tasks. We handle a wide range of services, including interior and exterior painting, minor plumbing, drywall patching, and window/door repairs. Whether you’re a landlord preparing a rental property or a homeowner looking for seasonal work, we ensure that your space is well-maintained, functional, and visually appealing.
          </p>
          <img
            className="float-left w-48 h-48 object-cover mx-3 my-2 border-4 border-black rounded"
            src="https://images.unsplash.com/photo-1679797870465-b4eda40ead96?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <h3 className="font-light text-[16px] italic  rounded-xl noto-znamenny bg-[#825d46dc] p-2 border-b-4 border-gray-500">Handyman Services We Provide</h3>
          <ul className="text-[20px] italic noto-sans-indic">
            <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">Painting Services: Interior and exterior painting for walls, ceilings, and trim to refresh and update your property. </li>
            <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">Window/Door Repairs: Fix or replace damaged doors and windows to improve both security and energy efficiency.</li>
            <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">Drywall Patching and Repairs: Professional repair of holes, cracks, and other drywall damage to keep your walls looking pristine.</li>
            <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">Minor Plumbing: Fixing leaks, unclogging drains, and replacing fixtures to maintain the functionality of your home or rental property.</li>
            <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">Hanging and Mounting: Installing shelves, pictures, and wall-mounted units securely and with precision.</li>
            <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">
              Comprehensive demolition and debris removal <p className="text-xs">(with can/truck provided)</p>
            </li>
          </ul>
<h4 className="font-light text-[16px] italic  rounded-xl noto-znamenny bg-[#825d46dc] p-2 border-b-4 border-gray-500">Why Property Managers and Homeowners Choose Hanz Home-Solutions</h4>
<div>
  <ul>
    <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">Reliable Handyman Services -Our experienced handymen provide consistent, high-quality work that meets the specific needs of property managers and real estate investors.</li>
    <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">Affordable Property Maintenance -We offer cost-effective solutions that ensure your property is in top condition without breaking the budget.</li>
    <li className="list-disc my-3 font-light text-[20px] leading-10   tracking-tight">Efficient and On-Time -We respect-your time and complete all projects efficiently, making us the perfect partner for rental properties or homes that require quick turnaround times.</li>
  </ul>



</div>
<h5 className="font-light text-[16px] italic  rounded-xl noto-znamenny bg-[#825d46dc] mb-2 p-2 border-b-4 border-gray-500">Serving the Baltimore, MD Area</h5>
<p className="p-2">Hanz Home-Solutions proudly serves the Baltimore metropolitan area, including surrounding suburbs, to help landlords, homeowners, and real estate professionals maintain their properties with ease. From seasonal handyman services to urgent repairs, our team is ready to tackle your property management needs.</p>
          <p className="font-medium text-lg noto-znamenny p-3 border-2 border-black">
            "Let Hanz connect you with the expertise you need to transform and
            elevate your spaces, crafting environments that mirror your unique
            style and requirements."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
