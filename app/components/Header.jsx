import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image src={assets.my_pic} alt="" className="rounded-full w-40 md:w-52 lg:w-64" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex items-end gap-2 mb-3 font-Poppins text-3xl md:text-6xl lg:text-6xl"
      >
        Hi, I'm <span className="text-logoBlue">Ahmad Alidlbi</span>
      </motion.h3>
        {/* <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
        >
          Software Engineer based in Kuwait
        </motion.h1> */}
      <motion.p
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-2xl mx-auto text-sm md:text-lg lg:text-lg font-Poppins"
      >
        I'm a passionate developer with a love for creating innovative solutions
        and a keen eye for detail. With a strong foundation in software
        engineering, I strive to build applications that are not only functional
        but also user-friendly and visually appealing.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true, amount: 0.2 }}
          href="/AhmadAlidlbi-Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
