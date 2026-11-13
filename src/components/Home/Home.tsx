"use client";

import { useEffect } from "react";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Project from "./Project/Project";
import Service from "./Services/Services";
import WorkProcess from "./WorkProcess/WorkProcess";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Service />
      <WorkProcess />
      <Project />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
