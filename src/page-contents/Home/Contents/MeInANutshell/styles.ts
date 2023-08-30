import { css } from "@emotion/react";
import styled from "@emotion/styled";
import gradients from "@site/src/style/gradients";
import React from "react";

const header = css`
  margin: 0.5rem 0;
`;

const title = css`
  text-align: center;
  font-weight: 400;
  color: var(--ifm-color-primary);

  [data-theme="dark"] & {
    color: var(--ifm-font-color-base);
  }
`;

const description = css`
  text-align: center;
  font-size: 0.8rem;
  word-break: keep-all;
`;

const nutshell = {
  gradient: gradients.primary(),
};

const gridContainerDesktop = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10%;
`;

const gridContainerMobile = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5%;
`;

export const GridItem = styled.div<{ children?: React.ReactNode }>`
  padding: 1rem;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: var(--ifm-global-shadow-lw);
  overflow: visible;
  transition: all var(--ifm-transition-fast)
    var(--ifm-transition-timing-default);

  &:hover {
    box-shadow: var(--ifm-global-shadow-md);
    transform: scale(1.05);
  }
`;

export default {
  header,
  title,
  description,
  nutshell,
  gridContainerDesktop,
  gridContainerMobile,
};
