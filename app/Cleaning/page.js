"use client";
import React from "react";
import Navbar from "../component/Navbar";
import Link from "next/link"; // Import Link from Next.js
const Page = () => {
  return (
    <div className="h-screen bg-slate-200">
      <Navbar />
      <div className="text-black">
        <p className="italic  bg-clip-text text-transparent bg-gradient-to-l from-amber-200 via-teal-300 to-amber-200   font-bold tracking-widest text-center m-2 text-xl		">
          Hanz
        </p>
        <Link
          href="/Booking"
          className="shadow-xl p-3 border-black flex justify-center bg-teal-200 font-bold w-full  mt-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold"
        >
          <span className="moving-text">
            {" "}
            Request HouseKeeping Services Today{" "}
          </span>
        </Link>
        <div className=" border-black mx-8  p-3 text-center mt-4">
          <div className="flex-1 mb-8">
            <img
              className="float-right w-48 h-40 object-cover mx-3 my-2 border-2 border-black rounded"
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h1 className="font-bold text-sm mb-4 noto-sans-indic">
            "HANZ OFFERS DETAILED CLEANING SERVICES, FOCUSING ON THOROUGHNESS AND CARE."
            </h1>
            <p className="font-light text-[26px] noto-znamenny">
            Refresh your home or office with Hanz, your trusted choice for cleaning services. From dusting and vacuuming to deep cleaning kitchens and bathrooms, our experienced team takes care of your space with high-levels of attention. Trust Hanz to bring a renewed sense of cleanliness and comfort to your environment.
            </p>
          </div>
        </div>
        <div>
          <Link
            href="/Booking"
            className=" shadow-xl p-3 flex justify-center bg-teal-200 font-bold w-full  mt-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold"
          >
            <span className="moving-text">
              {" "}
              Request HouseKeeping Services Today{" "}
            </span>
          </Link>
        </div>
        <div className=" mb-2 mt-2 text-center  mx-8 py-2  border-black">
          <h1 className="font-bold text-sm mb-4 noto-sans-indic">
          "SKILLED CLEANING TEAMS DELIVER COST-EFFECTIVE, QUALITY CLEANING SERVICES FOR YOUR HOME OR OFFICE."
          </h1>
          <p className="font-light text-[26px] noto-znamenny">
          At Hanz, we connect you with dedicated residential and commercial cleaning teams who excel in transforming your spaces. Our cleaners tackle every job with care, ensuring your home or office is not just cleaned, but rejuvenated into a welcoming space. Our services include:
          </p>
          <img
            className="float-left w-48 h-52 object-cover mx-3 my-2 border-4 border-black rounded"
            src="https://images.unsplash.com/photo-1686828751885-040f0a0fb77a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ul className="text-[20px] italic noto-sans-indic">
            <li>- Deep Cleaning: Thorough cleaning of kitchens, bathrooms, and other areas.</li>
            <li>- Eviction Cleaning: Cleaning and sanitizing properties after a tenant moves out.</li>
            <li>- Basic Home Upkeep: Routine cleaning of living spaces, including dusting and vacuuming.</li>
            <li>- Carpet and Upholstery Cleaning: Deep cleaning of carpets and upholstery to remove stains and odors.</li>
            <li>- Window Cleaning: Cleaning windows inside and out for a clear, streak-free finish. </li>
          </ul>
          <p className="font-medium text-lg noto-znamenny">
          "Let Hanz provide you with the cleaning expertise you need to maintain a spotless, comfortable environment. Let us handle the work, so you can enjoy a cleaner, more organized space."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
