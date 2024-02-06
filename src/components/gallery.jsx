"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Image from "next/image";

const images = [
  "n.jpg",
  "aa.jpg",
  "abc.jpg",
  "acc.jpg",
  "af.jpg",
  "acc.jpg",
  "r.jpg",
  "ac.jpg",
  "ad.jpg",
];

const Column = ({ images, y }) => {
  return (
    <motion.div
      style={{ y }}
      className="relative h-full w-1/3 min-w-[256px] flex flex-col gap-[1vw] whitespace-nowrap [&>*:nth-child(1)]:-top-[35%] [&>*:nth-child(2)]:-top-[70%] [&>*:nth-child(4)]:-top-[60%]"
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="h-1/3 w-full absolute rounded overflow-hidden"
        >
          <Image src={`${process.env.NEXT_PUBLIC_AMAZON_S3_BASE_URL}${src}`} alt="image" fill className="object-cover" />
        </div>
      ))}
    </motion.div>
  );
};

const Gallery = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div className="h-[175vh] overflow-hidden bg-zinc-900">
        <div className="relative -top-[12.5vh] h-[200vh] flex gap-[2vw] p-[2vw]">
          <Column y={y} images={[images[0], images[1], images[2]]} />
          <Column y={y2} images={[images[3], images[4], images[5]]} />
          <Column y={y4} images={[images[6], images[7], images[8]]} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
