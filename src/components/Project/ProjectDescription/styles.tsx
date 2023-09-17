import { css } from "@emotion/react";
import clsx from "clsx";
import React from "react";

interface StyledProps {
  className?: string;
  children?: React.ReactNode;
}

const markdownWrapper = css`
  p {
    margin: 0.5rem 0;
  }
`;

export const AdmonitionHeading: React.FC<StyledProps> = ({
  className,
  children,
}) => (
  <div
    className={clsx(
      className,
      "admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module",
    )}
  >
    {children}
  </div>
);

export const AdmonitionIcon: React.FC<StyledProps> = ({
  className,
  children,
}) => (
  <span
    className={clsx(
      className,
      "admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module",
    )}
  >
    {children}
  </span>
);

export const AdmonitionNote: React.FC<StyledProps> = ({
  className,
  children,
}) => (
  <div
    className={clsx(
      className,
      "theme-admonition theme-admonition-note alert alert--secondary admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module",
    )}
  >
    {children}
  </div>
);

export const AdmonitionContent: React.FC<StyledProps> = ({
  className,
  children,
}) => (
  <div
    className={clsx(
      className,
      "admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module",
    )}
  >
    {children}
  </div>
);

export default {
  markdownWrapper,
};
