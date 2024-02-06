"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';

const Word = ({children, progress, range}) => {
  const amount = range[1] - range[0]
  const step = amount / children.length
  return (
    <span className="relative mr-2 mt-1 text-sm">
      {
        children.split("").map((character, i) => {
          const start = range[0] + (i * step);
          const end = range[0] + ((i + 1) * step)
          return (
            <Character 
            key={`1_${i}`} 
            progress={progress} 
            range={[start, end]}>
              {character}
            </Character>
            )
        })
      }
    </span>
  )
}

const Character = ({children, progress, range}) => {
  const opacity = useTransform(progress, range, [0,1])
  return (
    <span>
      <span className="absolute opacity-50">{children}</span>
      <motion.span style={{opacity: opacity}}>{children}</motion.span>
    </span>
  )
}

export default function Paragraph({paragraph}) {

  const container = useRef(null)
  const { scrollYProgress} = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  })

  const words = paragraph.split(" ")

  return (
    <p 
      ref={container}         
      className="flex p-4 w-full h-full flex-wrap"
    >
    {
      words.map( (word, i) => {
        const start = i / words.length
        const end = start + (1 / words.length)
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
      })
    }
    </p>
  )
}
