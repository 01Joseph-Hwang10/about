import React from "react";
import { ProjectLink as IProjectLink } from "../../types";
import styles from "./styles";
import ProjectLink from "../ProjectLink";

interface ProjectLinksProps {
  links: IProjectLink[];
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ links }) => {
  return (
    <div css={styles.container}>
      {links.map((link, index) => (
        <ProjectLink key={`project-showcase__link--${index}`} link={link} />
      ))}
    </div>
  );
};

export default ProjectLinks;
