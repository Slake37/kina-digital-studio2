import React from "react";

const Testimonials = () => {
  return (
    <div className="max-w-[1220px] mx-auto text-[#FAF9F6] flex flex-col justify-center items-start min-h-screen py-[7rem] px-3 gap-5">
      <h1 className=" text-4xl font-semibold text-[#D7191C]">Testimonials.</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="flex flex-col justify-start items-start p-3 border-2 border-[#D7191C] rounded-md ">
          <h3 className="text-2xl font-semibold underline">Petryk Petre</h3>
          <p className="text-xs md:text-md mt-2">
            I can not recommend enough Kina Digital Studio because of the
            seamless collaboration that we had. They had worked created the
            website for my business:
            <a
              className="underline mx-1"
              target="_blank"
              href="https://www.pridedrivingschool.co.uk"
            >
              www.pridedrivingschool.co.uk
            </a>
            and the result was more than what I was hoping for. Constantly Alin
            has tried to come with his own input bringing the standard of the
            website to a higher level! Please do not hesitate to get in touch
            with them !!!
          </p>
        </div>
        <div className="flex flex-col justify-start items-start p-3 border-2 border-[#D7191C] rounded-md">
          <h3 className="text-2xl font-semibold underline">Remus Florea</h3>
          <p className="text-xs md:text-md mt-2">
            I didn't know exactly what I wanted for my website when I first met
            Alin but he guided me throught the entire process. Very happy with
            the webside Kina Digital created for my driving school:
            <a
              className="underline mx-1"
              href="https://www.pridedrivingschool.co.uk/"
              target="_blank"
            >
              https://www.pridedrivingschool.co.uk/
            </a>
            They are very profesional and always here to suggest what is best
            for your business. Thanks a lot again. I will definetly make sure to
            recommend you to anybody who needs a website.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start p-3 border-2 border-[#D7191C] rounded-md">
          <h3 className="text-2xl font-semibold underline">Smith Edward</h3>
          <p className="text-xs md:text-md mt-2">
            It's brilliant working with Kina Digital. Their website builder is
            exceptional - made for non-techies, with simple, clear online help /
            tips backed up by a friendly, fast, response from the support team
            whenever you get stuck. Fantastic value for money - exceptional
            service. Thank you Kina !!!
          </p>
        </div>
        <div className="flex flex-col justify-start items-start p-3 border-2 border-[#D7191C] rounded-md ">
          <h3 className="text-2xl font-semibold underline">Ionut Moldovan</h3>
          <p className="text-xs md:text-md mt-2">
            Visit
            <a
              className="underline mx-1"
              href="https://www.arimahire.co.uk"
              target="_blank"
            >
              www.arimahire.co.uk
            </a>
            and have a look at the great job that Alin made for me.. would
            greatly recommend.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
