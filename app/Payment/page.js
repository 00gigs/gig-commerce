"use client";

import React from "react";
import { useState } from "react";
import Navbar from "../component/Navbar";
import { useEffect } from "react";
import { getSession } from "next-auth/react";

const page = () => {
{/**dynamic job details state */}
const [data,setData] = useState('')
  {/**pull forum data from database*/}






useEffect(() => {

  getForum()
}, [])

const getForum = async () =>{
  // const userEmail = (await getSession()).user.email
  const username = await getSession()
  const currentUser = username.user.email
  console.log(currentUser)
  const res = await fetch(`/api/confirmation?userId=${encodeURIComponent(currentUser)}`,{
    method:'GET',
    headers:{"Content-Type":"application/json"},
  });
  if(!res.ok){
    throw new Error(`Failed to fetch user forum, status: ${res.status}`);
  }
  const forumData = await res.json()
  console.log('this is forum ->',forumData)
  setData(forumData)
}
{/**set job details with forum details */}




{/**DATE CONVERSION FUNCTION vvvv*/}
function formatDateString(dateString) {
  const date = new Date(dateString);

  // Get the month, day, and year from the date object
  let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed; add 1
  let day = date.getDate().toString().padStart(2, '0');
  let year = date.getFullYear().toString().slice(-2); // Get the last 2 digits of the year

  // Format the date string in MM/DD/YY format
  return `${month}/${day}/${year}`;
}
{/**DATE CONVERSION FUNCTION ^^^^*/}

  return (
    <div>
       <Navbar />
    <div className="flex flex-col min-h-screen justify-center items-center text-black bg-slate-100">
      <h1 className="mt-1 font-medium italic mb-4 text-[30px]">
        ' Only a few clicks away before you can sit back and let Hanz do the job
        '
      </h1>
      <h1 className="mt-1 font-extrabold underline">Job Details</h1>
      <div className="grid grid-cols-3 gap-5 p-2 m-2 border-4 h-[17rem] w-[30rem] border-slate bg-gradient-to-b from-cyan-100 to-neutral-200 max-sm:flex flex-col max-sm:h-[36rem] text-center">
        <span className="grid">
          job
          <span className="bg-slate-100 bg-opacity-50 rounded-lg font-bold">
            {data.job}
          </span>
        </span>
        <span className="grid">
          workers
          <span className="bg-slate-100 bg-opacity-50 rounded-lg font-bold">
            {data.workers}
          </span>
        </span>
        <span className="grid">
          hours
          <span className="bg-slate-100 bg-opacity-50 rounded-lg font-bold">
            {data.hours}
          </span>
        </span>
        <span className="grid">
          time
          <span className="bg-slate-100 bg-opacity-50 rounded-lg font-bold">
            {data.time}
          </span>
        </span>
        <span className="grid">
          date
          <span className="bg-slate-100 bg-opacity-50 rounded-lg font-bold">
            {formatDateString(data.date)}
          </span>
        </span>
        <span className="grid">
          description
          <span className="bg-slate-100 bg-opacity-50 rounded-lg font-bold">
            {data.description}
          </span>
        </span>
        <span className="grid">
          Name
          <span className="bg-slate-100 bg-opacity-50 rounded-lg font-bold">
            {data.customerName}
          </span>
        </span>
        <span className="grid">
          Address
          <span className="bg-slate-100 bg-opacity-50 rounded-lg font-bold">
            {data.customerAddress}
          </span>
        </span>
        <span className="grid">
          City
          <span className="bg-slate-100 bg-opacity-50 rounded-lg font-bold">
            {data.customerCity}
          </span>
        </span>
        <span className="grid">
          Zip
          <span className="bg-slate-100 bg-opacity-50 rounded-lg font-bold">
            {data.customerZip}
          </span>
        </span>
        <span className="grid">
          Email
          <span className="bg-slate-100 bg-opacity-50 rounded-lg font-bold">
            {data.customerEmail}
          </span>
        </span>
        <span className="grid">
          Phone
          <span className="bg-slate-100 bg-opacity-50 rounded-lg font-bold">
            {data.customerPhone}
          </span>
        </span>
      </div>
      <h1 className="text-center mt-1 font-extrabold underline">
        Booking Payment
      </h1>
      <div className=" flex flex-col mb-5 max-sm:min-h-screen ">
        <span>Deposit due now:</span>
        <span>Total due to Worker(s):</span>
        <span>Total job cost:</span>
      </div>
    </div>
    </div>
  );
};

export default page;
