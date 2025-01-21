import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Projects = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-2 text-lg font-Poppins"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center text-5xl font-Poppins mb-12"
      >
        My latest projects
      </motion.h2>

      <motion.div
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          opacity: { duration: 0.3, ease: "easeInOut", delay: 0.8 }, 
          scale: { duration: 0.3, ease: "easeInOut" }, 
        }}
        className="w-full lg:w-1/4 min-h-60 rounded-2xl mx-auto cursor-pointer shadow-lg bg-white"
        onClick={() =>
          window.open("https://github.com/AhmadAlidlbi/Balance", "_blank")
        }
      >
        <Image
          src={assets.balance}
          alt="Project Thumbnail"
          className="w-full h-56 object-cover rounded-t-2xl mx-auto"
        />
        <div className="p-4 flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-black font-Poppins">
            Full-Stack Project
          </h2>

          <p className="text-sm text-gray-600 font-Poppins">
            A feature-rich Task Manager app built with React Native, Express.js,
            and MongoDB, enabling users to manage tasks, habits, and notes
            seamlessly with an intuitive UI and secure authentication.
          </p>

          <div className="flex items-center gap-2 mt-2  ">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
              <Image
                src={assets.expo}
                alt="Tool 1"
                className="w-5 h-5 justify-center"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
              <Image
                src={assets.node}
                alt="Tool 2"
                className="w-5 h-5 justify-center"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
              <Image
                src={assets.express}
                alt="Tool 3"
                className="w-5 h-5 justify-center"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
              <Image
                src={assets.js}
                alt="Tool 4"
                className="w-5 h-5 justify-center rounded-sm"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
              <Image
                src={assets.mongodb}
                alt="Tool 5"
                className="w-5 h-5 justify-center"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
              <Image
                src={assets.figma}
                alt="Tool 6"
                className="w-5 h-5 justify-center"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        viewport={{ once: true, amount: 0.2 }}
        href="#"
        className="w-max flex items-center justify-center gap-2  text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more{""  }
        <Image
          src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold}
          alt="arrow right"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Projects;
