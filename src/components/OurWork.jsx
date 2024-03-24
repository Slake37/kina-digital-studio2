"use client";

import taxi from "../assets/taxi.jpg";
import drivingSchool from "../assets/drivingSchool.jpg";
import maintenance from "../assets/maintenance.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurWork = () => {
  const [ref, inView] = useInView();
  return (
    <div className="max-w-[1440px] mx-auto text-[#FAF9F6] mt-5 p-3 flex flex-col justify-start items-start gap-3">
      <h2 className="text-[#D7191C] font-semibold text-2xl md:text-5xl">
        Works of Innovation.
      </h2>
      <div className="flex flex-col justify-center items-center gap-3 md:flex-row md:gap-5 mt-3">
        <div ref={ref} className="hover:scale-105 transition-all">
          <motion.div
            className="relative  cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ ease: "linear", duration: 0.2 }}
          >
            <Image
              src={taxi}
              width={1250}
              height={1250}
              alt="Taxi"
              className="w-full object-fill"
            />
            <p className="absolute bottom-0 left-0 bg-[#FAF9F6]/50 w-full text-[#0B1215] font-semibold text-lg px-2">
              Arima Hire
            </p>
          </motion.div>
        </div>
        <div ref={ref} className="hover:scale-105 transition-all">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ ease: "linear", duration: 0.2, delay: 0.3 }}
          >
            <Image
              src={drivingSchool}
              width={1250}
              height={1250}
              alt="Driving
              school"
              className="w-full object-fill"
            />
            <p className="absolute bottom-0 left-0 bg-[#FAF9F6]/50 w-full text-[#0B1215] font-semibold text-lg px-2">
              Pride Driving School
            </p>
          </motion.div>
        </div>
        <div ref={ref} className="hover:scale-105 transition-all">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ ease: "linear", duration: 0.5, delay: 0.5 }}
          >
            <Image
              src={maintenance}
              width={1250}
              height={1250}
              alt="Maintenance"
              className="w-full object-fill"
            />
            <p className="absolute bottom-0 left-0 bg-[#FAF9F6]/50 w-full text-[#0B1215] font-semibold text-lg px-2">
              Maintenancedotro
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
