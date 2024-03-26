import AfterHeader from "@/components/AfterHeader";
import Contact from "@/components/Contact";
import EatSleepCodeRepeat from "@/components/EatSleepCodeRepeat";
import Header from "@/components/Header";
import OurWork from "@/components/OurWork";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Welcome from "@/components/Welcome";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <AfterHeader />
      <Welcome />
      <Steps />
      <EatSleepCodeRepeat />
      <OurWork />
      <Services />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
