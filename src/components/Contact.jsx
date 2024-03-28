"use client";

import { db } from "../firebase.config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useRef, useState } from "react";
import contactUsAnimation from "../assets/contactUsAnimation.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Contact = () => {
  const [error, setError] = useState(false);
  const router = useRouter();

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      nameRef.current.value !== "" &&
      emailRef.current.value !== "" &&
      messageRef.current.value !== ""
    ) {
      setError(false);
      await addDoc(collection(db, "newMessage"), {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
        timeStamp: serverTimestamp(),
      });
      router.push("/thankyou");
      clearForm();
    } else {
      toast.error("Please fill all the fields");
    }
  };

  const clearForm = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div className="max-w-[1440px] mx-auto text-[#FAF9F6] p-3 flex flex-col justify-between items-start mt-5 ">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <h1 className="text-3xl font-semibold">Drop Us a Line.</h1>
      <div className="w-full flex flex-col md:flex-row justify-between items-center p-3">
        <form className="w-full flex flex-col justify-center items-start gap-2  mt-3 ">
          <div className="w-full">
            <p>Your name</p>
            <input
              ref={nameRef}
              type="text"
              className="w-full rounded-sm outline-none text-[#0B1215] px-2"
            />
          </div>
          <div className="w-full">
            <p>Your email</p>
            <input
              ref={emailRef}
              type="email"
              className="w-full rounded-sm outline-none text-[#0B1215] px-2"
            />
          </div>
          <div className="w-full">
            <p>Your message</p>
            <textarea
              ref={messageRef}
              cols="30"
              rows="10"
              className="w-full rounded-sm text-[#0B1215] outline-none px-2"
            ></textarea>
          </div>
          <input
            onClick={handleSubmit}
            type="submit"
            value="Send"
            className="px-10 py-1 cursor-pointer bg-[#FAF9F6] text-[#0B1215] font-semibold rounded-md mt-3 outline-none "
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
