import React from "react";
import ZoomParallax from "@/components/ZoomParallax/index";
import Works from "@/components/works";
import { GetAllWorks, GetRandomWorks } from "@/actions/post.action";


const GalleryPage = async () => {
  const works = await GetAllWorks()

  const random = await GetRandomWorks()

  return (
    <main className="bg-zinc-950">
      <ZoomParallax random={random}/>
      {works.map((work, index) => (
        <Works key={work.id} image={work.image} id={work.id} index={index}/>
        ))}
    </main>
  );
};

export default GalleryPage;
