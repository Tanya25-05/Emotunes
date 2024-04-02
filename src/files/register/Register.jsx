import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom"

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  }

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  }

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full px-6 py-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Get To know your emotions</h1>
          <h2 className="text-xl font-semibold text-white">Ready to roll?</h2>
          <p className="text-white">Enter your email to create or register</p>
        </div>
        {!email ? (
          <div className="flex flex-row items-center">
            <input
              type="email"
              placeholder="Email Address"
              ref={emailRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              className="bg-indigo-500 text-white py-2 px-4  rounded-md hover:blue-900 focus:outline-none"
              onClick={handleStart}
            >
              Get Started
            </button>
          </div>
        ) : (
          <form className="flex items-center">
            <input
              type="password"
              placeholder="Enter Password"
              ref={passwordRef}
              className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:border-indigo-500 "
            />
            <button
              className="bg-indigo-500 text-white py-2 px-4  hover:bg-indigo-600 focus:outline-none"
              onClick={handleFinish}
            >
            <Link to="/home">Start</Link>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
