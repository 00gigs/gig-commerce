'use client'
import toast, { Toaster } from "react-hot-toast";
import React from 'react'
import { useState } from 'react';
import Navbar from '../component/Navbar'
import { FaStar } from "react-icons/fa";
import { getSession } from "next-auth/react";
import Footer from "../component/Footer";

const page = () => {
const star = Array(5).fill(0)
const [starz, setCurrentValue] = useState(0)
const [hoverValue, setHoverValue] = useState(undefined)
const [comment, setTextarea] = useState('')
const notifySubmit = () =>
    toast("Review Sent.", { icon: "✅", style: { background: "#90EE90" } });
const colors = {
  yellow:'#F2C51C',
  grey:'#8C8A82'
}
const handleClick = value =>{
  setCurrentValue(value)
}
const handleMouseOver = value =>{
  setHoverValue(value)
}
const handleMouseLeave = value =>{
  setHoverValue(undefined)
}



const handlesubmit =async(e)=>{
  e.preventDefault()
  const user = await getSession();
const username = user.user.email;

  const res = await fetch('/api/review',{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      starz,
      comment,
      username
    })
  })
  if(!res.ok){
    throw new Error('failed to submit review')
  }else{
    notifySubmit()
    setCurrentValue(0);
    setTextarea('');
  }
}


  return (
    <div className="bg-slate-100 w-screen h-screen">
      <Navbar/>
      <div className=' text-black text-center'>
       <div className='noto-znamenny text-xl mb-52 mt-9'>
       Need more help booking ? Speak with a representative. To get started  click " Call Now " 📞<a className=' bg-orange-300 rounded-xl p-2 hover:cursor-pointer' href='tel:+2406967197'>Call Now</a>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <form onSubmit={handlesubmit}>
          <div className='flex flex-col items-center'>
            <h1 className='noto-znamenny text-xl mb-4'>Leave us with comments, reviews, feedback here!</h1>           
            <textarea
              minLength={15}
              rows={4}
              className='w-80 p-2 rounded-md mb-4'
              placeholder='Enter your comments...'
              onChange={(e)=>setTextarea(e.target.value)}
              value={comment}
            />
          </div>
          <div className='flex justify-center  mb-4'>
            {star.map((_, index) => (
              <FaStar key={index} className=' items-center text-center mx-1' size={24}
              color={(hoverValue||starz)> index ? colors.yellow :colors.grey}
              onClick={()=> handleClick(index +1)} 
              onMouseOver={()=> handleMouseOver(index +1)}
              onMouseLeave={handleMouseLeave}
              />
              
            ))}
          </div>
          <button type='submit' className='bg-orange-300 noto-znamenny rounded-xl p-2 hover:cursor-pointer uppercase'>Submit Review</button>
          </form>
        </div>
      <Footer />
      </div>
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
  )
}

export default page
