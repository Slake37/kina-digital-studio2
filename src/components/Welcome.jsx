"use client";

import Image from "next/image";
import welcomeImage from "../assets/welcomeImage.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Welcome = () => {
  const [ref, inView] = useInView();

  return (
    <div
      className="mt-5 flex flex-col md:flex-row-reverse max-w-[1280px] mx-auto justify-center items-center p-3 gap-3"
      ref={ref}
    >
      <Image
        src={welcomeImage}
        width={1200}
        height={1200}
        alt="Happy coder working on computer illustration"
        className="object-cover w-full md:w-[320px] lg:-[520px]"
      />
      <div className="max-w-[720px] flex flex-col justify-start items-start text-left mt-5 md:mt-0">
        <motion.h2
          className="text-[#FAF9F6]  text-3xl lg:text-4xl font-bold font-RobotoCondensed"
          initial={{ x: -2000 }}
          animate={{ x: inView ? 0 : -2000 }}
          transition={{ ease: "linear", duration: 0.5, delay: 0.5 }}
        >
          Unleashing Digital Potential
        </motion.h2>
        <motion.h2
          className="text-3xl text-stroke font-extrabold lg:text-4xl text-stroke-[#D7191C]"
          initial={{ x: -2000 }}
          animate={{ x: inView ? 0 : -2000 }}
          transition={{ ease: "linear", duration: 0.5, delay: 0.7 }}
        >
          Your Vision, Our Expertise
        </motion.h2>
        <motion.p
          className="text-[#FAF9F6] lg:text-xl mt-3 font-light"
          initial={{ x: -2000 }}
          animate={{ x: inView ? 0 : -2000 }}
          transition={{ ease: "linear", duration: 0.5, delay: 0.9 }}
        >
          Welcome to
          <span className="text-[#D7191C] underline">Kina Digital Studio</span>,
          where we transform your digital aspirations into reality. As a leading
          force in web development, we specialize in creating websites and web
          applications that not only meet but exceed your expectations. Our
          dedicated team of skilled developers, designers, and strategists
          collaborates seamlessly to bring your unique ideas to life.
        </motion.p>
      </div>
    </div>
  );
};

export default Welcome;
