import React, { useEffect } from "react";
import clsx from "clsx";
// @ts-ignore
import styles from "./styles.module.scss";
import useIsDarkMode from "@site/src/hooks/useIsDarkMode";

const HomepageHero: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isDarkMode = useIsDarkMode();

  useEffect(() => {
    const header = document.getElementById("homepage-hero");
    header.style.backgroundImage = isDarkMode
      ? `url("/img/newyork-dark.jpg")`
      : `url("/img/newyork-light.jpg")`;
  }, [isDarkMode]);

  return (
    <header
      id="homepage-hero"
      className={clsx("hero hero--primary", styles.hero)}
    >
      {children}
    </header>
  );
};

export default HomepageHero;
