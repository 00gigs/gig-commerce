"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import JobModal from "./JobModal";
const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenalt, setIsOpenalt] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const toggle2 = () => {
    setIsOpenalt(!isOpenalt);
  };
  return (
    <div className="bg-amber-400 w-full h-14 flex justify-between items-center p-3">
      {/**main*/}
      <div className="flex items-center">
        <div>
          {/**drawer menu*/}
          <button
            className="p-1 m-1 w-7  sm:w-9 sm:h-9  hover:bg-amber-300 hover:shadow-2xl rounded"
            onClick={toggle}
          >
            {/** open drawer menu*/}
            {isOpen ? (
              ""
            ) : (
              <img
                
                src="https://img.icons8.com/ios/50/menu--v1.png"
                alt="menu--v1"
              />
            )}
          </button>
          <div
            className={`fixed top-0 left-0 z-40 h-full bg-gray-800 text-white transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out w-64`}
          >
            <div>
              {/**drawer menu items*/}
              <h1 className="text-xl font-bold my-3 ml-1">Services</h1>
              <ul className="mx-3">
                <li className="hover:cursor-pointer my-2 noto-sans-mono">
                  {" "}
                  <Link href={"/landscaping"}> - landscaping</Link>{" "}
                </li>
                <li className="hover:cursor-pointer my-2 noto-sans-mono">
                  <Link href={"/GeneralContract"}>- Handy Man</Link>
                </li>
                <li className="hover:cursor-pointer my-2 noto-sans-mono">
                  <Link href={"/Cleaning"}>- Cleaning Services</Link>{" "}
                </li>
                <li className="hover:cursor-pointer my-2 noto-sans-mono">
                  <Link href={"/Moving"}>- Moving Help</Link>{" "}
                </li>
                <h1 className="text-xl font-bold my-3 ml-1">Account</h1>
                <li className="hover:cursor-pointer my-2 noto-sans-mono">
                  <Link href={"/Jobs"}>- My Jobs</Link>{" "}
                </li>
                <li className="hover:cursor-pointer my-2 noto-sans-mono">
                  <Link href={"/Contact"}>- Leave a review</Link>{" "}
                </li>
                <li className="hover:cursor-pointer my-2 noto-sans-mono">
                  <a href='tel:+1234567890'>- Talk to a team member</a>{" "}
                </li>
                <li className="hover:cursor-pointer my-2 noto-sans-mono">
                  <Link href={"/review"}>- View Reviews</Link>{" "}
                </li>
              </ul>
            </div>
            {/**close drawer menu*/}
            {isOpen && (
              <div
                className=" absolute bottom-3 right-3 flex justify-center hover:cursor-pointer text-red-300"
                onClick={() => setIsOpen(false)}
              >
                close
              </div>
            )}
          </div>
        </div>
        {/**drawer menu*/}
        <a href="/">
          <h1 className=" text-2xl italic bg-clip-text text-transparent bg-gradient-to-l from-teal-200 via-slate-200 to-amber-200 font-bold tracking-wide hover:tracking-widest duration-300">
            Hanz
          </h1>
        </a>
        <div className="mx-2 flex gap-3">
          <Link className="text-[12px] noto-sans-mono underline hover:text-[14px]" href={"/Contact"}>
            {" "}
            Contact
          </Link>
          <Link className="text-[12px] underline noto-sans-mono hover:text-[14px]" href={"/About"}>
            {" "}
            About
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        {/**user&signOut*/}
        <span
          className=" text-xs flex items-center mx-5"
          title="click profile image to view jobs"
        >
          <img
            className="cursor-pointer"
            onClick={toggle2}
            width="24"
            height="24"
            src="https://img.icons8.com/material-rounded/24/user.png"
            alt="user"
            title="View my Jobs"
          />
          {isOpenalt && 
          <div className=" shadow-2xl absolute top-11 right-[145px] rounded-xl border-4 p-1 text-black font-semibold bg-gradient-to-l from-teal-200 via-slate-200 to-amber-200  hover:bg-gradient-to-r from-teal-100 via-slate-100 to-amber-100 sm:right-[199px] ">
            <JobModal />
          </div>}
          {session?.user?.email}
        </span>
        <button
          className="text-[10px] w-24  border-2 p-1 rounded-lg bg-slate-600 hover:bg-slate-400 noto-sans-mono sm:text-sm"
          onClick={() =>
            signOut({ callbackUrl: "http://localhost:3000/Login" })
          }
        >
          Sign Out
        </button>
      </div>
      {/**user&signOut*/}
      {/**main*/}{" "}
    </div>
  );
};

export default Navbar;
