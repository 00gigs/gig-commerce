'use client'
import React from "react";
import Navbar from "../component/Navbar";
import  {useState}  from "react";

const page = () => {
  const [job, setJob] = useState({
    moving: false,
    landscaping: false,
    houseKeeping: false,
    handyman: false,
    generalContracts: false,
  });
  const [workers, setWorkers] = useState({
    workerAmount:''
  });
  const [hours, setHours] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerContact, setCustomerContact] = useState('');

  const handleSubmit = async () => {

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
        customerContact,
      }),
    })
console.log(res)
    ;
  };

const handleChange = (e) =>{
  const {name,value} = e.target
  setJob({...job,[e.target.name]: e.target.checked})
  setWorkers({...workers,[name]:value})
}

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen justify-center items-center text-black bg-slate-100">
        <div className="bg-slate-300 rounded-md h-full my-5 w-fit bg-blend-darken">
          <h1 className="text-center mt-1 font-extrabold">BOOK NOW</h1>
          <div className="flex justify-center bg-slate-500 w-[35rem] h-[25rem] m-4 rounded-sm shadow-2xl overflow-y-scroll border-4">
            <form name="forumSub">
              <p className="text-[19px] font-bold my-2 text-center m-4">
                what type of service do you need ?
              </p>
              <div className="grid  gap-3  text-center font-medium">
                {/**checkbox services*/}
                <label className="text-[19px] my-2 text-center">
                  <input type="checkbox" name="moving" checked={job.moving} onChange={handleChange}/>
                  Moving
                </label>
                <label className="text-[19px] my-2">
                  <input type="checkbox" name="landscaping" checked={job.landscaping} onChange={handleChange} />
                  Landscaping
                </label>
                <label className="text-[19px] my-2">
                  <input type="checkbox" name="houseKeeping" checked={job.houseKeeping} onChange={handleChange}/>
                  Property cleaning
                </label>
                <label className="text-[19px] my-2">
                  <input type="checkbox" name="handyman" checked={job.handyman} onChange={handleChange}/>
                  Handyman services
                </label>
                <label className="text-[19px] my-2">
                  <input type="checkbox" name="generalContracts" checked={job.generalContracts} onChange={handleChange}/>
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
                  <select className="mx-1" onChange={handleChange} name="workerAmount" value={workers.workerAmount}>
                    <option value='one'>1</option>
                    <option value='two'>2</option>
                    <option value='three'>3</option>
                    <option value='four'>4</option>
                  </select>
                </label>
                <label className="text-[19px] m-2">
                  Hours needed
                  <select className="mx-1">
                    <option>2 hours or more</option>
                    <option>up to 5 hours</option>
                    <option>up to 8 hours</option>
                  </select>
                </label>
                <label className="text-[19px] m-2">
                  Appointment time
                  <input type="time" />
                </label>
                <label className="text-[19px] m-2">
                  Appointment date
                  <input type="date" />
                </label>
                <label className="text-[19px] m-2">
                  Job description
                  <textarea maxLength={75} />
                </label>
              </div>
              <hr />
              <div className="flex justify-center items-center text-center flex-col m-2 w-fit">
                {/**customer details */}
                <label className="text-[19px] my-2 max-w-fit mx-3">
                  - Name
                  <input
                    placeholder="Full Name"
                    className="mx-2 bg-transparent border-b-2"
                  />
                </label>
                <label className="text-[19px] my-2  max-w-fit mx-3">
                  - Location
                  <input
                    placeholder="Address"
                    className="mx-2 bg-transparent border-b-2"
                  />
                  <input
                    placeholder="City"
                    className="mx-2 bg-transparent border-b-2"
                  />
                  <input
                    placeholder="zip"
                    type="text"
                    className="mx-2 bg-transparent border-b-2"
                    maxLength={5}
                  />
                </label>
                <label className="text-[19px] my-2  max-w-fit mx-3">
                  - Contact
                  <input
                    placeholder="Email"
                    type="email"
                    className="mx-2 bg-transparent border-b-2"
                  />
                  <input
                    placeholder="Phone"
                    type="text"
                    className="mx-2 bg-transparent border-b-2"
                    min={10}
                    maxLength={10}
                  />
                </label>
              </div>
            </form>
          </div>
          <button
            className="font-bold rounded-md w-full border-t-4 mt-2 duration-200 hover:bg-green-400 hover:text-green-100 hover:font-extrabold "
            type="button"
            onClick={handleSubmit}
          >
            Submit Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
