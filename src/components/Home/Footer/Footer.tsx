import Logo from "@/components/Helper/Logo";
import Image from "next/image";
import { BiCalendar } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaPaperPlane,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="py-16">
        {/* Top part */}
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1st part */}
        <div>
          {/* Logo */}
          <Logo />
          {/* description */}
          <p className="mt-6 text-sm text-gray-300 leading-6 font-semibold">
            Conditions Terms of Use Ours feturesin Services ew Guests LisitThe
            Team List Guests LisitThe Team List
          </p>
          {/* socails Links */}
          <div className="flex items-center space-x-4 mt-6">
            {/* facebook icon */}
            <div className="size-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-blue-600 transition-all duration-300">
              <FaFacebook className="size-6 text-white" />
            </div>
            {/* youtube icon */}
            <div className="size-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-red-600 transition-all duration-300">
              <FaYoutube className="size-6 text-white" />
            </div>
            {/* instagram icon */}
            <div className="size-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-pink-600 transition-all duration-300">
              <FaInstagram className="size-6 text-white" />
            </div>
          </div>
        </div>
        {/* 2nd part */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-bold text-white">Address</h1>
          <div className="mt-8">
            {/* Address */}
            <div className="flex items-center space-x-5">
              <FaPaperPlane className="size-5 text-white" />
              <p className="font-medium text-sm text-white">
                Old city street, cambodia <br />
                Phnom Pehn
              </p>
            </div>
            {/* Phone */}
            <div className="flex my-5 items-center space-x-5">
              <FaPhoneAlt className="size-5 text-white" />
              <p className="font-medium text-sm text-white">+123 456 67890</p>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-5">
              <IoMail className="size-5 text-white" />
              <p className="font-medium text-sm text-white">
                Example@email.com
              </p>
            </div>
          </div>
        </div>
        {/* 3rd part */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-bold text-white">More Serivces</h1>
          <div className="mt-8">
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="size-7 text-white" />
              <p className="font-medium text-sm text-white">UI Design</p>
            </div>
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="size-7 text-white" />
              <p className="font-medium text-sm text-white">UX Design</p>
            </div>
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="size-7 text-white" />
              <p className="font-medium text-sm text-white">Web App</p>
            </div>
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="size-7 text-white" />
              <p className="font-medium text-sm text-white">
                Digital Marketing
              </p>
            </div>
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="size-7 text-white" />
              <p className="font-medium text-sm text-white">Video Editing</p>
            </div>
          </div>
        </div>

        {/* 4th part */}
        <div className="mx-auto">
          <h1 className="text-lg font-bold text-white">Newsletter</h1>
          <div className="mt-8">
            <p className="font-medium text-sm text-white">
              It is a long established fact that a reader will be distracted
            </p>
            <div className="mt-5 flex items-center space-x-4">
              <Image src={"/images/f.jpg"} alt="img" width={80} height={25} />
              <div className="flex-1">
                <div className="flex items-center">
                  <BiCalendar className="text-amber-300 size-6 mr-2" />
                  <p className="text-white text-sm font-semibold">
                25 October,2026
                  </p>
                </div>
                <p className="mt-2 text-white font-bold">The standard chunk of Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Part */}
      <div className="border-t-2 w-[80%] mx-auto border-gray-700 mt-8">
        <p className="mt-8 text-gray-300">
            &copy; WebDev 2026 | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
