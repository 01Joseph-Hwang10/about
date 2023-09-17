import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./styles";
import clsx from "clsx";
import useIsDarkMode from "@site/src/hooks/useIsDarkMode";

export interface ProjectTitleProps {
  title: string;
  link: string;
}

const ProjectTitle: React.FC<ProjectTitleProps> = ({ title, link }) => {
  const isDarkMode = useIsDarkMode();
  return (
    <h3
      className={clsx(
        "anchor",
        "anchorWithStickyNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module",
      )}
      css={styles.heading}
    >
      {title}
      <a href={link} target="_blank" rel="noreferrer" css={styles.link}>
        <FontAwesomeIcon
          color={styles.iconColor(isDarkMode)}
          icon={faArrowUpRightFromSquare}
        />
      </a>
    </h3>
  );
};

export default ProjectTitle;
