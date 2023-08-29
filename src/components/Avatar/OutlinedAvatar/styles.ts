import { css } from "@emotion/react";

const wrapper = (size: string) => css`
  max-width: ${size};
  max-height: ${size};
`;

const image = (border?: string) => css`
  width: 100%;
  height: 100%;
  border: ${border || "5px solid white"};
`;

export default {
  wrapper,
  image,
};
