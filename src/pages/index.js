import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
 import Carousel from "../components/Carousel/Carousel";
 
import styles from "./index.module.css";
 
import Gorilla from "../components/GorillaFolder/Gorilla";
 
 
import CustomHeader from "../components/CustomHeaderFolder/CustomHeader";
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
   <>
       <CustomHeader />
         
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
       
      <div className="containerTop container ">
        
        <h1 className="homeTitle  p-4 mt-4 md:mt-0   
        font-Aclonica-Regular font-extrabold text-lime-400
          text-[19px] sm:text-[25px]  md:text-[30px]  ">
          Component Playground
        </h1>
        <h3>View your Custom Parts here</h3>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>
          < Carousel />
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
