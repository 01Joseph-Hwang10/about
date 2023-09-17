import { css } from "@emotion/react";

const link = css`
  margin-left: 1rem;
`;

const iconColor = (isDarkMode?: boolean) =>
  isDarkMode ? "var(--ifm-font-color-base)" : "var(--ifm-color-primary)";

export default {
  link,
  iconColor,
};
