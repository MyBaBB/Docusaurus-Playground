// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../pages/index.module.css";
import GorillaSVG from "./Gorilla-Img-Folder/pissedGorillaTrasny13.svg";
import "./Gorilla.css";
import Gorilla2Banana from "./Gorilla-Img-Folder/Gorilla2WithBanana100px.png";
import BananaTree from ".//Gorilla-Img-Folder/BananaTree2.png";
 
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
          <div className="relative flex justify-center content-center mt-4    h-[100px] w-full">
            
 <GorillaSVG  />
             
          </div>
          <p className="mt-5 whitespace-nowrap font-BlackOpsOne-Regular text-3xl text-lime-400">
            Under Construction
            <hr className="hr4   " />
            <div className="GorillaTest mt-12">
             
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gorilla;
