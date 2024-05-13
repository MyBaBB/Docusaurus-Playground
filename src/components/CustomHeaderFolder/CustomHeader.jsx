import React from 'react'
import { SiTestinglibrary } from "react-icons/si";
import { GiSadCrab } from "react-icons/gi";
import { GiEgyptianBird } from "react-icons/gi";
import ToolBox from "../ToolBoxFolder/ToolBox";
import "../ToolBoxFolder/ToolBox.css"
import "./CustomHeader.css"
// import "../ToolBoxFolder/ToolBox.css;"
const CustomHeader = () => {
  return (
    <div>
       
      <div className="z-[200]   fixed top-0 w-[80%] left-[50%] translate-x-[-50%]   ">
    <div className="   relative flex  justify-between w-[50%] m-auto  mt-2  ">
      
      <a href="#headerCrabBottom">
      <div
                className="dataToolTip2 font-PTSerif-Italic"
                data-tool-tip="To Bottom of the page."
              >
      <div className="headerCrabBottomWrapper relative hidden md:inline-block
        z-[202]   ">
       <GiSadCrab   className="headerCrabBottom   " />      
      </div>
      </div>
      </a>

      
      <a href="https://resume-hub.mybabb.com/">
      <div
                className="dataToolTip2  font-PTSerif-Italic"
                data-tool-tip="Back to the Portfolio Hub."
              >
      <div className="headerOctopusWrapper   hidden md:inline-block  relative   
        z-[202]  ">
       <SiTestinglibrary  className="headerOctopus " />      
      </div>
      </div>
      </a>

      <a href="#headerBirdTop">
      <div
                className="dataToolTip2 font-PTSerif-Italic"
                data-tool-tip="Back to the top of the page."
              >
      <div className="headerBirdTopWrapper  relative hidden md:inline-block   
        z-[202] ">
       <GiEgyptianBird   className="headerBirdTop " />      
      </div>
      </div>
      
      </a>
     
      </div  >
    
      </div  >

      <ToolBox />











    </div>
  )
}

export default CustomHeader
