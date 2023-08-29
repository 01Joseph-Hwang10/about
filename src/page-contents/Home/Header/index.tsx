import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageHero from "./Hero";
import personal from "@site/config/values/personal";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.scss";
import clsx from "clsx";

const HomepageHeader: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <HomepageHero>
      <div className="container">
        <h1 className={clsx("hero__title", styles.text, styles.title)}>
          {siteConfig.tagline}
        </h1>
        <p className={clsx("hero__subtitle", styles.text, styles.subtitle)}>
          {personal.tagline}
        </p>
        <div className={styles.buttonWrapper}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/%EC%9D%B4%EB%A0%A5%EC%84%9C"
          >
            {translate({
              id: "pages.Home.Header.button.text",
              message: "이력서 내려받기",
            })}
          </Link>
        </div>
      </div>
    </HomepageHero>
  );
};

export default HomepageHeader;
