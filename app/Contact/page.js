import React from 'react'
import Navbar from '../component/Navbar'

const page = () => {
  return (
    <div className="bg-slate-100 w-screen min-h-screen ">
      <Navbar/>
      <div className=' text-black text-center'>
       <div>
       Contact us today 📞<a className='hover:cursor-pointer'>210-244-3290</a>
        </div>
        <div>
            <h1>Leave us with comments , reviews , feedback here!</h1>
            <textarea/>
        </div>
      </div>
    </div>
  )
}

export default page
