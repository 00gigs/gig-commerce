//DUPLICATE THIS PAGE AND INSTEAD OF USING 2 POST REQUEST ONLY USE THE ONE FOR GETTING FORUM WITH ID  COMING FROM  JOBS PAGE
//THIS PAGE SHOULD BE ONLY USED FIR USER COMING DIRECTLY FROM BOOKING PAGE
"use client";
import React from "react";
import { useState } from "react";
import Navbar from "../component/Navbar";
import { useEffect } from "react";
import { getSession } from "next-auth/react";

const page = () => {
  const [data, setData] = useState("");

  {
    /**dynamic job details(forum information destructor) state */
  }
  {
    /**pull forum data from database*/
  }
  useEffect(() => {
    const fetchData = async () => {
      await getForum();
      await getPrice();
    };
    fetchData();
    const intervalId = setInterval(fetchData, 5000); // REFRESH EVERY interval
    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  const [price, setPrice] = useState([]);
  {
    /**enable price data destructor  (e.g price.unit_amount)^^^ */
  }

  const getPrice = async () => {
    const res = await fetch(`https://www.hanzhomesolutions.com/api/getProducts`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch product price, status: ${res.status}`);
    }
    const priceData = await res.json();
    setPrice(priceData.data);
  };
  {
    /**conditional price data */
  }
  let index = 0;
  if (data.hours === "2 or Less Hours" && data.workers === "1") {
    index = 24;
  }
  if (data.hours === "2 or Less Hours" && data.workers === "1" && data.tools==true) {
    index = 12;
  }
  if (data.hours === "2 or Less Hours" && data.workers === "2") {
    index = 23;
  }
  if (data.hours === "2 or Less Hours" && data.workers === "2" && data.tools==true) {
    index = 11;
  }
  if (data.hours === "2 or Less Hours" && data.workers === "3") {
    index = 22;
  }
  if (data.hours === "2 or Less Hours" && data.workers === "3" && data.tools==true) {
    index = 10;
  }
  if (data.hours === "2 or Less Hours" && data.workers === "4") {
    index = 21;
  }
  if (data.hours === "2 or Less Hours" && data.workers === "4" && data.tools==true) {
    index = 9;
  }
  if (data.hours === "3 to 5 Hours" && data.workers === "1") {
    index = 20;
  }
  if (data.hours === "3 to 5 Hours" && data.workers === "1" && data.tools==true) {
    index = 8;
  }
  if (data.hours === "3 to 5 Hours" && data.workers === "2") {
    index = 19;
  }
  if (data.hours === "3 to 5 Hours" && data.workers === "2" && data.tools==true) {
    index = 7;
  }
  if (data.hours === "3 to 5 Hours" && data.workers === "3") {
    index = 18;
  }
  if (data.hours === "3 to 5 Hours" && data.workers === "3" && data.tools==true) {
    index = 6;
  }
  if (data.hours === "3 to 5 Hours" && data.workers === "4") {
    index = 17;
  }
  if (data.hours === "3 to 5 Hours" && data.workers === "4" && data.tools==true) {
    index = 5;
  }
  if (data.hours === "6 to 8 Hours" && data.workers === "1") {
    index = 16;
  }
  if (data.hours === "6 to 8 Hours" && data.workers === "1" && data.tools==true) {
    index = 4;
  }
  if (data.hours === "6 to 8 Hours" && data.workers === "2") {
    index = 15;
  }
  if (data.hours === "6 to 8 Hours" && data.workers === "2" && data.tools==true) {
    index = 3;
  }
  if (data.hours === "6 to 8 Hours" && data.workers === "3") {
    index = 14;
  }
  if (data.hours === "6 to 8 Hours" && data.workers === "3" && data.tools==true) {
    index = 2;
  }
  if (data.hours === "6 to 8 Hours" && data.workers === "4" ) {
    index = 13;
  }
  if (data.hours === "6 to 8 Hours" && data.workers === "4" && data.tools==true) {
    index = 1;
  }

  const unitAmount = price.length > 0 ? price[`${index}`].unit_amount / 100 : 0;
  const unitPriceId = price.length > 0 ? price[`${index}`].id : "";
  console.log(price)
  {
    /**conditional price data upon form information */
  }
  {
    /**set job details with forum details */
  }

  const getForum = async () => {
    // const userEmail = (await getSession()).user.email
    const username = await getSession();
    const currentUser = username.user.email;
    console.log(currentUser);
    const res = await fetch(
      `https://www.hanzhomesolutions.com/api/confirmation?userId=${encodeURIComponent(currentUser)}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch user forum, status: ${res.status}`);
    }
    const forumData = await res.json();
    console.log("this is forum ->", forumData);
    setData(forumData);
  };
  {
    /**set job details with forum details */
  }

  {
    /**DATE CONVERSION FUNCTION vvvv*/
  }
  function formatDateString(dateString) {
    const date = new Date(dateString);

    // Get the month, day, and year from the date object
    let month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed; add 1
    let day = date.getUTCDate().toString().padStart(2, "0");
    let year = date.getUTCFullYear().toString().slice(-2); // Get the last 2 digits of the year

    // Format the date string in MM/DD/YY format
    return `${month}/${day}/${year}`;
  }
  {
    /**DATE CONVERSION FUNCTION ^^^^*/
  }

  const payNow = async () => {
    const username = await getSession();
    const currentUser = username.user.email;
    const res = await fetch(
      `https://www.hanzhomesolutions.com/api/checkout_session?priceId=${unitPriceId}&userID=${currentUser}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!res.ok) {
      throw new Error(`Failed to post payment, status: ${res.status}`);
    }
    const data = await res.json();
    window.location.href = data.url;
    console.log("payment POST success!", res);
  };


  return (
    <div>
      <Navbar />
      <div className="flex flex-col min-h-screen justify-center items-center text-black bg-[#d1cac260]">
        <h1 className="mt-1 font-medium italic mb-4 text-[24px] sm:text-[30px] text-center">
          'Only a few clicks away before you can sit back and let Hanz do the
          job'
        </h1>
        <h1 className="mt-1 font-extrabold underline text-lg sm:text-xl text-center">Job Details</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 m-2 border-4 rounded-lg shadow-lg w-full max-w-[95%] lg:max-w-[35rem] bg-gradient-to-b from-cyan-100 to-neutral-200">
          <span className="text-center grid">
            job
            <span className="text-center bg-slate-100 bg-opacity-50 rounded-lg font-thin text-[20px]">
              {data.job}{" "}
            </span>
          </span>
          <span className="grid text-center">
            workers
            <span className="bg-slate-100 bg-opacity-50 rounded-lg  font-thin text-[20px] text-center">
              {data.workers}{" "}
            </span>
          </span>
          <span className="grid text-center">
            hours
            <span className="bg-slate-100 bg-opacity-50 rounded-lg  font-thin text-[20px] text-center">
              {data.hours}{" "}
            </span>
          </span>
          <span className="grid text-center">
            time
            <span className="bg-slate-100 bg-opacity-50 rounded-lg  font-bold text-[20px] text-center">
              {data.time}{" "}
            </span>
          </span>
          <span className="grid text-center">
            date
            <span className="bg-slate-100 bg-opacity-50 rounded-lg  font-bold text-[20px] text-center">
              {data ? formatDateString(data.date) : null}
            </span>
          </span>
          <span className="grid text-center">
            description
            <span className="bg-slate-100 bg-opacity-50 rounded-lg font-thin text-[17px] text-center">
              {data.description}{" "}
            </span>
          </span>
          <span className="grid text-center">
            Name
            <span className="bg-slate-100 bg-opacity-50 rounded-lg  font-thin text-[20px] text-center">
              {data.customerName}
            </span>
          </span>
          <span className="grid text-center">
            Address
            <span className="bg-slate-100 bg-opacity-50 rounded-lg font-thin text-[20px] text-center">
              {data.customerAddress}
            </span>
          </span>
          <span className="grid text-center">
            City
            <span className="bg-slate-100 bg-opacity-50 rounded-lg  font-thin text-[20px] text-center">
              {data.customerCity}
            </span>
          </span>
          <span className="grid text-center">
            Zip
            <span className="bg-slate-100 bg-opacity-50 rounded-lg  font-thin text-[20px] text-center">
              {data.customerZip}{" "}
            </span>
          </span>
          <span className="grid text-center">
            Email
            <span className="bg-slate-100 bg-opacity-50 rounded-lg font-thin text-[17px] text-center">
              {data.customerEmail}
            </span>
          </span>
          <span className="grid text-center">
            Phone
            <span className="bg-slate-100 bg-opacity-50 rounded-lg  font-thin text-[20px] text-center">
              {data.customerPhone}
            </span>
          </span>
        </div>
        <h1 className="text-center mt-1 font-extrabold underline text-lg sm:text-xl">
          Booking Payment
        </h1>
        <div className=" flex flex-col mb-5 border-2 rounded-lg border-black p-5 lg:p-4 bg-slate-100 max-w-screen-sm lg:max-w-lg mx-auto max-h-[80vh] lg:max-h-[50vh] overflow-y-auto ">
          <span>
            Deposit due now:
            {data.hours === "2 or Less Hours" && data.workers === "1" ? (
              <>${unitAmount}</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "2" ? (
              <>${unitAmount}</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "3" ? (
              <>${unitAmount}</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "4" ? (
              <>${unitAmount}</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "1" ? (
              <>${unitAmount}</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "2" ? (
              <>${unitAmount}</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "3" ? (
              <>${unitAmount}</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "4" ? (
              <>${unitAmount}</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "1" ? (
              <>${unitAmount}</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "2" ? (
              <>${unitAmount}</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "3" ? (
              <>${unitAmount}</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "4" ? (
              <>${unitAmount}</>
            ) : null}
          </span>
          <span>
            Total due to Worker(s):
            {data.hours === "2 or Less Hours" && data.workers === "1" && data.tools==false ? (
              <>$50</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "1"  && data.tools==true ? (
              <>$105</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "2" && data.tools==false ? (
              <>$100</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "2" && data.tools==true ? (
              <>$155</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "3" && data.tools==false ? (
              <>$150</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "3" && data.tools==true ? (
              <>$205</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "4" && data.tools==false ? (
              <>$200</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "4" && data.tools==true ? (
              <>$255</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "1" && data.tools==false ? (
              <>$100</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "1" && data.tools==true ? (
              <>$155</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "2" && data.tools==false ? (
              <>$200</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "2" && data.tools==true ? (
              <>$255</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "3" && data.tools==false ? (
              <>$300</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "3" && data.tools==true ? (
              <>$355</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "4" && data.tools==false ? (
              <>$400</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "4" && data.tools==true ? (
              <>$455</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "1" && data.tools==false ? (
              <>$160</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "1" && data.tools==true ? (
              <>$215</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "2" && data.tools==false ? (
              <>$320</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "2" && data.tools==true ? (
              <>$375</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "3" && data.tools==false ? (
              <>$480</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "3" && data.tools==true ? (
              <>$535</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "4" && data.tools==false ? (
              <>$640</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "4" && data.tools==true ? (
              <>$695</>
            ) : null}
          </span>
          <span>
            Total job cost:
            {data.hours === "2 or Less Hours" && data.workers === "1"  && data.tools==false ? (
              <>$100</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "1"  && data.tools==true ? (
              <>$200</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "2"  && data.tools==false ? (
              <>$200</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "2"  && data.tools==true ? (
              <>$300</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "3"  && data.tools==false ? (
              <>$300</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "3"  && data.tools==true ? (
              <>$400</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "4"  && data.tools==false ? (
              <>$400</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "4"  && data.tools==true ? (
              <>$500</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "1"  && data.tools==false ? (
              <>$175</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "1"  && data.tools==true ? (
              <>$275</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "2"  && data.tools==false ? (
              <>$350</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "2"  && data.tools==true ? (
              <>$450</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "3"  && data.tools==false ? (
              <>$525</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "3"  && data.tools==true ? (
              <>$625</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "4"  && data.tools==false ? (
              <>$700</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "4"  && data.tools==true ? (
              <>$800</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "1"  && data.tools==false ? (
              <>$240</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "1"  && data.tools==true ? (
              <>$340</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "2"  && data.tools==false ? (
              <>$480</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "2"  && data.tools==true ? (
              <>$580</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "3"  && data.tools==false ? (
              <>$720</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "3"  && data.tools==true ? (
              <>$820</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "4"  && data.tools==false ? (
              <>$960</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "4"  && data.tools==true ? (
              <>$1060</>
            ) : null}
          </span>

          <div
            className="mt-4 p-2 bg-indigo-400 rounded-md text-center text-white font-bold cursor-pointer hover:bg-indigo-300 hover:text-green-300"
            onClick={payNow}
          >
            Book Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
