import React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

const HomepageHero: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <header className={clsx("hero hero--primary", styles.hero)}>
      {children}
    </header>
  );
};

export default HomepageHero;
