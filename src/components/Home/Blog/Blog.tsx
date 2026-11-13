import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-white">
      <h2 className="text-[#b69974] text-lg text-center font-medium tracking-widest">
        Blog
      </h2>
      <h1 className="text-3xl md:text-5xl mt-4 text-black font-bold text-center">
        Latest news & articles <br />
        From Our Blog
      </h1>
      <div className="w-[80%] mx-auto grid gridcl1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20">
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0">
          <BlogCard
            image="/images/b1.png"
            title="Standard chunk of Lorem Ipsun Our Company"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100">
          <BlogCard
            image="/images/b2.png"
            title="These cases are many simple and easy"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200">
          <BlogCard
            image="/images/b3.png"
            title="Standard chunk of Lorem Ipsum Our Company"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
