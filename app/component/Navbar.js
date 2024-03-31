"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/navigation";
const Navbar = () => {
  const { data: session } = useSession();
const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const toggle =()=>{
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-slate-600 w-screen h-10 p-3 flex justify-end">{/**main*/}
      <div className="flex items-center w-screen justify-start">
        <div>{/**drawer menu*/}
          <button className="p-1 m-1 hover:bg-slate-800 hover:shadow-xl rounded" onClick={toggle}>{/** open drawer menu*/}
      {isOpen ? '' :<img width="30" height="30" src="https://img.icons8.com/ios/50/menu--v1.png" alt="menu--v1"/>} 
          </button>
          <div  className={`fixed top-0 left-0 z-40 h-full bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out w-64`}>

          <div>{/**drawer menu items*/}
            <h1 className="text-xl font-bold my-3 ml-1">Services</h1>
            <ul className="mx-3">
              <li className="hover:cursor-pointer my-2"> <Link href={'/landscaping'}> - landscaper</Link> </li>
              <li className="hover:cursor-pointer my-2"><Link href={'/GeneralContract'}>- General contractor</Link></li>
              <li className="hover:cursor-pointer my-2"><Link href={'/Cleaning'}>- Cleaning Contractor</Link> </li>
              <li className="hover:cursor-pointer my-2"><Link href={'/Moving'}>- Moving Contractor</Link> </li>
            </ul>
          </div>
{/**close drawer menu*/}
          {isOpen && (
        <div
          className=" absolute bottom-3 right-3 flex justify-center hover:cursor-pointer text-red-300"
          onClick={() => setIsOpen(false)}
        >close</div>
      )}
          </div>
          </div>{/**drawer menu*/}
          <a href="/">
       <h1 className="text-xl italic underline text-indigo-200 font-bold tracking-wide hover:tracking-widest duration-300">Hanz</h1>
          </a>
          <div className="mx-2 flex gap-3">
          <Link className="text-[10px]" href={'/Contact'}> Contact</Link>
          <Link className="text-[10px]" href={'/About'}> About</Link>
          </div>
      </div>
      <div className="flex items-center">{/**user&signOut*/}
        <span className=" text-xs flex items-center mx-5" title="click profile image to view jobs">
          <img
          className=""
          onClick={()=>router.push('/Jobs')}
            width="24"
            height="24"
            src="https://img.icons8.com/material-rounded/24/user.png"
            alt="user"
            title="My Jobs"
          />
          {session?.user?.email}
        </span>
        <button
          className="text-xs ml-2 border-2 p-1 rounded-lg bg-slate-800 hover:bg-slate-400"
          onClick={() =>
            signOut({ callbackUrl: "http://localhost:3000/Login" })
          }
        >
          SignOut
        </button>
      </div>{/**user&signOut*/}
   {/**main*/} </div> 
  );
};

export default Navbar;
