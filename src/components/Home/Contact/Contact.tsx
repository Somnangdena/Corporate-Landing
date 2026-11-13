import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-[90%] lg:w-[80%] items-center mx-auto mt-16">
        {/* Contact Form */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
          className="lg:col-span-2 bg-gray-900 rounded-xl p-6">
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="border-2 mt-6 border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white text-white"
          />
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white text-white"
          />
          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="border-2 border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white text-white"
          />
          {/* Comments */}
          <textarea
            rows={5}
            placeholder="Comment"
            className="border-2 border-gray-600 w-full px-6 py-3 rounded-3xl mb-6 placeholder:text-white text-white"
          />
          {/* Button */}
          <button className="w-full px-6 py-3 bg-[#b69974] uppercase cursor-pointer rounded-full">
            Submit
          </button>
        </div>
        {/* Cards */}
        <div
          data-aos="zoom-out"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
          className="lg:col-span-1">
          {/* 1st card */}
          <div className="p-6 bg-blue-800 flex items-center space-x-4">
            <div className="size-15 rounded-full bg-[#d8ff36] flex items-center justify-center">
              <FaPhoneAlt className="text-blue-800" />
            </div>
            <div>
              <h1 className="text-white text-sm font-semibold">Call Now</h1>
              <h1 className="text-[20px] font-bold text-white">+123 4567890</h1>
            </div>
          </div>
          {/* 2nd card */}
          <div className="p-6 bg-blue-800 my-4 flex items-center space-x-4">
            <div className="size-15 rounded-full bg-[#d8ff36] flex items-center justify-center">
              <IoMail className="text-blue-800" />
            </div>
            <div>
              <h1 className="text-white text-sm font-semibold">E-mail Now</h1>
              <h1 className="text-[20px] font-bold text-white">
                Example@email.com
              </h1>
            </div>
          </div>
          {/* 3rd card */}
          <div className="p-6 bg-blue-800 flex items-center space-x-4">
            <div className="size-15 rounded-full bg-[#d8ff36] flex items-center justify-center">
              <FaLocationDot className="text-blue-800" />
            </div>
            <div>
              <h1 className="text-white text-sm font-semibold">Address</h1>
              <h1 className="text-[20px] font-bold text-white">
                Phnom Penh, cambodia
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
