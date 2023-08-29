import { SerializedStyles, css } from "@emotion/react";

const parallax = css`
  z-index: -1;
  position: absolute;
  height: 400px;
  padding: 0 2rem;
`;

const word = (isDarkMode: boolean, style: SerializedStyles) => css`
  position: relative;
  color: ${isDarkMode
    ? "var(--ifm-color-secondary-darkest)"
    : "var(--ifm-color-primary-lightest)"};
  ${style}
`;

export default {
  parallax,
  word,
};
