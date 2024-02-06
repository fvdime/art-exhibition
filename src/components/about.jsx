import Link from "next/link";
import React from "react";
import Paragraph from "./Text/paragraph";

const paragraph =
  "Throughout my childhood years, I developed a keen interest in art. The majority of my time was involved with art. At the point where I despaired of myself, that feeling of creativity began to return. I found peace in art as well as the dullness. It did not grow stronger even though all the feelings that I felt like the whole world was up on me. I suppose all the works represent different times of mine. Contemplated many times whether to do this website or not and finally committed. Holding it together so all my hard work will eventually mean something. No matter how much talent is there, I struggled to believe it was ever enough. It is easy to forget how much you have when your eyes only see the flaws.";

const paragraph2 =
  "When I realized that I was alone in a room surrounded by the things I had made, this realization stirred dullness in me. Nothing was so hard for me to understand except myself. It drove me indeed to the brink of lunacy. I've been doing this for long enough to realize that, regardless of others' perceptions of me, I never feel satisfied. Even though the darkness still seems to surround me, creativity comes and never abandons me. theffaya is built upon creative works. All the content belongs to me and is made by me. I'm grateful for the time you've dedicated. I sincerely appreciate the interest you've given.";

const About = () => {
  return (
    <section className="h-full max-w-screen-md mx-auto px-4 lg:p-0">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full h-screen flex flex-col items-center justify-between">
          <nav className="py-4 w-full flex flex-row justify-between items-center font-mono">
            <Link href="/" className="text-lg hover:underline">
              ↳ the.faya.
            </Link>
            <h1 className="uppercase text-lg">⭑ ࣭ ๋about⭒.⭑</h1>
          </nav>

          <span className="h-full w-full flex flex-col items-center justify-center text-center text-5xl md:text-6xl uppercase gap-1 font-mono">
            <p>faya</p>
            <p>full stack</p>
            <span className="flex flex-row items-center justify-center">
              <p className="animate-bounce me-4">⟡</p> DEVELOPER{" "}
              <p className="animate-bounce ms-4">⟡</p> <br />
            </span>
            <p>𓃹𓃺𓃹𓃺</p>
            <p>and artist</p>
            <p>𐙚©2024</p>
          </span>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center mb-72">
          <Paragraph paragraph={paragraph} />
          <Paragraph paragraph={paragraph2} />

          {/* <p className="text-sm font-medium">
            Throughout my childhood years, I developed a keen interest in art.
            The majority of my time was involved with art. At the point where I
            despaired of myself, that feeling of creativity began to return. I
            found peace in art as well as the dullness. It did not grow stronger
            even though all the feelings that I felt like the whole world was up
            on me. I suppose all the works represent different times of mine.
            Contemplated many times whether to do this website or not and
            finally committed. Holding it together so all my hard work will
            eventually mean something. No matter how much talent is there, I
            struggled to believe it was ever enough. It is easy to forget how
            much you have when your eyes only see the flaws. When I realized
            that I was alone in a room surrounded by the things I had made, this
            realization stirred dullness in me. Nothing was so hard for me to
            understand except myself. It drove me indeed to the brink of lunacy.
            I've been doing this for long enough to realize that,
            regardless of others' perceptions of me, I never feel
            satisfied. Even though the darkness still seems to surround me,
            creativity comes and never abandons me. theffaya is built upon
            creative works. All the content belongs to me and is made by me.
            I'm grateful for the time you've dedicated. I sincerely
            appreciate the interest you've given.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default About;
