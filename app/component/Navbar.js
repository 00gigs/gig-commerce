"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Navbar = () => {

const {data: session} = useSession()

  return (
    <div className="bg-slate-600 w-screen h-fit p-3">

<p>user: <span>{session?.user?.email}</span></p>

      <button className="border-2 rounded-lg bg-slate-800" onClick={() => signOut({ callbackUrl: 'http://localhost:3000/Login'  })}>
        SignOut
      </button>
    </div>
  );
};

export default Navbar;
