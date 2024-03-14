"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

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
        form.reset();
        router.push("/");
      } else {
        console.log("user registration failed");
      }
    } catch (error) {
      console.log("error during registration", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
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
        <a className="text-xs underline" href="/Login">
          Log in here
        </a>

        {error && (
          <div className="bg-red-500 m-4 text-sm rounded-md p-2">{error}</div>
        )}
      </div>
    </div>
  );
};

export default Register;
