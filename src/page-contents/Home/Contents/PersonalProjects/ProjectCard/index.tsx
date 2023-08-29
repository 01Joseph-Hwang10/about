import React from "react";
import {
  truncate,
  variableishToSpacedPascal,
} from "@site/src/utils/stringUtils";
import { GradientLink } from "@site/src/components/Button/GradientButton";
import styles from "./styles";
import utils from "./utils";
import useIsMobile from "@site/src/hooks/useIsMobile";
import { GithubRepo } from "@site/src/api/get-repos";
import GithubLink from "@site/src/components/Button/GithubLink";

interface ProjectCardProps {
  node: GithubRepo;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ node }) => {
  const isMobile = useIsMobile();
  return (
    <div className="card" css={styles.card}>
      <div css={styles.contents}>
        <h3 css={styles.title}>{variableishToSpacedPascal(node.name)}</h3>
        <p css={styles.description}>
          {truncate(node.description, isMobile ? 150 : 120)}
        </p>
      </div>
      <div css={styles.actions}>
        {!!node.homepage && (
          <GradientLink href={node.homepage} margin="0 1rem 0 0">
            {utils.getHomepageButtonText(node.homepage)}
          </GradientLink>
        )}
        <GithubLink url={node.html_url} />
      </div>
    </div>
  );
};

export default ProjectCard;
