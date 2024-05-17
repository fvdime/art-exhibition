import { GetAllWorks } from "@/actions/post.action";
import DeleteButton from "@/components/dashboard/delete-button";
import FeaturedButton from "@/components/dashboard/featured-button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function DashboardPage() {
  const works = await GetAllWorks()

  return (
    <div className="w-full min-h-screen bg-red-50 text-red-950">
      <div className="max-w-screen-lg mx-auto h-full p-4 md:py-4">
        <h1 className="text-2xl uppercase font-medium ">works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          <div className="border border-dashed border-red-900 h-80 w-full rounded flex items-center justify-center hover:bg-red-100/60 backdrop-blur-lg transition ease-in duration-30 group">
            <div className="absolute top-1/2 z-20 m-0 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110">
              <Link
                href="/dashboard/add"
                className="text-xl font-bold text-gray-200 shadow-xl text-center bg-red-900 px-4 py-2.5 rounded-full outline-none hover:bg-red-950"
              >
                +
              </Link>
            </div>
          </div>
          {works.map((work) => (
            <div 
            key={work.id}
            className="group relative m-0 flex h-80 w-full rounded-xl shadow-xl ring-gray-900/5">
              <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-90 transition duration-300 ease-in-out group-hover:opacity-100">
                <Image
                  height={256}
                  width={512}
                  src={`${process.env.NEXT_PUBLIC_AMAZON_S3_BASE_URL}${work.image}`}
                  alt="project image"
                  className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 right-6 z-20 m-0 pb-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110">
                <DeleteButton workId={work.id}/>
                <FeaturedButton isFeatured={work.featured} workId={work.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
