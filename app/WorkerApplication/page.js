"use client";
import React from "react";

const Page = () => {
  return (
    <div className="flex min-h-screen justify-center items-center text-black bg-slate-100 ">
      <form className="text-center bg-[#3fb5afc5] w-[40rem] p-10 rounded-xl shadow-2xl">
        <fieldset>
          <legend  className="font-mono">Worker SignOn Forum</legend>
          <div className="my-3">
            <label className="mr-3 text-white font-mono">
              Location
              <input className="ml-3 bg-transparent border-b border-black" type="text" placeholder="zip" required />
            </label>
            <label>
              <input  className="bg-transparent border-b border-black" type="text" placeholder="city" required />
            </label>
          </div>
          <div className="my-3 ">
            <label className="mr-3 text-white  font-mono">
              Contact
              <input className="ml-3 bg-transparent border-b border-black" type="text" placeholder="email" required />
            </label>
            <label>
              <input className="bg-transparent border-b border-black" type="text" placeholder="number" required />
            </label>
          </div>
          <div>
            <label className="text-white font-mono">
              Name
              <input className="ml-3 bg-transparent border-b border-black"  type="text" placeholder="First Name" required />
            </label>
            <label>
              <input className='ml-3 bg-transparent border-b border-black' type="text" placeholder="Last Name" required />
            </label>
          </div>
          <div className="my-3">
          <label>
          Do you agree to terms and conditions
           <input type="checkbox"/>
          </label>
          </div>
          <div className="my-3">
          <label>
          Do you agree to liability agreement
           <input type="checkbox"/>
          </label>
          </div>
        </fieldset>
        <button className="bg-blue-400 uppercase p-2 mt-3 font-semibold rounded-xl hover:text-xl">Submit</button>
        <div>
        <p className="text-[10px] mt-3">
' After forum submission a Hanz Larbor force agent will contact you today '
        </p>
        </div>
      </form>
    </div>
  );
};

export default Page;
