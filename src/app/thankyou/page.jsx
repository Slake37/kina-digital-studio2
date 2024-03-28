"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import thankYouAnimation from "../../assets/thankYouAnimation";
import Link from "next/link";

const Thankyou = () => {
  return (
    <div className="max-w-[1220px] mx-auto text-[#FAF9F6] flex flex-col justify-center items-center min-h-screen py-[7rem] px-3 gap-5">
      <Player
        autoplay
        keepLastFrame
        src={thankYouAnimation}
        style={{ height: "300px", width: "300px" }}
      ></Player>
      <h1 className="text-3xl text-center font-semibold font-RobotoCondensed">
        Thank you for your message
      </h1>
      <Link
        href={"/"}
        className="bg-[#FAF9F6] text-[#0B1215] text-xl px-5 py-1 rounded-md"
      >
        Back to homepage
      </Link>
    </div>
  );
};

export default Thankyou;
