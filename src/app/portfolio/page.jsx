import taxi from "../../assets/taxi.jpg";
import drivingSchool from "../../assets/drivingSchool.jpg";
import shopping from "../../assets/shopping.jpg";
import movies from "../../assets/movies.jpg";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="max-w-[1220px] mx-auto text-[#FAF9F6] flex flex-col justify-center items-start min-h-screen py-[7rem] px-3 gap-5">
      <h1 className=" text-4xl font-semibold text-[#D7191C]">Our Work.</h1>
      <div className="max-w-[720px] mx-auto flex flex-col justify-center items-center gap-5">
        <Link
          href={"https://www.arimahire.co.uk"}
          target="_blank"
          className="relative"
        >
          <Image
            src={taxi}
            height={2250}
            width={2250}
            alt="Taxi driver"
            className="rounded-md"
          />
          <p className="absolute bottom-0 w-full bg-[#FAF9F6]/50 text-xl p-2">
            Arima Hire
          </p>
        </Link>
        <Link
          href={"https://www.pridedrivingschool.co.uk"}
          target="_blank"
          className="relative"
        >
          <Image
            src={drivingSchool}
            height={2250}
            width={2250}
            alt="Driving School"
            className="rounded-md"
          />
          <p className="absolute bottom-0 w-full bg-[#FAF9F6]/50 text-xl p-2">
            Pride Driving School
          </p>
        </Link>

        <Link
          href={"https://moviezzz-swart.vercel.app/"}
          target="_blank"
          className="relative"
        >
          <Image
            src={movies}
            height={2250}
            width={2250}
            alt="Movies"
            className="rounded-md"
          />
          <p className="absolute bottom-0 w-full bg-[#FAF9F6]/50 text-xl p-2">
            Movies Database
          </p>
        </Link>
        <Link
          href={"https://myshoppinglist-six.vercel.app/"}
          target="_blank"
          className="relative"
        >
          <Image
            src={shopping}
            height={2250}
            width={2250}
            alt="Shopping list"
            className="rounded-md"
          />
          <p className="absolute bottom-0 w-full bg-[#FAF9F6]/50 text-xl p-2">
            Shopping list web application
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
