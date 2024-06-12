"use client";
import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";




const Page = () => {
  const notifySubmit = () =>
    toast("A Hanz labor force agent will contact you soon.", { icon: "✅", style: { background: "#90EE90" } });

  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const zipvalid = await fetch(`https://api.zipcodestack.com/v1/search?codes=${zip}&country=US&apikey=${process.env.NEXT_PUBLIC_ZIP_API}`,{
      method:'GET',
      // body:JSON.stringify({
      //   zip
      // })
    })
    const data = await zipvalid.json()
    if(!zipvalid.ok||data.results.length === 0){
      alert('invalid zip please try again')
      throw new Error("Failed to verify zip", zipvalid);
    }else{
     console.log(data)
     const res = await fetch("/api/worker", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
         zip,
         city,
         email,
         number,
         firstName,
         lastName,
       }),
     });
     if (!res.ok) {
       throw new Error("Failed to post worker info", res);
     } else {
       console.log("success worker forum");
       notifySubmit()
       e.target.reset();
     }
    }
    


  };

  return (
    <div className="flex min-h-screen justify-center items-center text-black bg-slate-100 ">
      <form
        onSubmit={handleSubmit}
        className="text-center bg-[#3fb5afc5] w-[40rem] p-10 rounded-xl shadow-2xl"
      >
        <fieldset>
          <legend className="font-mono bg-slate-200 rounded-lg p-3 mb-4">Job dispatch sign-on forum</legend>
          <div className="my-3">
            <label className="mr-3 text-white font-mono">
              Location
              <input
                className="ml-3 mt-3 bg-transparent border-b border-black"
                type="text"
                placeholder="zip"
                required
                onChange={(e) => setZip(e.target.value)}
                maxLength={5}
                minLength={5}
              />
            </label>
            <label className="text-white">
              <input
                className="bg-transparent mb-3 border-b  border-black"
                type="text"
                placeholder="city"
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
          </div>
          <div className="my-3 ">
            <label className="mr-3  text-white  font-mono">
              Contact
              <input
                className="ml-3  bg-transparent border-b border-black"
                type="email"
                placeholder="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="text-white">
              <input
                className="bg-transparent mt-3 border-b border-black"
                type="tel"
                placeholder="Phone number"
                required
                onChange={(e) => setNumber(e.target.value)}
                maxLength={10}
                minLength={10}
              />
            </label>
          </div>
          <div>
            <label className="text-white font-mono ">
              Name
              <input
                className="ml-3  bg-transparent border-b border-black"
                type="text"
                placeholder="First Name"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label className="text-white">
              <input
                className="ml-3 bg-transparent border-b mt-3 border-black"
                type="text"
                placeholder="Last Name"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>
          <div className="my-3">
            <label>
              Do you agree to <a href="/TermsOfService" className="underline">terms and conditions</a>
              <input type="checkbox"
              name="terms"
              required
              onChange={(e) => setTermsChecked(e.target.checked)}
              />
            </label>
          </div>
        </fieldset>
        <button
          type="submit"
          className="bg-blue-400 uppercase p-2 mt-3 font-semibold rounded-xl hover:text-xl"
        >
          Submit
        </button>
        <div>
          <p className="text-[10px] mt-3">
            ' After forum submission a Hanz Larbor force agent will contact you
            within 72 hours '
          </p>
        </div>
      </form>
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
    </div>
  );
};

export default Page;
