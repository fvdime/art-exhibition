import React from "react";
import ZoomParallax from "@/components/ZoomParallax/index";
import Works from "@/components/works";
import { GetAllImages, GetFeaturedImages } from "@/lib/action";

const GalleryPage = async () => {

  const images = await GetAllImages()

  // const featuredImages = await GetFeaturedImages()

  return (
    <main className="bg-zinc-950">
      <ZoomParallax />
      <Works images={images} />
    </main>
  );
};

export default GalleryPage;
