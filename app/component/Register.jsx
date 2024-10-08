"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineLoading } from 'react-icons/ai';
import Footer from "./Footer";
const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      const res1 = await fetch("/api/userExist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //send email to server-side
        body: JSON.stringify({ email }),
      });
      const { user } = await res1.json();
      //check if user already exist
      if (user) {
        setError("user already exist");
        const form = e.target;
        form.reset();
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        setLoading(false);
        form.reset();
        router.push("https://www.hanzhomesolutions.com/Login");
      } else {
        console.log("user registration failed");
        setError('Make sure Email is valid')
        setLoading(false);
      }
    } catch (error) {
      console.log("error during registration", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800">
             <div className="  text-xl italic bg-clip-text text-transparent bg-gradient-to-l from-teal-200 via-slate-200 to-amber-200 font-bold tracking-wide hover:tracking-widest duration-300 mt-44">
            Hanz
          </div>
      <div className="rounded-lg shadow-lg text-center border-t-4  border-yellow-300 flex-col flex p-3 items-center max-w-72 bg-slate-700 mb-[510px]">
        <h1 className="capitalize text-orange-100 w-full text-nowrap mb-2">signup for a Hanz Home-Solutions account today</h1>
        <form onSubmit={handleSubmit} name="userRegister">
        <label className='text-orange-100 block bg-[#64615d] w-fit rounded-2xl mb-1 p-2' htmlFor="email">Email</label>
          <input
            className="m-2 p-2 rounded-lg  border-4 text-black"
            minLength={5}
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className=' text-orange-100 block bg-[#64615d] w-fit rounded-2xl mb-1 p-2' htmlFor="username">Username</label>
          <input
            className="m-2 p-2 rounded-lg border-4 text-black"
            minLength={5}
            type="text"
            name="username"
            placeholder="User name"
            onChange={(e) => setUserName(e.target.value)}
          />
          <label className='text-orange-100 block bg-[#64615d] w-fit rounded-2xl mb-1 p-2' htmlFor="password">Password</label>
          <input
            className="m-2 p-2 rounded-lg border-4 text-black"
            minLength={5}
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full text-orange-100 block rounded-2xl p-2 bg-[#64615d] hover:text-green-300">Register</button>
        </form>
        <a className="text-xs underline mb-1 text-orange-100 hover:scale-105" href="/Login">
          Log in here
        </a>
     
        
        {loading ? (
          <AiOutlineLoading className="icon-spinning" /> // Placeholder for your loading indicator
) : error ? (
  <div className="bg-red-500 m-4 text-sm rounded-md p-2">{error}</div>
) : null}
      </div>
      <Footer  />
    </div>
  );
};

export default Register;
