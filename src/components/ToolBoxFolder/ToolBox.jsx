// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { PiNotepadFill } from "react-icons/pi";
import { GrContact } from "react-icons/gr";
import { GiFlatPawPrint } from "react-icons/gi";
import { IoConstructOutline } from "react-icons/io5";
import { LiaUserSecretSolid } from "react-icons/lia";
import { RiContactsLine } from "react-icons/ri"; 
import { PiBriefcaseDuotone } from "react-icons/pi";
import { RiGithubLine } from "react-icons/ri";
import { LiaInfoSolid } from "react-icons/lia";

import "./ToolBox.css";

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="toolBoxMedia absolute    left-[85%] lg:left-[90%]  translate-x-[-50%]  
          
     top-[5.5rem] md:top-[6.5rem]   z-10"
    >
      <div className="tools relative flex h-[40px] w-[150px] flex-col items-center rounded-lg">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="directoryTop flex w-full items-center justify-between rounded-lg outline-[1px] 
          border-transparent bg-[#24558d] p-0 py-2 text-center font-ArchivoBlack-Regular 
          text-lg font-bold tracking-wider text-blue-200 duration-300
           hover:bg-opacity-20 active:border-white active:text-white"
        >
          &nbsp;&nbsp;Directory
          {isOpen ? (
            <AiOutlineCaretUp className="h-8  text-green-400 mr-2" />
          ) : (
            <AiOutlineCaretDown className="h-8 text-green-400 mr-2" />
          )}
        </button>
                            {/* animate-open-menu is in custom tailwind.config file */}
        {isOpen && (
          <div                   
            className="openDrawer origin-top animate-open-menu absolute top-[3.05rem] flex w-full flex-col items-start 
          rounded-lg bg-[#24558d] py-2 px-2 text-blue-200"
          >
           
          
              <div className=" outerOpenDrawer z-[0]  my-3   ">
              <div onClick={() => setIsOpen((prev) => !prev)}
                className=" "
             
              >
                

                <a href="https://mybabb.com/index.html#contact " target="_blank"  rel="noopener noreferrer">
                  <div  className="toolBoxDrawers  relative flex pl-2 w-full cursor-pointer flex-row  justify-between 
                  rounded-r-lg bg-gray-800 pr-2 pt-2 pb-3 my-2 border-l-2   border-l-transparent
                 hover:border-l-green-400 hover:bg-[#0173ac] "
                  >
                    <h3 className="font-bold">Contact Me</h3>
                    <span>< RiContactsLine size={20} /></span>
                  </div>
                </a>


                <a href="https://resume-hub.mybabb.com/" target="_blank"  rel="noopener noreferrer">
                  <div
                   className="toolBoxDrawers   relative flex pl-2 w-full cursor-pointer flex-row  justify-between 
                   rounded-r-lg bg-gray-800 pr-2 pt-2 pb-3 my-2 border-l-2   border-l-transparent
                  hover:border-l-green-400 hover:bg-[#0173ac]"
                  >
                    <h3 className="font-bold ">Resume</h3>
                    <span>< PiBriefcaseDuotone size={20} /></span>
                  </div>
                </a>
                <a href="https://github.com/MyBaBB " target="_blank"  rel="noopener noreferrer">
                  <div className="toolBoxDrawers  relative flex pl-2 w-full cursor-pointer flex-row  justify-between 
                  rounded-r-lg bg-gray-800 pr-2 pt-2 pb-3 my-2 border-l-2   border-l-transparent
                 hover:border-l-green-400 hover:bg-[#0173ac]"
                  >
                    <h3 className="font-bold">GitHub</h3>
                    <span><RiGithubLine  size={20} /></span>
                  </div>
                </a>
                <a href="https://mybabb.github.io/About_MyBaBB/ " target="_blank"  rel="noopener noreferrer">
                  <div  className="toolBoxDrawers  relative flex pl-2 w-full cursor-pointer flex-row  justify-between 
                  rounded-r-lg bg-gray-800 pr-2 pt-2 pb-3 my-2 border-l-2   border-l-transparent
                 hover:border-l-green-400 hover:bg-[#0173ac]"
                  >
                    <h3 className="font-bold">About Us</h3>
                    <span><LiaInfoSolid size={20} /></span>
                  </div>
                </a>

                
              </div>
              </div>
           
          </div>
        )}
      </div>
    </div>
  );
}

export default DropDown;
