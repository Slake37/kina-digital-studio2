"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MdOutlineDesignServices, MdOutlineSpeed } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { FaCode } from "react-icons/fa6";
import { RiSeoLine } from "react-icons/ri";
import { IoPricetagOutline } from "react-icons/io5";

const Services = () => {
  const [ref, inView] = useInView();
  return (
    <div className="max-w-[1440px] mx-auto text-[#FAF9F6] mt-5 p-3">
      <h1 className="text-2xl font-semibold lg:text-4xl">
        Digital Excellence Services.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-3" ref={ref}>
        <div>
          <motion.div
            className="flex flex-col justify-center items-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            <MdOutlineDesignServices className="text-5xl text-[#D7191C]" />
            <h2 className="text-2xl font-RobotoCondensed text-[#D7191C]">
              Web Design
            </h2>
            <p className="text-sm text-center">
              Craft visually stunning and user-centric designs that reflect your
              brand identity. Our designers blend creativity with functionality
              to create websites that leave a lasting impression.
            </p>
          </motion.div>
        </div>
        <div>
          <motion.div
            className="flex flex-col justify-center items-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            <FaCode className="text-5xl text-[#D7191C]" />
            <h2 className="text-2xl font-RobotoCondensed text-[#D7191C]">
              Web Development
            </h2>
            <p className="text-sm text-center">
              Transform designs into fully functional, dynamic websites and web
              applications. Our development team leverages the latest
              technologies to ensure a seamless user experience and optimal
              performance.
            </p>
          </motion.div>
        </div>
        <div>
          <motion.div
            className="flex flex-col justify-center items-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            <DiResponsive className="text-5xl text-[#D7191C]" />
            <h2 className="text-2xl font-RobotoCondensed text-[#D7191C]">
              Responsive Design
            </h2>
            <p className="text-sm text-center">
              Create websites that adapt seamlessly to various devices,
              providing an optimal viewing experience. Our responsive design
              ensures your audience enjoys a consistent and engaging interface
              on desktops, tablets, and mobiles.
            </p>
          </motion.div>
        </div>
        <div>
          <motion.div
            className="flex flex-col justify-center items-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            <RiSeoLine className="text-5xl text-[#D7191C]" />
            <h2 className="text-2xl font-RobotoCondensed text-[#D7191C]">
              SEO
            </h2>
            <p className="text-sm text-center">
              Enhance your online visibility with our SEO services. We optimize
              your website to rank higher on search engines, driving organic
              traffic and improving your digital presence.
            </p>
          </motion.div>
        </div>
        <div>
          <motion.div
            className="flex flex-col justify-center items-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            <MdOutlineSpeed className="text-5xl text-[#D7191C]" />
            <h2 className="text-2xl font-RobotoCondensed text-[#D7191C]">
              Fast Delivery
            </h2>
            <p className="text-sm text-center">
              Time is of the essence. We prioritize swift project delivery
              without compromising quality. Our streamlined processes and
              efficient workflows ensure your project is delivered promptly.
            </p>
          </motion.div>
        </div>
        <div>
          <motion.div
            className="flex flex-col justify-center items-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            <IoPricetagOutline className="text-5xl text-[#D7191C]" />
            <h2 className="text-2xl font-RobotoCondensed text-[#D7191C]">
              Affordable Prices
            </h2>
            <p className="text-sm text-center">
              Quality doesn't have to come at a high cost. We believe in
              providing top-notch services at affordable prices, making digital
              excellence accessible to businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
