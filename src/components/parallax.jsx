"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import "../app/globals.css";


const Parallax = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  console.log("Scroll Position:", scrollYProgress); // Log scroll position for debugging

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: "4.jpg",
      scale: scale4,
    },
    {
      src: "1.jpg",
      scale: scale5,
    },
    {
      src: "2.jpg",
      scale: scale6,
    },
    {
      src: "3.jpg",
      scale: scale5,
    },
    {
      src: "4.jpg",
      scale: scale6,
    },
    {
      src: "1.jpg",
      scale: scale8,
    },
    {
      src: "3.jpg",
      scale: scale9,
    },
  ];
  

  return (
    <div ref={container} className="h-[300vh] relative">
      <div className="sticky overflow-hidden top-0 h-[100vh]">
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="w-full h-full top-0 absolute flex items-center justify-center"
            >
              <div className="relative w-[25vw] h-[25vh] [&>:nth-child(2)]:-top-[30vh] [&>:nth-child(2)]:left-[5vw] [&>:nth-child(2)]:w-[35vw] [&>:nth-child(2)]:h-[30vh] [&>:nth-child(3)]:-top-[10vh] [&>:nth-child(3)]:-left-[25vw] [&>:nth-child(3)]:w-[20vw] [&>:nth-child(3)]:h-[45vh] [&>:nth-child(4)]:left-[27.5vw] [&>:nth-child(4)]:w-[25vw] [&>:nth-child(4)]:h-[25vh] [&>:nth-child(5)]:top-[27.5vh] [&>:nth-child(5)]:left-[5vw] [&>:nth-child(5)]:w-[20vw] [&>:nth-child(5)]:h-[25vh] [&>:nth-child(6)]:top-[27.5vh] [&>:nth-child(6)]:-left-[22.5vw] [&>:nth-child(6)]:w-[30vw] [&>:nth-child(6)]:h-[25vh] [&>:nth-child(7)]:top-[22.5vh] [&>:nth-child(7)]:left-[25vw] [&>:nth-child(7)]:w-[15vw] [&>*:nth-child(7)]:h-[15vh]">
                <Image
                  src={`/${src}`}
                  fill
                  alt="image"
                  className="object-cover absolute"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Parallax;
