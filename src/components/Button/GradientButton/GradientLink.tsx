import { css } from "@emotion/react";
import React from "react";
import styles from "./styles";
import { GradientButtonProps } from "./types";
import clsx from "clsx";
import gradients from "@site/src/style/gradients";

interface GradientLinkProps extends GradientButtonProps {
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

const GradientLink: React.FC<GradientLinkProps> = ({
  href,
  children,
  margin,
  className,
  target = "_blank",
  rel = "noreferrer",
  css: customCss = css`
    ${styles.gradientButton}
    margin: ${margin || "unset"};
    background: ${gradients.primary(-134)};
    &:hover {
      background: ${gradients.primary(134)};
    }
  `,
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={clsx("button", className)}
      css={customCss}
    >
      {children}
    </a>
  );
};

export default GradientLink;
