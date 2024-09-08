import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const page = () => {
  return (
    <div className="bg-slate-100 w-screen min-h-screen ">
      <Navbar />
      <div className="text-black text-center">
        <h1 className="mt-2 opacity-40">ABOUT PAGE</h1>
        <div className="mt-3 flex justify-end mr-5">
          {/**headBanner  */}
          <div className="flex items-center gap-2">
            <p className="italic underline bg-clip-text text-transparent bg-gradient-to-l from-teal-200 via-slate-200 to-amber-200  font-bold tracking-widest">
              Hanz
            </p>{" "}
            -
          </div>
          <h2 className=" flex text-[22px] font-bold italic tracking-wide">
            {" "}
            "Bringing Homes and Hearts Together"
          </h2>
        </div>
        {/**headBanner  */}
        <div className="m-3">
          {/**text content  */}
          <p className="m-4 font-extrabold text-[22px]  underline">Our Story</p>
          <p className="font-medium text-[25px] italic  leading-relaxed tracking-wide noto-sans-indic">
            In 2024, Hanz Home-Solutions was founded with a mission to
            revolutionize home services in the Baltimore and surrounding
            Maryland areas. As a family-owned business rooted in the community,
            we provide top-notch services such as landscaping, handyman work,
            housekeeping, and moving assistance. Our goal is not only to offer
            exceptional home maintenance and improvement solutions but also to
            foster a stronger, more connected community.
          </p>
          <h2 className="font-extrabold underline text-[22px] mt-2 ">
            Our Mission
          </h2>
          <p className="font-light text-[24px] leading-10  text-[18px] tracking-tight my-3 noto-znamenny">
            At Hanz Home-Solutions, we believe a home is more than just a
            space—it’s where families build memories and communities grow. Our
            mission is to provide an all-in-one solution for property management
            services like lawn care, handyman repairs, cleaning services, and
            moving support. We’re here to take the stress out of home projects,
            offering reliable, efficient services designed to meet the unique
            needs of landlords, property managers, and residents in Maryland.
          </p>
          <h2 className="font-extrabold underline text-[24px]  leading-10 mt-2 ">
            A Family at Your Service
          </h2>
          <p className="font-light text-p[18px] text-[24px]  leading-10  tracking-tight my-3 noto-znamenny">
            Being family-owned and operated means every project we take on is
            personal. We treat every home like our own, ensuring every task is
            completed with care and attention to detail. From minor handyman
            work to larger property maintenance jobs, the Hanz team is committed
            to exceeding your expectations and building lasting relationships
            with our clients.
          </p>
          <h2 className="font-extrabold underline text-[24px]  leading-10 mt-2 ">
            Community at the Core
          </h2>

          <p className="font-light text-p[18px] text-[24px]  leading-10  tracking-tight my-3 noto-znamenny">
            At Hanz Home-Solutions, we’re more than just a service
            provider—we’re active members of the communities we serve. Whether
            it's by supporting local events or participating in community
            service projects, our goal is to strengthen neighborhoods. We’re
            dedicated to offering services that bring people together and
            improve their quality of life.
          </p>
          <h2 className="font-extrabold underline text-[24px]  leading-10 mt-2 ">
            Looking Ahead
          </h2>
          <p className="font-light  text-[24px]  leading-10  tracking-tight noto-znamenny">
            As we expand our services across Maryland, our focus remains on
            delivering high-quality home solutions while staying connected to
            our community roots. From landscaping to moving services, Hanz
            Home-Solutions is here to continue helping families and property
            managers create better homes.
          </p>
        </div>
        {/**text content  */}
        <div className="p-2 m-4 space-y-4">
          <h2 className="font-extrabold underline text-[24px]  leading-10 mt-2 ">
            Why Choose Hanz Home-Solutions?
          </h2>
          <ul className="p-2 m-4 space-y-4">
            <li className=" list-disc my-3 font-light  leading-10 text-[18px]   tracking-tight noto-znamenny">
              Reliable & Professional: Every job is handled with professionalism
              and respect for your home.
            </li>
            <li className=" list-disc my-3 font-light  leading-10 text-[18px]  tracking-tight noto-znamenny"> 
              Wide Range of Services: Whether you need lawn care, handyman
              repairs, or housekeeping, we’ve got you covered.
            </li>
            <li className=" list-disc my-3 font-light  leading-10 text-[18px]  tracking-tight noto-znamenny">
              Community-Focused: We care about more than just homes; we care
              about building stronger communities.
            </li>
          </ul>
          <p className="font-light  text-[24px]  leading-10  tracking-tight noto-znamenny">
            At Hanz, your home is our passion, and your community is our family.
            Join us in this journey of transformation, and let's create spaces
            that inspire, comfort, and bring us all closer together.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
