"use client";
import { set } from "mongoose";
import React, { useState } from "react";

const Page = () => {


const [zip, setZip] = useState('')
const [city, setCity] = useState('')
const [email, setEmail] = useState('')
const [number, setNumber] = useState('')
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(zip)
    const res = await fetch("/api/worker", {
      method: "POST",
      headers: { "Content-Type": "application" },
      body: JSON.stringify({
        zip,
        city,
        email,
        number,
        firstName,
        lastName,
      }),
    });
    if(!res.ok){
      throw new Error('Failed to post worker info',res)
    }else{
      console.log('success worker forum')
      e.target.reset()
    }
  };

  

  return (
    <div className="flex min-h-screen justify-center items-center text-black bg-slate-100 ">
      <form onSubmit={handleSubmit} className="text-center bg-[#3fb5afc5] w-[40rem] p-10 rounded-xl shadow-2xl">
        <fieldset>
          <legend className="font-mono">Worker SignOn Forum</legend>
          <div className="my-3">
            <label className="mr-3 text-white font-mono">
              Location
              <input
                className="ml-3 bg-transparent border-b border-black"
                type="text"
                placeholder="zip"
                required
                onChange={(e)=>setZip(e.target.value)}
                maxLength={5}
              />
            </label>
            <label className="text-white">
              <input
                className="bg-transparent border-b  border-black"
                type="text"
                placeholder="city"
                required
                onChange={(e)=>setCity(e.target.value)}
              />
            </label>
          </div>
          <div className="my-3 ">
            <label className="mr-3 text-white  font-mono">
              Contact
              <input
                className="ml-3 bg-transparent border-b border-black"
                type="text"
                placeholder="email"
                required
                onChange={(e)=>setEmail(e.target.value)}
              />
            </label>
            <label  className="text-white">
              <input
                className="bg-transparent border-b border-black"
                type="text"
                placeholder="number"
                required
                onChange={(e)=>setNumber(e.target.value)}
                maxLength={10}
              />
            </label>
          </div>
          <div>
            <label className="text-white font-mono">
              Name
              <input
                className="ml-3 bg-transparent border-b border-black"
                type="text"
                placeholder="First Name"
                required
                onChange={(e)=>setFirstName(e.target.value)}
              />
            </label>
            <label  className="text-white"> 
              <input
                className="ml-3 bg-transparent border-b border-black"
                type="text"
                placeholder="Last Name"
                required
                onChange={(e)=>setLastName(e.target.value)}
              />
            </label>
          </div>
          <div className="my-3">
            <label >
              Do you agree to terms and conditions
              <input type="checkbox" />
            </label>
          </div>
          <div className="my-3">
            <label>
              Do you agree to liability agreement
              <input type="checkbox" />
            </label>
          </div>
        </fieldset>
        <button type="submit" className="bg-blue-400 uppercase p-2 mt-3 font-semibold rounded-xl hover:text-xl">
          Submit
        </button>
        <div>
          <p className="text-[10px] mt-3">
            ' After forum submission a Hanz Larbor force agent will contact you
            today '
          </p>
        </div>
      </form>
    </div>
  );
};

export default Page;
