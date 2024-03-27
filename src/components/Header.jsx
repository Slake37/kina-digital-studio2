"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import animation from "../assets/animation2.json";
import Link from "next/link";
const Header = () => {
  return (
    <div className="text-[#FAF9F6] flex flex-col justify-center items-start min-h-screen w-full p-2 max-w-[1440px] mx-auto -z-50 ">
      <div className="flex flex-col md:flex-row-reverse justify-evenly items-center w-full mt-10">
        <Player
          autoplay
          keepLastFrame
          src={animation}
          style={{ height: "300px", width: "300px" }}
        ></Player>
        <div className="flex flex-col justify-start items-start p-2 gap-3 overflow-hidden">
          <motion.h1
            initial={{ x: -2450 }}
            animate={{ x: 0 }}
            transition={{ delay: 3, duration: 0.5, ease: "easeOut" }}
            className="text-4xl font-bold lg:text-7xl"
          >
            Kina Digital Studio
          </motion.h1>
          <motion.h2
            initial={{ x: 2450 }}
            animate={{ x: 0 }}
            transition={{ delay: 3.2, duration: 0.5, ease: "easeOut" }}
            className="text-2xl lg:text-5xl font-RobotoCondensed"
          >
            Crafting Digital Experiences
          </motion.h2>
          <motion.h2
            initial={{ x: -2450 }}
            animate={{ x: 0 }}
            transition={{ delay: 3.4, duration: 0.5, ease: "easeOut" }}
            className="text-2xl lg:text-5xl font-RobotoCondensed"
          >
            One Line of Code at a Time
          </motion.h2>
          <motion.div
            className="flex justify-start items-center gap-3 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1, ease: "easeOut" }}
          >
            <Link href={"/contact"}>
              <button className="border-2 rounded-md border-[#D7191C] px-3 py-1 hover:scale-110 hover:shadow-md hover:shadow-[#D7191C] transition-all">
                Get a Quote
              </button>
            </Link>
            <Link href={"/about"}>
              <button className="bg-[#FAF9F6] text-[#0B1215] px-3 py-1 rounded-md hover:scale-110 hover:shadow-md hover:shadow-[#FAF9F6] transition-all">
                About Us
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
