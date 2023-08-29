import { css } from "@emotion/react";
import { mobileWidth } from "@site/src/style/values";

const iconColor = (isDarkMode?: boolean) =>
  isDarkMode
    ? "var(--ifm-font-color-base)"
    : "var(--ifm-color-primary-contrast-foreground)";

const iconColors = [
  "var(--ifm-color-primary-contrast-foreground)",
  "var(--ifm-color-primary-contrast-background)",
];

const svgIconSize = 21;

const grid = css`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;

  @media screen and (min-width: ${mobileWidth}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default {
  iconColor,
  iconColors,
  svgIconSize,
  grid,
};
