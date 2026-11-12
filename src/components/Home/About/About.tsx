import Image from "next/image";
import AboutProgress from "./AboutProgress";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image content */}
        <div className="relative flex justify-center items-center">
          {/* Main Image */}

          <Image
            src={"/images/a3.png"}
            alt="img"
            width={500}
            height={500}
            className="animate-spin [animation-duration:20s]"
          />
          {/* Centered Image */}
          <Image
            src={"/images/a4.png"}
            alt="img"
            width={350}
            height={350}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg md:ml-4 w-50 h-50 md:w-87.5 md:h-87.5"
          />
        </div>
        {/* Text content */}
        <div className="text-black">
          {/* subheading */}
          <h1 className="text-blue-700 text-lg font-medium tracking-widest">About Us</h1>
          {/* Main heading */}
          <h1 className="text-3xl md:text-5xl font-bold mt-4">Innovative solutions for digital success</h1>
          {/* description */}
          <p className="ml-0 md:ml-12 md:mt-10 mt-5 text-black text-sm md:text-base font-semibold leading-loose">
            Payment solutions enable businesses to accept payments Payments
            solutions enable businesses to accept payments from customers
            conveniently from customers conveniently and securely.
          </p>
          {/* Progress content */}
          <AboutProgress/>
        </div>
      </div>
    </section>
  );
};

export default About;
