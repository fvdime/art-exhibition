import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <main className="h-screen w-full overflow-hidden bg-slate-100 text-slate-800">
      <div className="max-w-screen-lg mx-auto py-16 px-4 md:px-0 h-full flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="h-full w-1/4 flex flex-col items-center justify-center relative">
          {/* <Image
          src="/hero.png"
          alt="image"
          fill
          className="absolute object-cover"
          /> */}
        </div>
        <div className="h-full w-3/4 flex flex-col items-end justify-center">
          <h1 className="text-9xl font-medium flex flex-row items-center uppercase">
            about
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm font-medium">
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam alias reprehenderit, perspiciatis maiores explicabo tempora exercitationem nulla mollitia minima, consectetur sapiente a molestias fugiat repellat pariatur optio enim ad aperiam.</span>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam alias reprehenderit, perspiciatis maiores explicabo tempora exercitationem nulla mollitia minima, consectetur sapiente a molestias fugiat repellat pariatur optio enim ad aperiam.</span>
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
