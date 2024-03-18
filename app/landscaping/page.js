"use client";
import React from "react";
import Navbar from "../component/Navbar";
import Link from "next/link"; // Import Link from Next.js
import "../globals.css";
const Page = () => {
  return (
    <div className="h-100 bg-slate-200">
      <Navbar />
      <div className="text-black">
        <p className="italic underline text-indigo-200 font-bold tracking-widest text-center m-2 text-xl	">
          Hanz
        </p>
        <Link
          href="/Booking"
          className="shadow-xl p-3 flex justify-center bg-green-200 font-bold w-full  mt-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold"
        >
          <span className="moving-text">Book a Landscaper today</span>
        </Link>
        <div className=" border-black mx-8  p-3 text-center mt-4">
          <div className="flex-1 mb-8">
            <img
              className="float-right w-48 h-30 object-cover mx-3 my-2 border-2 border-black rounded"
              src="https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBpbmd8ZW58MHx8MHx8fDA%3D"
            />
            <h1 className="font-bold text-sm mb-4">
              "HANZ DELIVERS UNMATCHED LANDSCAPE SERVICES WITH A PERSONAL
              TOUCH."
            </h1>
            <p className="font-light text-[26px]">
              Dream big with Hanz, your go-to for all landscaping projects. From
              lush gardens to bespoke outdoor designs, our expertise in
              sculpting, mulching, and lighting transforms any space into a
              personal oasis. Trust Hanz to elevate your outdoors into
              cherished, stunning realities.
            </p>
          </div>
        </div>
        <div>
          <Link
            href="/Booking"
            className="shadow-xl p-3 flex justify-center bg-green-200 font-bold w-full  mt-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold"
          >
            <span className="moving-text">Book a Landscaper today</span>
          </Link>
        </div>
        <div className="border-b-4 mb-2 mt-2 text-center h-screen mx-8 py-2  border-black">
          <h1 className="font-bold text-sm mb-4">
            "OUR SKILLED CONTRACTORS OFFER COST-EFFECTIVE, HIGH-QUALITY
            LANDSCAPING AND GARDEN CARE"
          </h1>
          <p className="font-light text-[26px]">
            At Hanz, we bridge the gap between you and top-tier residential and
            commercial landscape labor contractors, as well as full-service
            landscape professionals. Our dedicated yard work specialists are
            equipped to handle a wide array of tasks, ensuring your outdoor
            spaces are not just maintained, but truly flourish. Our services
            include:
          </p>
          <img
            className="float-left w-48 h-44 object-cover mx-3 my-2 border-4 border-black rounded"
            src="https://images.unsplash.com/photo-1629575063988-881596e38d31?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ul className="text-[20px] italic">
            <li>- Excavating trenches </li>
            <li>- Sculpting and maintaining hedges</li>
            <li>- Precision lawn mowing</li>
            <li>- Expert mulching</li>
            <li>- Comprehensive leaf cleanup </li>
            <li>- Effective weed control </li>
            <li>- Safe stump extraction</li>
            <li>- Strategic tree installation ...and much more!</li>
          </ul>
          <p className="font-medium text-lg">
            Let Hanz connect you with the expertise you need to transform and
            maintain your outdoor areas, creating spaces that reflect your
            aesthetic and functional needs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
