'use client'
import toast, { Toaster } from 'react-hot-toast';
import React from "react";
import Navbar from "../component/Navbar";
import  {useState}  from "react";
import { useRouter } from 'next/navigation';
import { getSession } from 'next-auth/react';
const page = () => {
  const notifySubmit = () => toast('Forum submitted.',{icon:'✅',style:{background:'#90EE90'}});
  const missingFields = () => toast('Please fill out all fields',{icon:'❌',style:{background:'#F08080'}});
  const router = useRouter()
  const [job, setJob] = useState('');
  const [workers, setWorkers] = useState('');
  const [hours, setHours] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [customerZip, setCustomerZip] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
const [customerPhone,setCustomerPhone]= useState('');




  const handleSubmit = async (e) => {
    e.preventDefault()
  {/*get user to identify forum for get methods*/}
    const user = await getSession()
   const customerId = user.user.email
    if(!job||!workers||!hours||!time||!date||!description||!customerName||!customerAddress||!customerCity||!customerZip||!customerEmail||!customerPhone||workers==='Select below'||hours==='Select below'){
      missingFields()
    }else{
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json"  },
        body: JSON.stringify( {job,
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
        },),
      })
        
  if(!res.ok){
    throw new Error('Failed to submit customer forum',res)
  }else{
    console.log('Forum submitted')
    notifySubmit()
    router.push('/Payment')
  }
    }
  };

const handleJobChange = (e) =>{
  setJob(e.target.name)
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
                what type of service do you need ? Please choose one
              </p>
              <div className="grid  gap-3  text-center font-medium">
                {/**checkbox services*/}
                <label className="text-[19px] my-2 text-center">
                  <input type="checkbox" name="moving" checked={job.moving} onChange={handleJobChange}/>
                  Moving
                </label>
                <label className="text-[19px] my-2">
                  <input type="checkbox" name="landscaping" checked={job.landscaping} onChange={handleJobChange} />
                  Landscaping
                </label>
                <label className="text-[19px] my-2">
                  <input type="checkbox" name="houseKeeping" checked={job.houseKeeping} onChange={handleJobChange}/>
                  Property cleaning
                </label>
                <label className="text-[19px] my-2">
                  <input type="checkbox" name="handyman" checked={job.handyman} onChange={handleJobChange}/>
                  Handyman services
                </label>
                <label className="text-[19px] my-2">
                  <input type="checkbox" name="generalContracts" checked={job.generalContracts} onChange={handleJobChange}/>
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
                  <select className="mx-1" onChange={(e)=>setWorkers(e.target.value)} name="workerAmount" value={workers}  required>
                    <option>Select below</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </label>
                <label className="text-[19px] m-2">
                  Hours needed
                  <select className="mx-1" onChange={(e)=>setHours(e.target.value)} value={hours} name="hours" required>
                  <option>Select below</option>
                    <option>2 or Less Hours</option>
                    <option>3 to 5 Hours</option>
                    <option>6 to 8 Hours</option>
                  </select>
                </label>
                <label className="text-[19px] m-2" >
                  Appointment time
                  <input type="time" value={time.time} name="time" onChange={(e)=>setTime(e.target.value)} required/>
                </label>
                <label className="text-[19px] m-2">
                  Appointment date
                  <input type="date" name="date" onChange={(e)=>setDate(e.target.valueAsDate)} value={date.date} required/>
                </label>
                <label className="text-[19px] m-2">
                  Job description
                  <textarea maxLength={75} name="description" onChange={(e)=>setDescription(e.target.value)} value={description} required/>
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
                    onChange={(e)=>setCustomerName(e.target.value)}
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
                    onChange={(e)=>setCustomerAddress(e.target.value)}
                    required
                  />
                  <input
                  name="city"
                    placeholder="City"
                    className="mx-2 bg-transparent border-b-2"
                    onChange={(e)=>setCustomerCity(e.target.value)}
                    required
                  />
                  <input
                  name="zip"
                    placeholder="zip"
                    type="text"
                    className="mx-2 bg-transparent border-b-2"
                    onChange={(e)=>setCustomerZip(e.target.value)}
                    maxLength={5}
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
                    onChange={(e)=>setCustomerEmail(e.target.value)}
                    required
                  />
                  <input
                  name="phone"
                    placeholder="Phone"
                    type="text"
                    className="mx-2 bg-transparent border-b-2"
                    min={10}
                    maxLength={10}
                    onChange={(e)=>setCustomerPhone(e.target.value)}
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
            Submit Booking
          </button>
              </div>
              <Toaster position="top-center" reverseOrder={false}
              toastOptions={{
                // Default options for specific types
                success: {
                  duration: 4000,
                  theme: {
                    primary: 'green',
                    secondary: 'black',
                  },
                },
              }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;



