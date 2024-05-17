import { GetWorkById } from '@/actions/post.action'
import prisma from '@/lib/prisma'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function SingleWorkPage({ params }) {
  const id = params.id
  const work = await GetWorkById(id)

  return (
    <main className='w-full h-screen bg-zinc-950 text-white'>
      <div className="max-w-screen-md mx-auto p-4 md:py-4">
      <header className="w-full flex flex-row items-center justify-between my-2 font-mono self-end">
          <Link href="/gallery" className="hover:underline">
            ↳ the.faya.
          </Link>
          <h1 className="uppercase text-lg">⭑ ࣭  ๋࣭ ⭑</h1>
        </header>
        <div className="relative h-[85vh]
        w-full">
          <Image
           src={`${process.env.NEXT_PUBLIC_AMAZON_S3_BASE_URL}${work.image}`}
          alt='image'
          fill
          className='absolute object-contain object-center w-full h-full'
          />
        </div>
      </div>
    </main>
  )
}
