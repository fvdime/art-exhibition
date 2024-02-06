import React from "react";
import ZoomParallax from "@/components/ZoomParallax/index";
import Works from "@/components/works";

const GalleryPage = () => {
  return (
    <main className="bg-zinc-950">
      <ZoomParallax />
      <Works />
    </main>
  );
};

export default GalleryPage;
