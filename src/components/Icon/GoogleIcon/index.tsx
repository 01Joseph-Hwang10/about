import { css } from "@emotion/react";
import React from "react";

interface GoogleIconProps {
  name: string;
  color?: string;
  linearGradient?: string;
  size?: string;
  /** @description Indicates whether to fill or to not fill the icon */
  fill?: boolean;
  /**
   * @description
   * Font weight of the icon.
   * Can have one of the following values:
   * 100, 200, 300, 400, 500, 600, 700
   */
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  /**
   * @description
   * Grade of the icon.
   * Can have one of the following values:
   * - -25: Low emphasis
   * - 0: Default emphasis
   * - 200: High emphasis
   */
  grade?: -25 | 0 | 200;
  /**
   * @description
   * Optical size of the icon.
   * Can have one of the following values:
   * - 20: Tiny
   * - 24: Small
   * - 40: Default
   * - 48: Large
   */
  opticalSize?: 20 | 24 | 40 | 48;
}

/**
 * @description
 * GoogleIcon component provided by Google Fonts.
 *
 * @see https://fonts.google.com/icons?icon.style=Rounded
 */
const GoogleIcon: React.FC<GoogleIconProps> = ({
  name,
  size = "1rem",
  fill = true,
  weight = 400,
  grade = 0,
  opticalSize = 40,
  linearGradient,
  color = linearGradient
    ? null
    : "var(--ifm-color-primary-contrast-foreground)",
}) => {
  return (
    <span
      className="material-symbols-rounded google-icon"
      css={css`
        color: ${color};
        background: ${linearGradient};
        font-size: ${size} !important;
        font-variation-settings:
          "FILL" ${Number(fill)},
          "wght" ${weight},
          "GRAD" ${grade},
          "opsz" ${opticalSize};
      `}
    >
      {name}
    </span>
  );
};

export default GoogleIcon;
