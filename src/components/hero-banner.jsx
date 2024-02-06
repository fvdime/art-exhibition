"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <div className="h-[100vh] w-full relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="h-full w-full"
      >
        <div className="w-64 h-[70vh] rounded-full bg-pink-300 absolute z-[-1] top-1/4 left-0 translate-x-[-20%] translate-y-[-40%] blur-[96px] rotate-12"></div>
        <div className="w-64 h-[70vh] rounded-full bg-pink-300 absolute z-[-1] top-3/4 right-0 translate-x-[-20%] translate-y-[-40%] blur-[96px] rotate-12"></div>
        <div className="max-w-screen-lg mx-auto h-full py-4 px-4 lg:px-0">
          <nav className="w-full flex flex-row h-8 justify-between items-center">
            <Link href="/" className="font-mono">
              the.faya.
            </Link>

            <div className="w-1/2 md:w-1/4 flex items-center justify-between text-sm font-mono">
              <Link
                href="https://faya-indol.vercel.app"
                className="hover:underline"
              >
                Contact
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/gallery" className="hover:underline">
                Gallery
              </Link>
            </div>
          </nav>

          <div className="h-full w-full flex flex-col items-center justify-center relative gap-4">
            <h1 className="text-4xl font-semibold uppercase ">ideas worth</h1>
            <div className="h-12 md:h-16 w-full overflow-hidden relative flex flex-col justify-between items-start">
              <div className="inline-block w-[200%] h-16 md:h-20 absolute overflow-hidden marquee text-3xl md:text-5xl lg:text-6xl font-semibold md:font-bold uppercase">
                <h1 className="float-left w-1/4">pursuing</h1>
                <h1 className="float-left w-1/4">nurturing</h1>
                <h1 className="float-left w-1/4">expressing</h1>

                <h1 className="float-left w-1/4">sharing</h1>
              </div>
            </div>
            <h1 className="text-4xl font-semibold uppercase">with the world!</h1>
            <div className="flex w-full justify-end h-1/3 items-end text-sm font-medium gap-8">
              <span className="w-1/2 font-semibold">
                もし生まれ変わるのなら私は木になりたい！
              </span>
              <span className="w-1/2">
                At the.faya., you&apos;ll find a collection of my creative artworks, each piece a reflection of me. Every content on this site is crafted by my hands and made with -`♡´-. I&apos;m truly grateful for the time you&apos;ve dedicated and sincerely appreciate the interest you&apos;ve shown in my work. Welcome to the.faya.—where creativity knows no bounds.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;
