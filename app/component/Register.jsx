'use client'

import React, { useState } from 'react'

const Register = () => {
const [username, setUserName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error,setError]=useState('')

const handleSubmit =(e)=>{
  e.preventDefault()
  if(!username || !email || !password){
    setError('Please fill all fields')
    return
  }
}



  return (
    <div className='flex items-center justify-center min-h-screen bg-slate-800'>
      <div className='rounded-lg shadow-lg text-center border-t-4 border-yellow-300 flex-col flex p-3 items-center max-w-72 bg-slate-700'>
      <h1>Register</h1>
      <p>sadadasd</p>
        <form
        onSubmit={handleSubmit}
         name='userRegister'>
      <input
      className='m-2 p-2 rounded-lg  border-4 text-black'
      minLength={5}
      type='email'
      name='email'
      placeholder='Email'
      onChange={(e)=>setEmail(e.target.value)}
      />
      <input 
      className='m-2 p-2 rounded-lg border-4 text-black'
       minLength={5}
       type='text'
      name='userName'
      placeholder='User name'
      onChange={(e)=>setUserName(e.target.value)}
      />
      <input
      className='m-2 p-2 rounded-lg border-4 text-black'
       minLength={5}
       type='password'
       name='password'
       placeholder='Password'
       onChange={(e)=>setPassword(e.target.value)}
       />
    <button className='w-fit  hover:text-green-300'>Register</button>
        </form>
    <a className='text-xs underline' 
    href='/Login'>
        Log in here
    </a>

{error && (
    <div className='bg-red-500 m-4 text-sm rounded-md p-2'>{error}</div>
)
}

      </div>
    </div>
  )
}

export default Register
