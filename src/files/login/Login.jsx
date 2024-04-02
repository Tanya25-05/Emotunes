import React from 'react';
import Link from 'react-dom'
export default function Login() {
  return (
    <div className="bg-black h-screen w-screen">
    <div className="flex justify-center items-center h-screen ">
      <div className="max-w-md w-full px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Emotunes</h1>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl mb-4 font-semibold text-white text-center">Sign In</h2>
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email Address or Phone number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white"
                id="username"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white"
                id="password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4 text-center">
            <span className="text-gray-400">New to EmoTunes? </span>
            <b className="text-blue-600 cursor-pointer">
              Sign up Now!</b>
          </div>
          <div className="mt-2 text-sm text-gray-400 text-center">
            This page is protected by blah blah
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
