import React from "react";
import about from "../../assets/images/about.jpg";
import { BsFillPlayFill } from "react-icons/bs";
import VideoModal from "../Modal/VideoModal";

const Efficiency = () => {
  return (
    <div className="flex flex-col mt-20 relative">
      <div
        className="relative flex justify-center items-center  w-full bg-cover bg-no-repeat bg-center rounded-xl"
        style={{ backgroundImage: `url(${about})`, height: "80vh" }}
      >
        <div>
          <button className="w-20 h-20 bg-white flex justify-center items-center rounded-full text-green-600 text-xl">
            <BsFillPlayFill />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start mt-10 tracking-wide">
        <div className="font-bold">
          <h1>Efficiency. Transparency. </h1>
          <h1>Control.</h1>
        </div>
        <p className="opacity-60 text-slate-500 text-xs tracking-wide my-4">
          Hously developed a platform for the Real Estate marketplace that
          allows buyers and sellers to easily execute a transaction on their
          own. The platform drives efficiency, cost transparency and control
          into the hands of the consumers. Hously is Real Estate Redefined.
        </p>
        <button className="bg-green-600 text-white text-xs py-2 px-5 rounded-md">
          Learn More
        </button>
      </div>
      <VideoModal />
    </div>
  );
};

export default Efficiency;
