import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
 
import Heading from "@theme/Heading";
import styles from "./index.module.css";
 
import Gorilla from "./Gorilla.jsx";
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="homeTitle p-4 font-Wallpoet text-sm xxs:text-[19px] xs:text-[24px] sm:text-[35px] font-extrabold text-lime-200 whitespace-nowrap ">
          Component Playground
            
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>< Gorilla /></div>
        <div className='buttonTrial p-4   text-[12px] xs:text-[20px] whitespace-nowrap'>
          <Link to="/docs/intro">Docusaurus Tutorial - 5min ⏱️</Link>
        </div>
        
      </div>
    </header>
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
