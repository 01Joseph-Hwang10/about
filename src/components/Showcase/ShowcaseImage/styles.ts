import { css } from "@emotion/react";

const background = css`
  position: relative;
  background-color: var(--ifm-background-surface-color);
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid var(--ifm-color-emphasis-300);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: blur(5px) saturate(0.5);
  }
`;

const placeholderIcon = css`
  --logo-size: 5rem;
  --logo-displacement: calc(50% - var(--logo-size) / 2);
  width: var(--logo-size);
  height: var(--logo-size);
  position: absolute;
  top: var(--logo-displacement);
  left: var(--logo-displacement);
  z-index: 1;
`;

const imageFit = css`
  overflow: hidden;
  z-index: 2;
  width: auto;
  max-height: 100%;
  max-width: 100%;
`;

const imageFull = css`
  ${imageFit}
  width: 100%;
  height: 100%;
`;

export default {
  background,
  placeholderIcon,
  imageFit,
  imageFull,
};
