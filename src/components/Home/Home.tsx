import About from "./About/About";
import Blog from "./Blog/Blog";
import Hero from "./Hero/Hero";
import Project from "./Project/Project";
import Service from "./Services/Services";
import WorkProcess from "./WorkProcess/WorkProcess";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Service />
      <WorkProcess />
      <Project />
      <Blog />
    </main>
  );
};

export default Home;
