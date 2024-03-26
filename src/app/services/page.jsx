import { MdOutlineDesignServices, MdOutlineSpeed } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { FaCode } from "react-icons/fa6";
import { RiSeoLine } from "react-icons/ri";
import { IoPricetagOutline } from "react-icons/io5";

const Services = () => {
  return (
    <div className="max-w-[1220px] mx-auto text-[#FAF9F6] flex flex-col justify-center items-start min-h-screen py-[7rem] px-3 gap-5">
      <h1 className=" text-4xl font-semibold text-[#D7191C]">Our Services.</h1>
      <div className="w-full mx-auto flex flex-col justify-center items-center md:justify-between">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-evenly  w-full gap-5 p-2">
          <div className="w-full flex flex-col justify-center items-center md:items-start">
            <MdOutlineDesignServices className="text-4xl text-[#D7191C]" />
            <h2 className="text-2xl font-RobotoCondensed font-semibold">
              Web Design
            </h2>
          </div>
          <p className="text-left max-w-[420px] leading-8">
            Craft visually stunning and user-centric designs that reflect your
            brand identity. Our designers blend creativity with functionality to
            create websites that leave a lasting impression.
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#FAF9F6]/50"></div>
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-evenly  gap-5 w-full p-2">
          <div className="w-full flex flex-col justify-center items-center md:items-start">
            <FaCode className="text-4xl text-[#D7191C]" />
            <h2 className="text-2xl font-RobotoCondensed font-semibold">
              Web Development
            </h2>
          </div>
          <p className="text-left max-w-[420px] leading-8">
            Transform designs into fully functional, dynamic websites and web
            applications. Our development team leverages the latest technologies
            to ensure a seamless user experience and optimal performance.
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#FAF9F6]/50"></div>
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-evenly  gap-5 w-full p-2">
          <div className="w-full flex flex-col justify-center items-center md:items-start">
            <DiResponsive className="text-4xl text-[#D7191C]" />
            <h2 className="text-2xl font-RobotoCondensed font-semibold">
              Responsive Design
            </h2>
          </div>
          <p className="text-left max-w-[420px] leading-8">
            Create websites that adapt seamlessly to various devices, providing
            an optimal viewing experience. Our responsive design ensures your
            audience enjoys a consistent and engaging interface on desktops,
            tablets, and mobiles.
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#FAF9F6]/50"></div>
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-evenly  gap-5 w-full p-2">
          <div className="w-full flex flex-col justify-center items-center md:items-start">
            <RiSeoLine className="text-4xl text-[#D7191C]" />
            <h2 className="text-2xl font-RobotoCondensed font-semibold">
              Search Engine Optimization
            </h2>
          </div>
          <p className="text-left max-w-[420px] leading-8">
            Enhance your online visibility with our Search Eengine Optimization
            services. We optimize your website to rank higher on search engines,
            driving organic traffic and improving your digital presence.
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#FAF9F6]/50"></div>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-evenly  gap-5 w-full p-2">
        <div className="w-full flex flex-col justify-center items-center md:items-start">
          <MdOutlineSpeed className="text-4xl text-[#D7191C]" />
          <h2 className="text-2xl font-RobotoCondensed font-semibold">
            Fast Delivery
          </h2>
        </div>
        <p className="text-left max-w-[420px] leading-8">
          Time is of the essence. We prioritize swift project delivery without
          compromising quality. Our streamlined processes and efficient
          workflows ensure your project is delivered promptly.
        </p>
      </div>
      <div className="w-full h-[1px] bg-[#FAF9F6]/50"></div>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-evenly  gap-5 w-full p-2">
        <div className="w-full flex flex-col justify-center items-center md:items-start">
          <IoPricetagOutline className="text-4xl text-[#D7191C]" />
          <h2 className="text-2xl font-RobotoCondensed font-semibold">
            Affordable Prices
          </h2>
        </div>
        <p className="text-left max-w-[420px] leading-8">
          Quality doesn't have to come at a high cost. We believe in providing
          top-notch services at affordable prices, making digital excellence
          accessible to businesses of all sizes.
        </p>
      </div>
      <div className="w-full h-[1px] bg-[#FAF9F6]/50"></div>
    </div>
  );
};

export default Services;
