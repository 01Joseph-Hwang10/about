import { css } from "@emotion/react";
import styled from "@emotion/styled";

const figure = css`
  margin-bottom: 1rem;
`;

export const FlatImage = styled.img`
  width: 100%;
`;

export const ElevatedImage = styled.img`
  border-radius: 0.5rem;
  box-shadow: var(--ifm-global-shadow-lw);
`;

export default {
  figure,
};
