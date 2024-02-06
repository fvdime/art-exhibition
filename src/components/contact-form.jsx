import Link from 'next/link'
import React from 'react'

const ContactForm = () => {
  return (
    <div className="py-16 px-4 md:px-0 h-full flex flex-row items-center justify-center">
        <div className="h-screen w-1/5 bg-zinc-950 flex flex-col items-center justify-between text-7xl font-bold uppercase text-white p-4">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <form className="h-full w-full md:w-3/5 py-16 px-4 md:px-16">
          <div className="flex items-center justify-center mb-5">
            <p className="text-3xl font-medium">aaaaaaaaaa</p>
          </div>
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              email
            </label>

            <input
              type="text"
              className="border border-gray-900 text-gray-900 rounded-3xl focus:ring-blue-700 focus:border-blue-500 block w-full p-2 px-4"
              placeholder="email"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            ></label>
            <textarea
              name="message"
              id="message"
              cols="16"
              rows="10"
              className="border border-gray-900 text-gray-900 rounded-3xl focus:ring-blue-700 focus:border-blue-500 block w-full p-2 px-4"
              placeholder="Your message"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="button"
              className="w-full text-white bg-zinc-950 shadow-md hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-3xl px-5 py-2.5 text-center"
            >
              aaaaaaaaaaaaaaaaaaa
            </button>

            <p className="mb-0 mt-4 pt-1 text-sm font-medium text-gray-900">
              <Link
                href="/login"
                className="ml-2 text-sky-700 transition duration-150 ease-in-out hover:text-sky-800 focus:text-sky-800 active:text-sky-600 cursor-pointer"
              >
                aaaaaaaaaaaaa
              </Link>
            </p>
          </div>
        </form>
        <div className="h-screen w-1/5"></div>
      </div>
  )
}

export default ContactForm