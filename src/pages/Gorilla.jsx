// eslint-disable-next-line no-unused-vars
import React from "react";
import '../pages/index.module.css';
import { GiGorilla } from "react-icons/gi";
const Gorilla = () => {
  return (
    /* --------- Under Construction Gorilla -----------  */

    <div
      className="Test z-1 min-w-screen w-fit m-auto relative  mt-14 h-fit
             flex-row items-center justify-center rounded-3xl
      border-2 border-lime-500  bg-gradient-to-b from-green-500 to-[rgba(69,26,3,.2)] p-[2rem] text-center shadow-2xl"
    >
      <p className="font-BlackOpsOne-Regular whitespace-nowrap text-3xl text-lime-500">
        This Region
      </p>
      <div className="relative flex h-[30%] w-full items-center justify-center">
        <GiGorilla size={80} className="text-gray-800" />
      </div>

      <p className="font-BlackOpsOne-Regular whitespace-nowrap text-3xl text-lime-500">
        Under Construction
      </p>
    </div>
  );
};

export default Gorilla;
