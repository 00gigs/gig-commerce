"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Footer from './Footer';
import Head from 'next/head';

const LoginForm = () => {
  const router = useRouter();


const [username, setUserName] = useState('')
const [password, setPassword] = useState('')
const [error,setError]=useState('')


const handleSubmit = async (e)=>{
  e.preventDefault()
  if(!username || !password){
    setError('Please fill all fields')
    return
  }
  try {
        const res =  await  signIn('credentials',{
          username,
          password,
          redirect:false,
         })
 
         if(res.error){
          setError("invalid credentials")
          return
         }

         router.replace("https://www.hanzhomesolutions.com/Booking")
   } catch (error) {
     console.log('error during log in', error)
   }

}

  return (
    <>
  <Head>
  <title>My page title</title>
  <meta name="description" content="Log in to Hanz Home-Solutions to manage your bookings for moving, housekeeping, lawn care, and handyman services. Secure and easy access to your account."></meta>
  </Head>
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#D1CAC2]">
  {/**logo 👇🏻 */}
  <div className="  text-xl italic bg-clip-text text-transparent bg-gradient-to-l from-teal-200 via-slate-200 to-amber-200 font-bold tracking-wide hover:tracking-widest duration-300">
            Hanz
          </div>
        <div className="rounded-lg shadow-lg text-center border-t-4  border-yellow-300 flex-col flex p-3 items-center max-w-72  bg-slate-700">
          <h1 className='text-orange-100'>Login to Hanz Home-Solutions</h1>
          <form
          onSubmit={handleSubmit}
          name="userLogin">
             <label className='text-orange-100 block bg-[#64615d] w-fit rounded-2xl mb-1' htmlFor="userName">Username</label>
            <input
              className="m-2 p-2 rounded-lg border-4 text-black"
              minLength={5}
              type="text"
              name="userName"
              placeholder="User name"
                    onChange={(e)=>setUserName(e.target.value)}
            />
                <label className='text-orange-100 block bg-[#64615d] w-fit rounded-2xl mb-1' htmlFor="Password">Password</label>
            <input
              className="m-2 p-2 rounded-lg border-4 text-black"
              minLength={5}
              type="password"
              name="Password"
              placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
            />
          <button className="w-fit text-orange-100 bg-[#7a8c72a1] rounded-2xl hover:text-green-300">LogIn</button>
          </form>
          <a className="text-xs mt-2 underline text-orange-100 hover:scale-105" href="/register">
          Create Your Hanz Home-Solutions Account
          </a>
          {error && (
            <div className="bg-red-500 m-4 text-sm rounded-md p-2">{error}</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
    </>
    
  );
};

export default LoginForm;
