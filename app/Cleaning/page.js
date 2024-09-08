"use client";
import React from "react";
import Navbar from "../component/Navbar";
import Link from "next/link"; // Import Link from Next.js
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
            <h1 className="font-bold text-sm mb-4 noto-sans-indic capitalize">
              "Hanz offers Professional Cleaning Services for Homes and Offices
              in Baltimore, MD"
            </h1>
            <p className="font-light text-[26px] noto-znamenny">
              At Hanz Home-Solutions, we specialize in delivering high-quality
              cleaning services for both residential and commercial properties
              in Baltimore and the surrounding Maryland area. Whether you need
              deep cleaning, routine housekeeping, or move-out cleaning, our
              dedicated team is here to ensure your space is spotless and
              comfortable. Trust Hanz to handle your cleaning needs with care,
              precision, and efficiency.
            </p>
          </div>
        </div>
        /**intro /what is it ^^*/
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
        /**main/explain vv*/
        <div className=" mb-2 mt-2 text-center  mx-8 py-2 ">
          <h1 className="font-bold text-sm mb-4 noto-sans-indic">
            Transform Your Space with Detailed Cleaning Services
          </h1>
          <p className="font-light text-[26px] noto-znamenny">
            With Hanz Home-Solutions, you get more than just a surface clean.
            Our skilled team provides thorough cleaning solutions that target
            every corner of your home or office. From deep cleaning kitchens and
            bathrooms to vacuuming, dusting, and sanitizing, we ensure your
            environment is not only clean but rejuvenated.
          </p>
          <p>Our cleaning services are perfect for:</p>
          <ul>
            <li className=" list-disc my-3 font-light  leading-10   tracking-tight noto-znamenny">
              Homeowners looking to refresh their living spaces{" "}
            </li>
            <li className=" list-disc my-3 font-light  leading-10   tracking-tight noto-znamenny">
              Offices in need of regular maintenance or deep cleans{" "}
            </li>
            <li className=" list-disc my-3 font-light  leading-10   tracking-tight noto-znamenny">
              Landlords and property managers needing reliable move-in/move-out
              cleaning
            </li>
          </ul>
          <img
            className="float-left w-48 h-52 object-cover mx-3 my-2 border-4 border-black rounded"
            src="https://images.unsplash.com/photo-1686828751885-040f0a0fb77a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          /**additional content /details vv*/
          <p>Cleaning Services We Offer</p>
          <ul className="text-[20px] italic noto-sans-indic">
            <li>
              - Deep Cleaning: Thorough cleaning of kitchens, bathrooms, and
              living areas.
            </li>
            <li>
              - Move-In/Move-Out Cleaning: Perfect for tenants, landlords, and
              property managers.
            </li>
            <li>
              - Routine Cleaning: Regular upkeep to maintain a clean and healthy
              environment.
            </li>
            <li>
              - Carpet & Upholstery Cleaning: Remove stains and odors from
              carpets and furniture.
            </li>
            <li>
              - Window Cleaning: Streak-free cleaning for interior and exterior
              windows.
            </li>
          </ul>
          /**vouching/reinforcer vv*/
          <div>
            <h3> Why Choose Hanz Home-Solutions for Cleaning? </h3>
            <p>
              Experienced Team: Our cleaning professionals have years of
              experience, ensuring every job is handled with expertise and
              attention to detail. Customizable Services: We offer tailored
              cleaning packages to suit your specific needs, whether you require
              deep cleaning, routine upkeep, or specialized services like carpet
              cleaning and window cleaning. Affordable Pricing: Our competitive
              pricing ensures you get the best value for top-quality cleaning
              services.
            </p>
          </div>
          <div>
            <h4>Customer Satisfaction is Our Priority:</h4>
            <p>
              At Hanz Home-Solutions, customer satisfaction is at the heart of
              what we do. We guarantee quality results with every service,
              ensuring your home or office looks its best after every clean. Our
              cleaners are trained to exceed expectations, leaving your space
              refreshed, sanitized, and welcoming.
            </p>
          </div>
          /**outro vv*/
          <p className="font-medium text-lg noto-znamenny">
            "Let Hanz provide you with the cleaning expertise you need to
            maintain a spotless, comfortable environment. Let us handle the
            work, so you can enjoy a cleaner, more organized space."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
