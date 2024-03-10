import { css } from "@emotion/react";

const majorStackContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0;
`;

const moreStacksContainer = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 2.5rem;
`;

export default {
  majorStackContainer,
  moreStacksContainer,
};
