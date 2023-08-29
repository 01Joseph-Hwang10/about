import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mobileWidth } from "@site/src/style/values";

const container = (navbarHeight?: number) => css`
  padding: 0.5rem 0;
  position: sticky;
  top: ${navbarHeight}px;
  background-color: var(--ifm-color-background);
  z-index: var(--ifm-z-index-fixed);
`;

export const Pills = styled.ul`
  display: flex;
  @media screen and (max-width: ${mobileWidth}px) {
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: scroll;
  }
`;

export const PillItem = styled.li`
  white-space: nowrap;
`;

export default {
  container,
};
