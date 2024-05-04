// eslint-disable-next-line no-unused-vars
import React from "react";
import '../pages/index.module.css';
import { GiGorilla } from "react-icons/gi";
import '../css/custom.css';
const Gorilla = () => {
  return (
    /* --------- Under Construction Gorilla -----------  */
<div> 
   <div className=" relative flex justify-center items-center">
    <div
      className="gorilla z-1 min-w-screen w-fit m-auto relative scale-[50%] xs:scale-[70%] sm:scale-[100%]  mt-2 mb-4 h-fit
             flex-row items-center justify-center rounded-3xl whitespace-nowrap
      border-2 border-lime-500  bg-gradient-to-b from-green-500 to-[rgba(69,26,3,.2)] p-[2rem] text-center shadow-2xl"
    >
      <p className="font-BlackOpsOne-Regular whitespace-nowrap text-3xl text-lime-400 ">
        This Region 
      </p>
      <div className="relative flex h-[30%] w-full items-center justify-center">
        <GiGorilla size={80} className="text-gray-800 sc" />
      </div>

      <p className="font-BlackOpsOne-Regular whitespace-nowrap text-3xl text-lime-400">
      Under Construction
      <hr className="hr4   " />
      </p>
      </div>
    </div>
    </div>
  );
};

export default Gorilla;
