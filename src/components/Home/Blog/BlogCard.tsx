import Image from "next/image";
import { BiCalendar } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa6";
import { FiArrowDownRight } from "react-icons/fi";

type Props = {
  image: string;
  title: string;
};
const BlogCard = ({ image, title }: Props) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden ">
      {/* Blog image */}
      <Image
        src={image}
        width={300}
        height={206}
        alt="img"
        className="w-full"
      />
      {/* Blog content */}
      <div className="p-6">
        {/* Category and Date */}
        <div className="flex items-center justify-between">
          {/* Category */}
          <div className="flex items-center space-x-3">
            <FaRegFolderOpen className="text-orange-700 size-6" />
            <p className="font-semibold text-gray-800 text-sm">Category</p>
          </div>
          {/* Date */}
          <div className="flex items-center space-x-3">
            <BiCalendar className="text-orange-700 size-6" />
            <p className="font-semibold text-gray-800 text-sm">
              October 27,2025
            </p>
          </div>
        </div>
        {/* Title */}
        <h1 className="text-lg mt-6 font-bold text-gray-900 hover:text-blue-700 transition-all duration-300 cursor-pointer">
          {title}
        </h1>
        {/* Read more button */}
        <button className="relative inline-block mt-8 cursor-pointer group">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[2px] uppercase text-[#1a1a1a]">
            READ MORE
            <FiArrowDownRight className="text-[#b79d7b] text-xl transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          {/* Underline */}
          <span className="block w-full h-px group-hover:w-0 transition-all duration-300 bg-[#514f4f]"></span>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
