import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HoverLink from "@site/src/components/Button/HoverLink";
import CircleBackground from "@site/src/components/CircleBackground";
import gradients from "@site/src/style/gradients";
import React from "react";
import useIsDarkMode from "@site/src/hooks/useIsDarkMode";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface GithubLinkProps {
  url: string;
}

const GithubLink: React.FC<GithubLinkProps> = ({ url }) => {
  const isDarkMode = useIsDarkMode();
  return (
    <HoverLink href={url}>
      {(onHover) => (
        <CircleBackground
          size="2.5rem"
          linearGradient={gradients.primary(onHover ? 134 : -134)}
        >
          <FontAwesomeIcon
            size="xl"
            color={
              isDarkMode
                ? "var(--ifm-font-color-base)"
                : "var(--ifm-color-primary-contrast-background)"
            }
            icon={faGithub}
          />
        </CircleBackground>
      )}
    </HoverLink>
  );
};

export default GithubLink;
