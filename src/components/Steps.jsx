"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import consultation from "../assets/consultation.jpg";
import design from "../assets/design.jpg";
import build from "../assets/build.jpg";
import Image from "next/image";

const Steps = () => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className="max-w-[1280px] mx-auto flex flex-col justify-center items-center gap-3 text-[#FAF9F6] mt-5"
    >
      <h1 className="text-center text-2xl lg:text-4xl font-semibold">
        From Concept to Creation Our Seamless Project Development Process
      </h1>
      <div className="flex flex-col md:flex-row w-full">
        <motion.div
          className="w-full flex flex-col justify-start items-center p-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ ease: "linear", duration: 0.5, delay: 0.7 }}
        >
          <Image
            src={consultation}
            width={1250}
            height={1250}
            alt="People meet for consultation"
            className="w-full rounded-md object-fill"
          />
          <div className="p-2 flex flex-col justify-center items-center">
            <h3 className="text-2xl underline text-[#D7191C] ">Consultation</h3>
            <p className="text-sm lg:text-lg">
              In the first crucial step, we sit down with you to understand your
              vision, goals, and unique requirements. Our expert team conducts
              thorough consultations to delve into the intricacies of your
              project. We believe in open communication and collaboration,
              ensuring that every aspect of your vision is explored and
              comprehended.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-full flex flex-col justify-start items-center p-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ ease: "linear", duration: 0.5, delay: 0.7 }}
        >
          <Image
            src={design}
            width={1250}
            height={1250}
            alt="Project design"
            className="w-full rounded-md object-fill"
          />
          <div className="p-2 flex flex-col justify-center items-center">
            <h3 className="text-2xl underline text-[#D7191C] ">Design</h3>
            <p className="text-sm lg:text-lg">
              Armed with insights from the consultation phase, our skilled
              designers craft visually stunning and user-centric designs. We
              believe that exceptional design is not just about aesthetics but
              also about creating a seamless user experience. From wireframes to
              mock-ups, we bring your ideas to life in a visually captivating
              manner, ensuring that the design aligns perfectly with your brand
              and objectives.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-full flex flex-col justify-start items-center p-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ ease: "linear", duration: 0.5, delay: 0.7 }}
        >
          <Image
            src={build}
            width={1250}
            height={1250}
            alt="Project bulding"
            className="w-full rounded-md object-fill"
          />
          <div className="p-2 flex flex-col justify-center items-center">
            <h3 className="text-2xl underline text-[#D7191C] ">Build</h3>
            <p className="text-sm lg:text-lg">
              With the blueprint in place, our development team takes the reins
              to build the foundation of your project. Utilizing the latest
              technologies and coding practices, we transform the approved
              design into a fully functional, responsive, and dynamic website or
              web application. Rigorous testing ensures a flawless user
              experience, and we work closely with you to make any necessary
              refinements.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Steps;
