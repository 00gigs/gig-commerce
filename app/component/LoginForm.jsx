"use client";

import React, { useState } from 'react'

const LoginForm = () => {
const [username, setUserName] = useState('')
const [password, setPassword] = useState('')
const [error,setError]=useState('')


const handleSubmit =(e)=>{
  e.preventDefault()
  if(!username || !password){
    setError('Please fill all fields')
    return
  }
}

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-slate-800">
        <div className="rounded-lg shadow-lg text-center border-t-4  border-yellow-300 flex-col flex p-3 items-center max-w-72  bg-slate-700">
          <h1>Login</h1>
          <form
          onSubmit={handleSubmit}
          name="userLogin">
            <input
              className="m-2 p-2 rounded-lg border-4 text-black"
              minLength={5}
              type="text"
              name="userName"
              placeholder="User name"
                    onChange={(e)=>setUserName(e.target.value)}
            />
            <input
              className="m-2 p-2 rounded-lg border-4 text-black"
              minLength={5}
              type="password"
              name="Password"
              placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
            />
          <button className="w-fit  hover:text-green-300">LogIn</button>
          </form>
          <a className="text-xs underline" href="/register">
            Register here
          </a>

          {error && (
            <div className="bg-red-500 m-4 text-sm rounded-md p-2">{error}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
