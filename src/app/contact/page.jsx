"use client";

import contactUsAnimation from "../../assets/contactUsAnimation.json";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1220px] mx-auto text-[#FAF9F6] flex flex-col justify-center items-start min-h-screen py-[7rem] px-3 gap-5">
      <h1 className=" text-4xl font-semibold text-[#D7191C]">Contact us.</h1>
      <div className="w-full flex flex-col md:flex-row justify-between items-center p-3">
        <form className="w-full flex flex-col justify-center items-start gap-2  mt-3 ">
          <div className="w-full">
            <p>Your name</p>
            <input type="text" className="w-full rounded-sm" />
          </div>
          <div className="w-full">
            <p>Your email</p>
            <input type="email" name="" id="" className="w-full rounded-sm" />
          </div>
          <div className="w-full">
            <p>Your message</p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full rounded-sm"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send"
            className="px-10 py-1 bg-[#FAF9F6] text-[#0B1215] font-semibold rounded-md mt-3"
          />
        </form>
        <Player
          autoplay
          loop
          keepLastFrame
          src={contactUsAnimation}
          style={{ height: "auto", width: "auto" }}
          className="hidden md:flex"
        ></Player>
      </div>
    </div>
  );
};

export default Contact;
