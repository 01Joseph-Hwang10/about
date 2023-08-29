import React from "react";
import { css } from "@emotion/react";
import { GradientButtonProps as GradientButtonBaseProps } from "./types";
import clsx from "clsx";
import styles from "./styles";

interface GradientButtonProps extends GradientButtonBaseProps {
  onClick?: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  onClick,
  children,
  margin,
  className,
  css: customCss = css`
    margin: ${margin || "unset"};
    ${styles.gradientButton}
  `,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx("button", className)}
      css={customCss}
    >
      {children}
    </button>
  );
};

export default GradientButton;
