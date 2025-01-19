import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      id="work"
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
        My latest work
      </motion.h2>
      {/* 
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Poppins"
      >
        Welcome to my portfolio. Here are some of my recent projects.
      </motion.p> */}

      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 place-items-center my-10 gap-5 dark:text-black"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group w-72"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-3 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div> */}

      <motion.div
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          opacity: { duration: 0.3, ease: "easeInOut", delay: 0.8 }, // Delay for opacity
          scale: { duration: 0.3, ease: "easeInOut" }, // Separate transition for hover scale
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
                alt="Tool 1"
                className="w-5 h-5 justify-center"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
              <Image
                src={assets.js}
                alt="Tool 1"
                className="w-5 h-5 justify-center rounded-sm"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
              <Image
                src={assets.mongodb}
                alt="Tool 1"
                className="w-5 h-5 justify-center"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
              <Image
                src={assets.figma}
                alt="Tool 1"
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

export default Work;
