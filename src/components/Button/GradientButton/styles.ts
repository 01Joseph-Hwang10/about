import { css } from "@emotion/react";

const gradientButton = css`
  color: var(--ifm-color-primary-contrast-background);
  padding: 0.5rem 1rem;
  transition: all var(--ifm-transition-fast)
    var(--ifm-transition-timing-default);

  [data-theme="dark"] & {
    color: var(--ifm-font-color-base);
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export default {
  gradientButton,
};
