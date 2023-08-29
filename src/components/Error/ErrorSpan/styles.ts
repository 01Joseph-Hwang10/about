import { css } from "@emotion/react";

const errorSpan = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const errorText = css`
  color: var(--ifm-color-danger);
  font-size: 2rem;
  text-align: center;
`;

export default {
  errorSpan,
  errorText,
};
