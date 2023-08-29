import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import clsx from "clsx";
import styles from "./styles.module.scss";

const HomepageHero: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { colorMode } = useColorMode();
  const imageUri =
    colorMode === "dark" ? `/img/newyork-dark.jpg` : `/img/newyork-light.jpg`;

  return (
    <header
      className={clsx("hero hero--primary", styles.hero)}
      style={{
        backgroundImage: `url(${imageUri})`,
      }}
    >
      {children}
    </header>
  );
};

export default HomepageHero;
