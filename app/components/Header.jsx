import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={assets.my_pic} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi, I'm Ahmad Alidlbi{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Software Engineer based in Kuwait
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I'm a passionate developer with a love for creating innovative solutions
        and a keen eye for detail. With a strong foundation in software
        engineering, I strive to build applications that are not only functional
        but also user-friendly and visually appealing.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;