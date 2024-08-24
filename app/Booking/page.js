"use client";
import toast, { Toaster } from "react-hot-toast";
import React from "react";
import Navbar from "../component/Navbar";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import Footer from "../component/Footer";

const page = () => {
  const notifySubmit = () =>
    toast("Forum submitted.", { icon: "✅", style: { background: "#90EE90" } });
  const missingFields = () =>
    toast("Please fill out all fields", {
      icon: "❌",
      style: { background: "#F08080" },
    });
  const router = useRouter();
  const [AddressDetcity, setaddressDetcity] = useState("");
  const [AddressDetzip, setaddressDetzip] = useState("");
  const [toggle, settoggle] = useState(false);
  const [job, setJob] = useState("");
  const [addyAuto, setAddyAuto] = useState("");
  const [workers, setWorkers] = useState("");
  const [hours, setHours] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerZip, setCustomerZip] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [tools, setTools] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  const paid = false;

  {
    /**-------------------------------- */
  }

  useEffect(() => {
    const getBookedDates = async () => {
      const res = await fetch("/api/BookedDates", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        throw new Error(`Failed to fetch user forum, status: ${res.status}`);
      }
      const data = await res.json();
      const mappedDates = data.map((dateObj) => dateObj.date);
      setUnavailableDates(mappedDates);
    };

    getBookedDates();
  }, []);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    if (!unavailableDates.includes(newDate)) {
      setSelectedDate(newDate);
      setDate(newDate);
    } else {
      alert("This date is unavailable for booking.");
    }
  };

  {
    /**-------------------------------- */
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(tools);
    {
      /*get user to identify forum for get methods*/
    }
    const user = await getSession();
    const customerId = user.user.email;
    if (
      !job ||
      !workers ||
      !hours ||
      !time ||
      !setSelectedDate ||
      !description||
      !customerName ||
      !customerAddress ||
      !customerCity ||
      !customerZip ||
      !customerEmail ||
      !customerPhone ||
      workers === "Select below" ||
      hours === "Select below"
    ) {
      missingFields();
    } else {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          job,
          workers,
          hours,
          time,
          date,
          description,
          customerName,
          customerAddress,
          customerCity,
          customerZip,
          customerEmail,
          customerPhone,
          customerId,
          tools,
          paid,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit customer forum", res);
      } else {
        console.log("Forum submitted");
        notifySubmit();
        router.push("Payment");
      }
    }
  };

  const handleJobChange = (e) => {
    setJob(e.target.name);
  };

  useEffect(() => {
    const autocomplete = async () => {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${customerAddress}&lang=en&format=json&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_KEY}`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const firstChoice = data.results[0];
        const addyChoice = firstChoice.formatted;
        console.log(addyChoice);
        setAddyAuto(addyChoice);
        setaddressDetcity(firstChoice.city);
        setaddressDetzip(firstChoice.postcode);
      }
    };
    autocomplete();
  }, [customerAddress]);

  function splitAtFirstComma(address) {
    const commaIndex = address.indexOf(",");
    return address.substring(0, commaIndex);
  }

  const addysetAuto = () => {
    const splitAddy = splitAtFirstComma(addyAuto);
    setCustomerAddress(splitAddy);
    settoggle(false);
    setCustomerCity(AddressDetcity);
    setCustomerZip(AddressDetzip);
  };

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen justify-center items-center text-black bg-[#D1CAC2] p-4 md:p-8 lg:p-12">
        <div className="w-full max-w-md bg-slate-100 shadow-lg rounded-md p-6 md:max-w-lg lg:max-w-xl ">
          <h1 className="text-center mt-1 font-extrabold">BOOK NOW</h1>
          <div className="flex justify-center bg-[#ebd48f80] w-full max-w-[35rem] h-full max-h-[25rem] md:max-w-[30rem] lg:max-w-[35rem] p-4 m-2 rounded-sm shadow-xl  border-4 border-gray-300">
            <form name="forumSub">
              <p className="text-[19px] font-bold my-2 text-center m-4">
                what type of service do you need? Please choose one.
              </p>
              <div className="grid  gap-3  text-center font-medium">
                {/**checkbox services*/}
                <label className="text-[19px] my-2 text-center">
                  <input
                    type="checkbox"
                    name="moving"
                    checked={job.moving}
                    onChange={handleJobChange}
                  />
                  Moving
                </label>
                <label className="text-[19px] my-2">
                  <input
                    type="checkbox"
                    name="landscaping"
                    checked={job.landscaping}
                    onChange={handleJobChange}
                  />
                  Landscaping
                </label>
                <label className="text-[19px] my-2">
                  <input
                    type="checkbox"
                    name="houseKeeping"
                    checked={job.houseKeeping}
                    onChange={handleJobChange}
                  />
                  Property cleaning
                </label>
                <label className="text-[19px] my-2">
                  <input
                    type="checkbox"
                    name="handyman"
                    checked={job.handyman}
                    onChange={handleJobChange}
                  />
                  Handyman services
                </label>
                <label className="text-[19px] my-2">
                  <input
                    type="checkbox"
                    name="generalContracts"
                    checked={job.generalContracts}
                    onChange={handleJobChange}
                  />
                  General Labor
                </label>
              </div>
              <hr />
              <p className="text-[19px] my-2 text-center font-bold">
                Job details
              </p>
              <div className="grid text-center grid-cols-1 mx-5 font-medium">
                {/**job details */}
                <label className="text-[19px] m-2">
                  Workers requested
                  <select
                    className="mx-1"
                    onChange={(e) => setWorkers(e.target.value)}
                    name="workerAmount"
                    value={workers}
                    required
                  >
                    <option>Select below</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </label>
                <label className="text-[19px] m-2">
                  Hours needed
                  <select
                    className="mx-1"
                    onChange={(e) => setHours(e.target.value)}
                    value={hours}
                    name="hours"
                    required
                  >
                    <option>Select below</option>
                    <option>2 or Less Hours</option>
                    <option>3 to 5 Hours</option>
                    <option>6 to 8 Hours</option>
                  </select>
                </label>
                <label className="text-[19px] m-2">
                  Appointment time
                  <input
                    type="time"
                    value={time.time}
                    name="time"
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                </label>
                <label className="text-[19px] m-2">
                  Appointment date
                  <input
                    type="date"
                    min={today}
                    value={selectedDate}
                    onChange={handleDateChange}
                    required
                  />
                </label>
                <label className="text-[19px] m-2">
                  Job description
                  <textarea
                    minLength={10}
                    maxLength={200}
                    name="description"
                    placeholder="10 character min"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required
                  />
                </label>
                <label className="text-[19px] m-2">
                  Check if Tools Needed , list in job description
                  <input
                    type="checkbox"
                    checked={tools}
                    onChange={(e) => setTools(e.target.checked)}
                  />
                </label>
              </div>
              <hr />
              <div className="flex justify-center items-center text-center flex-col m-2 w-fit">
                {/**customer details */}
                <label className="text-[19px] my-2 max-w-fit mx-3">
                  - Name
                  <input
                    name="customerName"
                    placeholder="Full Name"
                    className="mx-2 bg-transparent border-b-2"
                    onChange={(e) => setCustomerName(e.target.value)}
                    minLength={5}
                    required
                  />
                </label>
                <label className="text-[19px] my-2  max-w-fit mx-3">
                  - Location
                  <input
                    name="address"
                    placeholder="Address"
                    className="mx-2 bg-transparent border-b-2"
                    onChange={(e) => {
                      setCustomerAddress(e.target.value);
                      settoggle(true);
                    }}
                    value={customerAddress}
                    required
                  />
                  <div onClick={addysetAuto}>
                    {toggle ? (
                      <p className="bg-slate-100 text-black my-2 rounded-lg flex shadow-2xl border-black border-4 cursor-pointer">
                        {addyAuto}
                      </p>
                    ) : null}
                  </div>
                  <input
                    name="city"
                    placeholder="City"
                    className="mx-2 bg-transparent border-b-2"
                    onChange={(e) => setCustomerCity(e.target.value)}
                    value={customerCity}
                    required
                  />
                  <input
                    name="zip"
                    placeholder="zip"
                    type="text"
                    className="mx-2 bg-transparent border-b-2"
                    onChange={(e) => setCustomerZip(e.target.value)}
                    maxLength={5}
                    value={customerZip}
                    required
                  />
                </label>
                <label className="text-[19px] my-2  max-w-fit mx-3">
                  - Contact
                  <input
                    name="customerEmail"
                    placeholder="Email"
                    type="email"
                    className="mx-2 bg-transparent border-b-2"
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    required
                  />
                  <input
                    name="phone"
                    placeholder="Phone"
                    type="text"
                    className="mx-2 bg-transparent border-b-2"
                    minLength={10}
                    maxLength={10}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="p-3">
                <button
                  className="font-bold rounded-md shadow-xl w-full border-t-4 mt-2 p-3 bg-slate-300  duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold "
                  type="button"
                  onClick={handleSubmit}
                >
                  Confirm Booking 👉
                </button>
              </div>
              <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                  // Default options for specific types
                  success: {
                    duration: 4000,
                    theme: {
                      primary: "green",
                      secondary: "black",
                    },
                  },
                }}
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
