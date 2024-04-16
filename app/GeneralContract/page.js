"use client";
import React from "react";
import Navbar from "../component/Navbar";
import Link from "next/link"; // Import Link from Next.js
const Page = () => {
  return (
    <div className="h-full bg-slate-100">
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
            <h1 className="font-bold text-sm mb-4 noto-sans-indic">
            "HANZ PROVIDES RELIABLE HANDYMAN SERVICES WITH METICULOUS ATTENTION TO DETAIL."
            </h1>
            <p className="font-light text-[26px] noto-znamenny">
            Tackle your home projects with Hanz, your trusted partner for all handyman services. From painting to minor plumbing, our skilled local providers can manage a variety of tasks to enhance and maintain your space. Trust Hanz to bring quality work to your projects, delivered efficiently and affordably.
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
          <h1 className="font-bold text-sm mb-4 noto-sans-indic">
          "HANZ DELIVERS COST-EFFECTIVE HANDYMAN SOLUTIONS TO MEET YOUR HOME MAINTENANCE NEEDS."
          </h1>
          <p className="font-light text-[26px] noto-znamenny">
          At Hanz, we connect you with skilled local workers who can handle a range of home improvement and maintenance tasks. Whether you need painting, door and window repairs, drywall patching, minor plumbing fixes, or hanging and mounting, our team is ready to help. Our services include:
          </p>
          <img
            className="float-left w-48 h-48 object-cover mx-3 my-2 border-4 border-black rounded"
            src="https://images.unsplash.com/photo-1679797870465-b4eda40ead96?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ul className="text-[20px] italic noto-sans-indic">
            <li>- Painting: Interior and exterior painting of walls, ceilings, and trim. </li>
            <li>- Door/Window Repairs: Fixing or replacing broken doors and windows.</li>
            <li>- Drywall Patching/Repair: Repairing holes, cracks, and other damage in drywall.</li>
            <li>- Minor Plumbing: Fixing leaks, unclogging drains, and replacing fixtures.</li>
            <li>- Hanging and Mounting: Installing shelves, pictures, and other items on walls. </li>
            <li>
              - Comprehensive demolition and debris removal <p className="text-xs">(with can/truck provided)</p>
            </li>
          </ul>
          <p className="font-medium text-lg noto-znamenny">
            "Let Hanz connect you with the expertise you need to transform and
            elevate your spaces, crafting environments that mirror your unique
            style and requirements.""
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
