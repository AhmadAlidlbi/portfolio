import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <a href="#top" className="flex-shrink-0">
            <Image
              src={assets.logo}
              alt="logo"
              className="w-10 sm:w-8 md:w-10 lg:w-10 cursor-pointer mr-2"
            />
          </a>
          <a href="#top" className="cursor-pointer text-xl md:text-1xl">
            Ahmad Alidlbi
          </a>
        </div>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="logo" className="w-6" />
          ahmedidlbi@hotmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Ahmad Alidlbi. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/AhmadAlidlbi">Github</a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/ahmadalidlbi/">Linkedin</a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/dev0ex/">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
