import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Works({ image, id, index }) {
  return (
    <div className="h-full w-full text-white">
      <div className="max-w-screen-lg mx-auto p-4 md:py-8">
        <div className="w-full flex flex-row items-center justify-between my-8 font-mono self-end ">
          <Link href="/" className="text-lg hover:underline">
            ↳ the.faya.
          </Link>
          <h1 className="uppercase text-2xl md:text-3xl">⭑ ࣭ ๋gallery ๋࣭ ⭑</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 font-medium">
          <div className="flex flex-col items-end justify-center gap-2.5">
            <p>{`[${(index + 1).toString().padStart(2, "0")}]`}</p>
            <Link
              href={`/gallery/${id}`}
              className="w-full h-[70vh] relative group outline-none focus:scale-105 hover:scale-105 active:scale-100 transition duration-500 ease-in"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_AMAZON_S3_BASE_URL}${image}`}
                fill
                alt="artwork"
                className="absolute object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
