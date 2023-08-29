import React from "react";
import values from "../../values";
import gradientButtonStyles from "@site/src/components/Button/GradientButton/styles";
import GithubLink from "@site/src/components/Button/GithubLink";
import { GradientLink } from "@site/src/components/Button/GradientButton";
import { css } from "@emotion/react";
import gradients from "@site/src/style/gradients";
import { ProjectLink as IProjectLink } from "../../types";

interface ProjectLinkProps {
  link: IProjectLink;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ link }) => {
  if (link.type === "github") {
    return <GithubLink url={link.url} />;
  } else if (link.type === "career-description") {
    return (
      <GradientLink
        href={link.url}
        target="_self"
        css={css`
          ${gradientButtonStyles.gradientButton}
          color: var(--ifm-color-emphasis-0);
          [data-theme="dark"] & {
            color: var(--ifm-color-info-contrast-foreground);
          }
          background: ${gradients.info(-134)};
          &:hover {
            background: ${gradients.info(134)};
          }
        `}
      >
        {values.titleOfLinkType[link.type]}
      </GradientLink>
    );
  } else if (link.type === "live-demo") {
    return (
      <GradientLink href={link.url}>
        {values.titleOfLinkType[link.type]}
      </GradientLink>
    );
  } else {
    throw new Error(`Unknown link type: ${link.type}`);
  }
};

export default ProjectLink;
