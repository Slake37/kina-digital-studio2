"use client";

import { motion } from "framer-motion";

const AfterHeader = () => {
  return (
    <div className="flex flex-col text-[#FAF9F6] justify-center items-center max-w-[920px] mx-auto p-3 text-center overflow-hidden">
      <motion.h2
        className="font-semibold font-RobotoCondensed text-2xl lg:text-4xl text-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 2,
        }}
      >
        Web Development Newcastle and North East
      </motion.h2>
      <motion.p
        className="mt-3 lg:text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 2,
        }}
      >
        <span className="text-xl lg:text-3xl font-semibold text-[#D7191C] mr-2">
          Kina Digital Studio
        </span>
        is a web design and development studio based in Newcastle-upon-Tyne. We
        offer a wide range of creative web solutions including: presentation
        website design, content managed systems, software development, booking
        systems to businesses in Newcastle and throughout the whole of the UK.
      </motion.p>
    </div>
  );
};

export default AfterHeader;
