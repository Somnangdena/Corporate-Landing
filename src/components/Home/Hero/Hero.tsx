import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full min-h-[80vh] bg-[#1f242c] flex justify-center flex-col overflow-hidden">
      <div className="w-[80%] mx-auto grid grid-cols-1 overflow-hidden py-0 lg:grid-cols-2 lg:py-8 gap-4 items-center">
        {/* Text Content */}
        <div>
          {/* Title */}
          <h1 className="text-4xl md:text-7xl font-bold text-white">
            Crafting your digital story with passion
          </h1>
          {/* Description */}
          <p className="ml-0 md:ml-12 md:mt-10 mt-5 text-sm md:text-base font-semibold text-white">
            Payment solutions enable businesses to accept payments Payments
            solutions enable businesses to accept payments from customers
            conveniently from customers conveniently and securely.
          </p>
          {/* Button */}
          <button className="px-8 py-3 rounded-full mt-10 ml-0 md:ml-12 text-white font-semibold cursor-pointer hover:bg-[#9f7c4e] transition-all duration-300 outline-2 outline-gray-300">
            Discover More
          </button>
        </div>
        {/* Image content */}
        <div className="absolute top-0 right-48 overflow-hidden hidden lg:block">
          <Image
            src="/images/hero.png"
            width={550}
            height={550}
            alt="hero"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
