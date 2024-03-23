import Image from "next/image";
import eatSleepCodeRepeat from "../assets/eatSleepCodeRepeat.jpg";
const EatSleepCodeRepeat = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-black flex flex-col justify-center items-center md:flex-row text-[#FAF9F6] font-RobotoCondensed p-3 mt-5">
      <Image
        src={eatSleepCodeRepeat}
        width={1250}
        height={1250}
        alt="Eat Sleep Code Repeat"
        className="w-full object-fill md:w-[320px] lg:w-[550px]"
      />
      <h2 className="text-xl leading-7 md:text-2xl lg:text-3xl">
        Fuel up on ideas, rest in lines of code, and wake up to endless
        possibilities.
        <span className="text-[#D7191C]">Eat, sleep, code, repeat</span> - the
        coder's rhythm.
      </h2>
    </div>
  );
};

export default EatSleepCodeRepeat;
