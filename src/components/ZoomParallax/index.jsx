"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform } from "framer-motion";
// eslint-disable-next-line
import styles from "./styles.module.scss";

export default function Index({random}) {
  
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

  // console.log("Scroll Position:", scrollYProgress); // Log scroll position for debugging

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = random.map((rand, index) => {
    const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];
    return {
      src: rand.image,
      scale: scales[index % scales.length],
    };
  });

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.wrapper}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.imageWrapper}>
              <div className={styles.imageContainer}>
                <Image src={`${process.env.NEXT_PUBLIC_AMAZON_S3_BASE_URL}${src}`} fill alt="image" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
