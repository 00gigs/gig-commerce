"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineLoading } from 'react-icons/ai';
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
             <h1 className="  text-xl italic bg-clip-text text-transparent bg-gradient-to-l from-teal-200 via-slate-200 to-amber-200 font-bold tracking-wide hover:tracking-widest duration-300">
            Hanz
          </h1>
      <div className="rounded-lg shadow-lg text-center border-t-4 border-yellow-300 flex-col flex p-3 items-center max-w-72 bg-slate-700">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} name="userRegister">
          <input
            className="m-2 p-2 rounded-lg  border-4 text-black"
            minLength={5}
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="m-2 p-2 rounded-lg border-4 text-black"
            minLength={5}
            type="text"
            name="username"
            placeholder="User name"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="m-2 p-2 rounded-lg border-4 text-black"
            minLength={5}
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-fit  hover:text-green-300">Register</button>
        </form>
        <a className="text-xs underline mb-1" href="/Login">
          Log in here
        </a>
        <a className="text-[9px] underline mb-1" href="https://www.privacypolicyonline.com/live.php?token=DF2O66e7n8qTOOfvcsM2TOM5OOGDRISz">
        Privacy Policy
        </a>
        
        {loading ? (
          <AiOutlineLoading className="icon-spinning" /> // Placeholder for your loading indicator
) : error ? (
  <div className="bg-red-500 m-4 text-sm rounded-md p-2">{error}</div>
) : null}
      </div>
    </div>
  );
};

export default Register;
