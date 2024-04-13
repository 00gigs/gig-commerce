"use client";
import React from "react";
import Navbar from "../component/Navbar";
import Link from "next/link"; // Import Link from Next.js
import "../globals.css";
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
            <h1 className="font-bold text-sm mb-4 noto-sans-indic">
              "HANZ DELIVERS UNMATCHED LANDSCAPE SERVICES WITH A PERSONAL
              TOUCH."
            </h1>
            <p className="font-light text-[26px] noto-znamenny">
            "Transform your outdoor space with Hanz. Our skilled team offers a range of landscaping services at great value, including mowing lawns, trimming trees and bushes for safety and aesthetics, planting flowers and shrubs, mulching to maintain soil health and enhance appearance, and leaf and debris removal to keep your yard tidy. By booking with us, you'll enjoy quality services and significant savings compared to other companies. Let Hanz help you create the garden you've always wanted."
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
          <h1 className="font-bold text-sm mb-4 uppercase noto-sans-indic">
          "Our skilled local providers deliver quality landscaping and garden care services at competitive prices."
          </h1>
          <p className="font-light text-[26px] noto-znamenny">
          At Hanz, we connect you with skilled local providers who offer residential and commercial landscaping services. While our service providers may not be certified professionals, they have the expertise to manage a wide range of tasks. Our dedicated yard work specialists work diligently to maintain and enhance your outdoor spaces. Our services include:
          </p>
          <img
            className="float-left w-48 h-44 object-cover mx-3 my-2 border-4 border-black rounded"
            src="https://images.unsplash.com/photo-1629575063988-881596e38d31?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ul className="text-[20px] italic noto-sans-indic">
            <li>- Grass Cutting: Mowing and maintaining lawns.  </li>
            <li>- Tree and Bush Trimming: Pruning trees and bushes for aesthetic and safety reasons. </li>
            <li>- Gardening and Planting: Planting flowers, shrubs, and other greenery.</li>
            <li>- Mulching: Spreading mulch to maintain soil health and improve appearance.</li>
            <li>- Leaf and Debris Removal: Clearing leaves and unwanted debris from lawns and gardens. </li>
          </ul>
          <p className="font-medium text-lg noto-znamenny">
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
