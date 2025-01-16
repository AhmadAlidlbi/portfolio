"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-full -z-10 translate-y-[-80%] md:block hidden dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full z-[-1]" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 py-4 flex items-center z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <div className="flex items-center w-full">
          <a href="#top" className="flex-shrink-0">
            <Image
              src={assets.logo}
              alt="logo"
              className="w-6 sm:w-6 md:w-6 lg:w-7 cursor-pointer mr-2"
            />
          </a>
          <a
            href="#top"
            className="cursor-pointer text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] flex-shrink-0"
          >
            Ahmad Alidlbi
          </a>
        </div>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-12 rounded-full px-16 py-3 w-full justify-center ${
            isScroll
              ? ""
              : " bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li className="flex-shrink-0">
            <a className="font-Poppins text-sm" href="#top">
              Home
            </a>
          </li>
          <li className="flex-shrink-0">
            <a className="font-Poppins text-sm" href="#about">
              About me
            </a>
          </li>
          {/* <li className="flex-shrink-0">
            <a className="font-Poppins text-sm" href="#services">
              Services
            </a>
          </li> */}
          <li className="flex-shrink-0">
            <a className="font-Poppins text-sm" href="#work">
              My work
            </a>
          </li>
          <li className="flex-shrink-0">
            <a className="font-Poppins text-sm" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex justify-end w-full">
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-5 lg:w-6 cursor-pointer"
            />
          </button>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-5 lg:w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* Mobile menu */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-blue-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div>
            <button className="absolute top-6 right-6" onClick={closeMenu}>
              <Image
                src={isDarkMode ? assets.close_white : assets.close_black}
                alt=""
                className="w-4 cursor-pointer"
              />
            </button>
          </div>
          <li>
            <a className="font-Poppins text-sm" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a
              className="font-Poppins text-sm"
              onClick={closeMenu}
              href="#about"
            >
              About me
            </a>
          </li>
          {/* <li>
            <a className="font-Poppins text-sm" onClick={closeMenu} href="#services">
              Services
            </a>
          </li> */}
          <li>
            <a
              className="font-Poppins text-sm"
              onClick={closeMenu}
              href="#work"
            >
              My work
            </a>
          </li>
          <li>
            <a
              className="font-Poppins text-sm"
              onClick={closeMenu}
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
