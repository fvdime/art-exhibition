"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);


  return (
    <div className="h-[100vh] bg-zinc-950 text-white w-full">
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
        }}
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-between p-4 lg:py-4 lg:px-0 h-full gap-4"
      >
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-center gap-4">
          <h1 className="text-4xl font-semibold animate-bounce self-start">
            ✧
          </h1>
          <h1 className="text-xl self-start">faya</h1>
          <div className="flex flex-col w-full justify-center h-full items-end text-sm font-medium gap-8">
            <span className="w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <span className="w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              assumenda similique nihil numquam repellendus deserunt a. Incidunt
              laborum ullam rem, nesciunt ipsam, eos, rerum commodi culpa enim
              hic quidem quos!
            </span>
          </div>
        </div>

        <footer className="w-full text-xs font-mono">
          <div className="p-4 md:p-0 flex items-center justify-between">
            <span className="sm:text-center text-zinc-300">
              © 2024{" "}
              <Link href="/" className="hover:underline me-3">
                the.faya.
              </Link>
               All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-zinc-300 sm:mt-0">
              <li>
                <Link
                  href="https://github.com/fvdime/art-exhibition"
                  target="_blank"
                  className="hover:underline me-4 md:me-6"
                >
                  Source
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline me-4 md:me-6">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default Footer;
