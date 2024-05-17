"use client";

import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Link from "next/link";

import { SignIn } from "@/actions/auth.action";
import { useFormState } from "react-dom";

const initialState = {
  email: "",
  password: "",
};

const AuthForm = () => {
  const [state, formAction] = useFormState(SignIn, initialState);

  const [passwordShow, SetPasswordShow] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-full w-full">
      <div className="hidden h-screen w-1/2 bg-red-100 md:flex flex-col justify-between items-start p-8">
        <h1 className="flex flex-row items-center justify-start gap-2 text-xl uppercase text-red-900">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#550000"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </Link>
          Welcome Back!
        </h1>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-9xl font-extrabold text-red-900">𓃹</h1>
        </div>
      </div>
      <form
        className="h-screen w-full md:w-1/2 px-8 lg:px-16 flex flex-col justify-center gap-6 bg-red-50 text-red-900"
        action={formAction}
      >
        <h1 className="text-xl font-semibold text-center">
          Welcome Back Admin! Please Sign In.
        </h1>

        <div className="flex items-center before:flex-1 before:border-t before:border-red-900 after:flex-1 after:border-t after:border-red-900" />
        <div className="relative z-0">
          <input
            type="email"
            name="email"
            required
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b border-red-200 appearance-none focus:outline-none focus:ring-0 focus:border-red-900 peer"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute font-medium text-sm text-red-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Email
          </label>
        </div>
        {state.email && (
          <p className="text-xs font-medium text-gray-900">{state.email}</p>
        )}
        <div className="relative">
          <div className="relative z-0">
            <input
              type={passwordShow ? "text" : "password"}
              name="password"
              required
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b border-red-200 appearance-none focus:outline-none focus:ring-0 focus:border-red-900 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute font-medium text-sm text-red-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Password
            </label>
          </div>
          <button
            type="button"
            onClick={() => SetPasswordShow((s) => !s)}
            className="absolute right-1 top-0 p-2 px-2.5 hover:bg-transparent"
          >
            {!passwordShow ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#500000"
              >
                <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#500000"
              >
                <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
              </svg>
            )}
          </button>
        </div>
        {state.password && (
          <p className="text-xs font-medium text-gray-900">{state.password}</p>
        )}

        <div className="text-center">
          <button className="rounded text-center font-semibold transition-all ease-in duration-500 text-sm border w-full bg-red-950 hover:bg-red-900 text-white border-red-950 hover:border-red-900 px-8 py-3">
            Sign In
          </button>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </div>
  );
};

export default AuthForm;
