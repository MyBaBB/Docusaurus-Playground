// eslint-disable-next-line no-unused-vars
import React from "react";
import "../pages/index.module.css";
import { GiGorilla } from "react-icons/gi";
import "../css/custom.css";
const Gorilla = () => {
  return (
    /* --------- Under Construction Gorilla -----------  */
    <div>
      <div className=" relative flex items-center justify-center">
        <div
          className="gorilla z-1 min-w-screen relative m-auto mb-4 mt-2 h-fit w-fit  scale-[50%] flex-row items-center
             justify-center whitespace-nowrap rounded-3xl border-2 border-lime-500
      bg-gradient-to-b from-sky-500 from-40% to-green-800 to-60% p-[2rem] text-center shadow-2xl xs:scale-[70%] sm:scale-[100%]"
        >
          <p className="whitespace-nowrap font-BlackOpsOne-Regular text-3xl text-lime-400 ">
            This Region
          </p>
          <div className="relative flex h-[30%] w-full items-center justify-center">
            <GiGorilla size={80} className="sc text-gray-800" />
          </div>

          <p className="whitespace-nowrap font-BlackOpsOne-Regular text-3xl text-lime-400">
            Under Construction
            <hr className="hr4   " />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gorilla;
