"use client"

import Image from "next/image";
import Tilt from "react-parallax-tilt";

const PROJECT_IMAGES = [
  "/images/p1.jpg",
  "/images/p2.jpg",
  "/images/p3.jpg",
  "/images/p4.jpg",
  "/images/p5.jpg",
  "/images/p6.jpg",
];

const Project = () => {
  return (
    <section className="py-16 bg-black">
      <h2 className="text-[#b69974] text-lg text-center font-medium tracking-widest">
        Portfolio
      </h2>
      <h1 className="text-3xl md:text-5xl mt-4 text-white font-bold text-center">
        Transforming ideas into <br />
        digital reality
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 w-[80%] mx-auto gap-6">
        {PROJECT_IMAGES.map((src, index) => (
          <div key={index}>
            <Tilt>
                <Image
                src={src}
                alt="project"
                width={450}
                height={550}
                className="rounded-md"
                />
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
