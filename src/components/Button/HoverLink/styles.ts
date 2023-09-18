import { css } from "@emotion/react";

const defaultStyle = css`
  transition: all var(--ifm-transition-fast)
    var(--ifm-transition-timing-default);
  &:hover {
    transform: scale(1.05);
  }
`;

export default {
  defaultStyle,
};
