import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
 
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import ToolBox from "../components/ToolBoxFolder/ToolBox";
import Gorilla from "../components/GorillaFolder/Gorilla";
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
   <>
      <ToolBox />   
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
       
      <div className="containerTop container ">
        
        <h1 className="homeTitle whitespace-nowrap p-4 mt-4 sm:mt-4   
        font-PermanentMarker-Regular text-sm font-extrabold text-lime-400
         xxs:text-[19px] xs:text-[24px] sm:text-[35px] ">
          Component Playground
        </h1>
        <p className="hero__subtitle ">{siteConfig.tagline}</p>
        <div>
          <Gorilla />
        </div>
        <div className="buttonTrial  p-4  text-[12px] font-Aclonica-Regular text-white xs:text-[20px]">
          <Link to="/">This is where I Design Custom parts for a Documentary Style Website.</Link>
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
