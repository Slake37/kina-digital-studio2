"use client";

import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaSquareFacebook,
  FaRegCopyright,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="max-w-[1440px] mx-auto text-[#FAF9F6] p-3 flex flex-col justify-center items-center gap-3 mt-5 border-t-2 border-[#FAF9F6]">
      <h3>Follow us on:</h3>
      <div className="w-full flex justify-center items-center gap-4 text-2xl">
        <a href="https://www.facebook.com/kinadigitalstudio" target="_blank">
          <FaSquareFacebook />
        </a>
        <a href="https://www.instagram.com/kinadigitalstudio/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/kinadigitalstu1" target="_blank">
          <FaXTwitter />
        </a>
        <a href="https://www.linkedin.com/in/alin-moldovan86" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
      <p className="flex justify-center items-center gap-2">
        <FaRegCopyright />
        Copyright Kina Digital Studio 2024
      </p>
    </div>
  );
};

export default Footer;
