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
      className="toolBoxMedia absolute    left-[85%] top-[5.5rem]  z-10  
          
     translate-x-[-50%] md:top-[6.5rem]   lg:left-[90%]"
    >
      <div className="tools relative flex h-[40px] w-[150px] flex-col items-center rounded-lg">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="directoryTop flex w-full items-center justify-between rounded-lg border-transparent 
          bg-[#24558d] p-0 py-2 text-center font-ArchivoBlack-Regular text-lg 
          font-bold tracking-wider text-blue-100 outline-[1px] duration-300
           hover:bg-opacity-20 active:border-white active:text-white"
        >
          &nbsp;&nbsp;Directory
          {isOpen ? (
            <AiOutlineCaretUp className="mr-2  h-8 text-green-400" />
          ) : (
            <AiOutlineCaretDown className="mr-2 h-8 text-green-400" />
          )}
        </button>
        {/* animate-open-menu is in custom tailwind.config file */}
        {isOpen && (
          <div
            className="openDrawer animate-open-menu absolute top-[3.05rem] flex w-full origin-top flex-col items-start 
          rounded-lg bg-[#24558d] px-2 py-2 text-blue-200"
          >
            <div className=" outerOpenDrawer z-[0]  my-3   ">
              <div onClick={() => setIsOpen((prev) => !prev)} className=" ">
                <a
                  href="https://mybabb.com/index.html#contact "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="toolBoxDrawers bg-gray-800
                                 hover:border-l-green-400 hover:bg-[#0173ac] hover:text-white"
                  >
                    <h3 className="font-bold">Contact Me</h3>
                    <span>
                      <RiContactsLine size={20} />
                    </span>
                  </div>
                </a>

                <a
                  href="https://resume-hub.mybabb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="toolBoxDrawers bg-gray-800
                                 hover:border-l-green-400 hover:bg-[#0173ac] hover:text-white"
                  >
                    <h3 className="font-bold ">Resume</h3>
                    <span>
                      <PiBriefcaseDuotone size={20} />
                    </span>
                  </div>
                </a>
                <a
                  href="https://github.com/MyBaBB "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="toolBoxDrawers bg-gray-800
                                 hover:border-l-green-400 hover:bg-[#0173ac] hover:text-white"
                  >
                    <h3 className="font-bold">GitHub</h3>
                    <span>
                      <RiGithubLine size={20} />
                    </span>
                  </div>
                </a>
                <a
                  href="https://mybabb.github.io/About_MyBaBB/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="toolBoxDrawers bg-gray-800
                                 hover:border-l-green-400 hover:bg-[#0173ac] hover:text-white"
                  >
                    <h3 className="font-bold">About Us</h3>
                    <span>
                      <LiaInfoSolid size={20} />
                    </span>
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
