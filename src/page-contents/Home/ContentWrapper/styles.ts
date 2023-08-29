import { css } from "@emotion/react";
import { mobileWidth } from "@site/src/style/values";

const main = css`
  @media screen and (min-width: ${mobileWidth}px) {
    max-width: 90%;
    margin: 0 auto;
  }
`;

export default {
  main,
};
