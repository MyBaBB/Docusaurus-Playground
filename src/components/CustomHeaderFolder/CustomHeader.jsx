import React from "react";
import { SiTestinglibrary } from "react-icons/si";
import { GiSadCrab } from "react-icons/gi";
import { GiEgyptianBird } from "react-icons/gi";
import ToolBox from "../ToolBoxFolder/ToolBox";
import "../ToolBoxFolder/ToolBox.css";
import "./CustomHeader.css";
// import "../ToolBoxFolder/ToolBox.css;"
const CustomHeader = () => {
  return (
    <div>
      <div className="fixed   left-[50%] top-0 z-[200] w-[80%] translate-x-[-50%]   ">
        <div className="   relative m-auto  mt-2 flex w-[50%]  justify-between  ">
          <a href="#headerCrabBottom">
            <div
              className="dataToolTip2 font-PTSerif-Italic"
              data-tool-tip="To Bottom of the page."
            >
              <div
                className="headerCrabBottomWrapper relative z-[202] hidden
        md:inline-block   "
              >
                <GiSadCrab className="headerCrabBottom   " />
              </div>
            </div>
          </a>

          <a href="https://resume-hub.mybabb.com/">
            <div
              className="dataToolTip2  font-PTSerif-Italic"
              data-tool-tip="Back to the Portfolio Hub."
            >
              <div
                className="headerOctopusWrapper   relative z-[202]  hidden   
        md:inline-block  "
              >
                <SiTestinglibrary className="headerOctopus " />
              </div>
            </div>
          </a>

          <a href="#headerBirdTop">
            <div
              className="dataToolTip2 font-PTSerif-Italic"
              data-tool-tip="Back to the top of the page."
            >
              <div
                className="headerBirdTopWrapper  relative z-[202] hidden   
        md:inline-block "
              >
                <GiEgyptianBird className="headerBirdTop " />
              </div>
            </div>
          </a>
        </div>
      </div>

      <ToolBox />
    </div>
  );
};

export default CustomHeader;
