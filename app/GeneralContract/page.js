"use client";
import React from "react";
import Navbar from "../component/Navbar";
import Link from "next/link"; // Import Link from Next.js
const Page = () => {
  return (
    <div className="h-100 bg-slate-200">
      <Navbar />
      <div className="text-black">
        <p className="italic  bg-clip-text text-transparent bg-gradient-to-l from-amber-200 via-teal-300 to-amber-200   font-bold tracking-widest text-center m-2 text-xl	">
          Hanz
        </p>
        <Link
          href="/Booking"
          className="shadow-xl p-3 border-black flex justify-center bg-yellow-200 font-bold w-full  mt-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold"
        >
          <span className="moving-text"> Book a General Contractor today </span>
        </Link>
        <div className=" border-black mx-8  p-3 text-center mt-4">
          <div className="flex-1 mb-8">
            <img
              className="float-right w-48 h-40 object-cover mx-3 my-2 border-2 border-black rounded"
              src="https://images.unsplash.com/photo-1669170930713-f7c778496177?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h1 className="font-bold text-sm mb-4">
              "HANZ PROVIDES SUPERIOR GENERAL CONTRACTING SERVICES WITH
              EXCEPTIONAL ATTENTION TO DETAIL."
            </h1>
            <p className="font-light text-[26px]">
              Build your vision with Hanz, your premier partner for all general
              contracting needs. From foundational work to custom interior
              finishes, our expertise in construction, renovation, and design
              turns any space into a masterpiece. Trust Hanz to transform your
              projects into exquisite, functional realities. Let us bring your
              dreams to life with precision and passion.
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
              Book a General Contractor today{" "}
            </span>{" "}
          </Link>
        </div>
        <div className="border-b-4 mb-2 mt-2 text-center h-screen mx-8 py-2  border-black">
          <h1 className="font-bold text-sm mb-4">
            "EXPERT CONTRACTORS DELIVER ECONOMICAL, PREMIUM-QUALITY SOLUTIONS IN
            GENERAL CONTRACTING, ENSURING YOUR PROJECT EXCEEDS EXPECTATIONS."
          </h1>
          <p className="font-light text-[26px]">
            At Hanz, we bridge the gap between you and top-tier residential and
            commercial general contracting professionals. Our dedicated team is
            equipped to handle a broad spectrum of projects, ensuring your
            construction and renovation needs are not just met, but truly
            surpassed. Our services include:
          </p>
          <img
            className="float-left w-48 h-48 object-cover mx-3 my-2 border-4 border-black rounded"
            src="https://images.unsplash.com/photo-1679797870465-b4eda40ead96?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ul className="text-[20px] italic">
            <li>- Expert project management </li>
            <li>- Precision construction and building</li>
            <li>- Custom renovation and remodeling</li>
            <li>- Advanced electrical and plumbing solutions</li>
            <li>- High-quality painting and finishing </li>
            <li>- Professional flooring and tile installation </li>
            <li>
              - Comprehensive demolition and debris removal ...and much more!
            </li>
          </ul>
          <p className="font-medium text-lg">
            Let Hanz connect you with the expertise you need to transform and
            elevate your spaces, crafting environments that mirror your unique
            style and requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
