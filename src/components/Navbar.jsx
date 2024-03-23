"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import KinaLogo from "../assets/KinaLogo.png";
import {
  IoMenu,
  IoHomeOutline,
  IoInformationCircleOutline,
  IoCogOutline,
  IoBookOutline,
  IoNewspaperOutline,
  IoChatbubbleEllipsesOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { TfiAgenda } from "react-icons/tfi";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0B1215]">
      <div className="flex justify-between md:justify-start items-center p-2">
        <Image
          src={KinaLogo}
          width={60}
          height={60}
          alt="Kina Digital Studio logo"
          priority
          className="bg-[#FAF9F6] p-1 rounded-full "
        />
        <motion.div
          className="w-full hidden text-right md:flex flex-col justify-center items-end  "
          initial={{ y: -250 }}
          animate={{ y: 0, stiffness: 0 }}
        >
          <div className="text-[#D7191C] p-2 lg:text-lg flex justify-center items-center gap-2 lg:gap-4">
            <Link
              href="#"
              className="flex flex-col justify-center items-center p-1 gap-1 cursor-pointer  hover:scale-110 hover:text-[#FAF9F6] transition-all"
            >
              <IoHomeOutline className="text-xl" />
              Home
            </Link>
            <Link
              href="#"
              className="flex flex-col justify-center items-center p-1 gap-1 cursor-pointer  hover:scale-110 hover:text-[#FAF9F6] transition-all"
            >
              <IoInformationCircleOutline className="text-xl" />
              About Us
            </Link>
            <Link
              href="#"
              className="flex flex-col justify-center items-center p-1 gap-1 cursor-pointer hover:scale-110 hover:text-[#FAF9F6] transition-all"
            >
              <IoCogOutline className="text-xl" />
              Services
            </Link>
            <Link
              href="#"
              className="flex flex-col justify-center items-center p-1 gap-1 cursor-pointer  hover:scale-110 hover:text-[#FAF9F6] transition-all"
            >
              <IoBookOutline className="text-xl" />
              Portfolio
            </Link>
            <Link
              href="#"
              className="flex flex-col justify-center items-center p-1 gap-1 cursor-pointer  hover:scale-110 hover:text-[#FAF9F6] transition-all"
            >
              <IoNewspaperOutline className="text-xl" />
              Blog
            </Link>
            <Link
              href="#"
              className="flex flex-col justify-center items-center p-1 gap-1 cursor-pointer  hover:scale-110 hover:text-[#FAF9F6] transition-all"
            >
              <IoChatbubbleEllipsesOutline className="text-xl" />
              Testimonials
            </Link>
            <Link
              href="#"
              className="flex flex-col justify-center items-center p-1 gap-1 cursor-pointer  hover:scale-110 hover:text-[#FAF9F6] transition-all"
            >
              <TfiAgenda className="text-xl" />
              Contact Us
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="w-full md:hidden text-right flex flex-col justify-center items-end bg-[#121212]"
          initial={{ y: -250 }}
          animate={{ y: 0 }}
        >
          {!openMenu ? (
            <IoMenu
              className="text-4xl text-[#D7191C]"
              onClick={() => setOpenMenu(!openMenu)}
            />
          ) : (
            <IoCloseOutline
              className="text-4xl text-[#D7191C]"
              onClick={() => setOpenMenu(!openMenu)}
            />
          )}
        </motion.div>
      </div>
      <motion.div
        className="w-full h-[1px] bg-[#D7191C] z-50 "
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ ease: "easeOut", duration: 1 }}
      ></motion.div>
      <div
        className={
          openMenu
            ? "text-[#D7191C] p-2 md:hidden  transition-all flex flex-col justify-center items-end gap-4 "
            : "hidden"
        }
      >
        <Link
          href="#"
          className="flex  justify-center items-center p-1 gap-1 font-semibold text-xl"
        >
          <IoHomeOutline className="text-xl" />
          Home
        </Link>

        <Link
          href="#"
          className="flex  justify-center items-center p-1 gap-1 cursor-pointer  font-semibold text-xl"
        >
          <IoInformationCircleOutline className="text-xl" />
          About Us
        </Link>
        <Link
          href="#"
          className="flex  justify-center items-center p-1 gap-1 cursor-pointer font-semibold text-xl"
        >
          <IoCogOutline className="text-xl" />
          Services
        </Link>
        <Link
          href="#"
          className="flex  justify-center items-center p-1 gap-1 cursor-pointer  hover:scale-110 font-semibold text-xl"
        >
          <IoBookOutline className="text-xl" />
          Portfolio
        </Link>
        <Link
          href="#"
          className="flex justify-center items-center p-1 gap-1 cursor-pointer  font-semibold text-xl"
        >
          <IoNewspaperOutline className="text-xl" />
          Blog
        </Link>
        <Link
          href="#"
          className="flex  justify-center items-center p-1 gap-1 cursor-pointer font-semibold text-xl"
        >
          <IoChatbubbleEllipsesOutline className="text-xl" />
          Testimonials
        </Link>
        <Link
          href="#"
          className="flex  justify-center items-center p-1 gap-1 cursor-pointer  font-semibold text-xl"
        >
          <TfiAgenda className="text-xl" />
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
