import AfterHeader from "@/components/AfterHeader";
import EatSleepCodeRepeat from "@/components/EatSleepCodeRepeat";
import Header from "@/components/Header";
import OurWork from "@/components/OurWork";
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
    </div>
  );
};

export default Home;
