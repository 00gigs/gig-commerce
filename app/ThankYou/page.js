"use client";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Navbar from "../component/Navbar";
import { getSession } from "next-auth/react";


const page = () => {
  
  

  const notifySubmit = () =>
    toast("Payment successful.", {
      icon: "✅",
      style: { background: "#90EE90" },
    });

  const webhookCall = async () => {
    const username = await getSession();
    const currentUser = username.user.email;
    const res = await fetch("/api/webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      
      },
      body: JSON.stringify({
        type: "payment_intent.succeeded",

        customer: currentUser,
      }),
    });
    if (!res.ok) {
      throw new Error("failed to post webhook");
    }
  };

  useEffect(() => {
    notifySubmit();
    webhookCall();
  }, []);
  return (
    <div className="bg-slate-100 w-screen">
      <Navbar />
      <div className=' className="grid text-center min-h-screen  text-black bg-slate-100 mx-6 p-2 border-4"'>
        <Toaster />
        Thank you
      </div>
    </div>
  );
};

export default page;
