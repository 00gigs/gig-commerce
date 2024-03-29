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
    const res = await fetch(`/api/getProducts`, {
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
    index = 12;
  }
  if (data.hours === "2 or Less Hours" && data.workers === "2") {
    index = 10;
  }
  if (data.hours === "2 or Less Hours" && data.workers === "3") {
    index = 9;
  }
  if (data.hours === "2 or Less Hours" && data.workers === "4") {
    index = 8;
  }
  if (data.hours === "3 to 5 Hours" && data.workers === "1") {
    index = 7;
  }
  if (data.hours === "3 to 5 Hours" && data.workers === "2") {
    index = 6;
  }
  if (data.hours === "3 to 5 Hours" && data.workers === "3") {
    index = 5;
  }
  if (data.hours === "3 to 5 Hours" && data.workers === "4") {
    index = 4;
  }
  if (data.hours === "6 to 8 Hours" && data.workers === "1") {
    index = 3;
  }
  if (data.hours === "6 to 8 Hours" && data.workers === "2") {
    index = 2;
  }
  if (data.hours === "6 to 8 Hours" && data.workers === "3") {
    index = 1;
  }
  if (data.hours === "6 to 8 Hours" && data.workers === "4") {
    index = 0;
  }

  const unitAmount = price.length > 0 ? price[`${index}`].unit_amount / 100 : 0;
  const unitPriceId = price.length > 0 ? price[`${index}`].id : "";
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
      `/api/confirmation?userId=${encodeURIComponent(currentUser)}`,
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
      `/api/checkout_session?priceId=${unitPriceId}&userID=${currentUser}`,
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
      <div className="flex flex-col min-h-screen justify-center items-center text-black bg-slate-100">
        <h1 className="mt-1 font-medium italic mb-4 text-[30px]">
          ' Only a few clicks away before you can sit back and let Hanz do the
          job '
        </h1>
        <h1 className="mt-1 font-extrabold underline">Job Details</h1>
        <div className="grid grid-cols-3 gap-5 p-2 m-2 border-4 h-[25rem] w-[30rem] border-slate bg-gradient-to-b from-cyan-100 to-neutral-200 max-sm:flex flex-col max-sm:h-[40rem] text-center">
          <span className="grid">
            job
            <span className="bg-slate-100 bg-opacity-50 rounded-lg font-thin text-[20px]">
              {data.job}{" "}
            </span>
          </span>
          <span className="grid">
            workers
            <span className="bg-slate-100 bg-opacity-50 rounded-lg  font-thin text-[20px]">
              {data.workers}{" "}
            </span>
          </span>
          <span className="grid">
            hours
            <span className="bg-slate-100 bg-opacity-50 rounded-lg  font-thin text-[20px]">
              {data.hours}{" "}
            </span>
          </span>
          <span className="grid">
            time
            <span className="bg-slate-100 bg-opacity-50 rounded-lg  font-bold text-[20px]">
              {data.time}{" "}
            </span>
          </span>
          <span className="grid">
            date
            <span className="bg-slate-100 bg-opacity-50 rounded-lg  font-bold text-[20px]">
              {data ? formatDateString(data.date) : null}
            </span>
          </span>
          <span className="grid">
            description
            <span className="bg-slate-100 bg-opacity-50 rounded-lg font-thin text-[17px]">
              {data.description}{" "}
            </span>
          </span>
          <span className="grid">
            Name
            <span className="bg-slate-100 bg-opacity-50 rounded-lg  font-thin text-[20px]">
              {data.customerName}
            </span>
          </span>
          <span className="grid">
            Address
            <span className="bg-slate-100 bg-opacity-50 rounded-lg font-thin text-[20px]">
              {data.customerAddress}
            </span>
          </span>
          <span className="grid">
            City
            <span className="bg-slate-100 bg-opacity-50 rounded-lg  font-thin text-[20px]">
              {data.customerCity}
            </span>
          </span>
          <span className="grid">
            Zip
            <span className="bg-slate-100 bg-opacity-50 rounded-lg  font-thin text-[20px]">
              {data.customerZip}{" "}
            </span>
          </span>
          <span className="grid">
            Email
            <span className="bg-slate-100 bg-opacity-50 rounded-lg font-thin text-[17px]">
              {data.customerEmail}
            </span>
          </span>
          <span className="grid">
            Phone
            <span className="bg-slate-100 bg-opacity-50 rounded-lg  font-thin text-[20px]">
              {data.customerPhone}
            </span>
          </span>
        </div>
        <h1 className="text-center mt-1 font-extrabold underline">
          Booking Payment
        </h1>
        <div className=" flex flex-col mb-5 border-2 rounded-lg border-black p-5 max-sm:min-h-screen ">
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
            {data.hours === "2 or Less Hours" && data.workers === "1" ? (
              <>$50</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "2" ? (
              <>$100</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "3" ? (
              <>$150</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "4" ? (
              <>$200</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "1" ? (
              <>$100</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "2" ? (
              <>$200</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "3" ? (
              <>$300</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "4" ? (
              <>$400</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "1" ? (
              <>$160</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "2" ? (
              <>$320</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "3" ? (
              <>$480</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "4" ? (
              <>$640</>
            ) : null}
          </span>
          <span>
            Total job cost:
            {data.hours === "2 or Less Hours" && data.workers === "1" ? (
              <>$100</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "2" ? (
              <>$200</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "3" ? (
              <>$300</>
            ) : null}
            {data.hours === "2 or Less Hours" && data.workers === "4" ? (
              <>$400</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "1" ? (
              <>$175</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "2" ? (
              <>$350</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "3" ? (
              <>$525</>
            ) : null}
            {data.hours === "3 to 5 Hours" && data.workers === "4" ? (
              <>$700</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "1" ? (
              <>$240</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "2" ? (
              <>$480</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "3" ? (
              <>$720</>
            ) : null}
            {data.hours === "6 to 8 Hours" && data.workers === "4" ? (
              <>$960</>
            ) : null}
          </span>

          <div
            className="flex flex-col bg-indigo-400 rounded-md items-center cursor-pointer hover:bg-indigo-300"
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
