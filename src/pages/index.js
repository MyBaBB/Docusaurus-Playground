import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { SiTestinglibrary } from "react-icons/si";
// import Heading from "@theme/Heading";
import styles from "./index.module.css";
import ToolBox from "../components/ToolBoxFolder/ToolBox";
import Gorilla from "../components/GorillaFolder/Gorilla";
import { GiGorilla } from "react-icons/gi";
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
   <>
       <a href="https://resume-hub.mybabb.com/">
      <div className="headerOctopusWrapper hidden lg:block fixed top-3 right-[10rem]
        z-[200]  w-8 h-8 ">
       <SiTestinglibrary size={40} className="text-amber-700" />      
      </div>
      </a>
      <a href="#headerGorillaBottom">
      <div className="headerGorillaBottom  fixed 
        z-[200]  w-8 h-8 ">
       <GiGorilla size={45} className="text-amber-700" />      
      </div>
      </a>
       <a href="#headerGorillaTop">
      <div className="headerGorillaTop    
        z-[200]  w-8 h-8 ">
       <GiGorilla size={45} className="text-amber-700" />      
      </div>
      </a>
       
      <ToolBox />   
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
       
      <div className="containerTop container ">
        
        <h1 className="homeTitle  p-4 mt-4 md:mt-0   
        font-PermanentMarker-Regular text-[20px] font-extrabold text-lime-400
         xxs:text-[19px] xs:text-[24px]  ">
          Component Playground
        </h1>
        <h3>View your Custom Parts here</h3>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>
          <Gorilla />
        </div>
        <div className="buttonTrial  p-4  text-[12px] font-Aclonica-Regular text-white xs:text-[20px]">
          This is where I Design Custom parts for a Documentary Style Website. 
        </div>
      </div>
    </header>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    //  Layout Takes out the whole header

    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
