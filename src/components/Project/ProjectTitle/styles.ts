import { css } from "@emotion/react";

const heading = css`
  margin: 2rem 0 0 0;
`;

const link = css`
  margin-left: 1rem;
`;

const iconColor = (isDarkMode?: boolean) =>
  isDarkMode ? "var(--ifm-font-color-base)" : "var(--ifm-color-primary)";

export default {
  heading,
  link,
  iconColor,
};
