import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mobileWidth } from "@site/src/style/values";

const grid = css`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: ${mobileWidth}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const content = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const title = css`
  --ifm-heading-color: var(--ifm-font-color-base);
  margin-bottom: 1rem;
  word-break: keep-all;
`;

const tagWrapper = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  word-break: keep-all;
`;

const tag = css`
  margin-right: 0.5rem;
  margin-top: 0.5rem;
`;

interface SkillCardWrapperProps {
  isDarkMode?: boolean;
  cursorPointer?: boolean;
}

export const SkillCardWrapper = styled.div<SkillCardWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;
  cursor: ${({ cursorPointer }) => (cursorPointer ? "pointer" : "default")};
  background-color: ${({ isDarkMode }) =>
    isDarkMode
      ? "var(--ifm-background-surface-color)"
      : "var(--ifm-color-secondary-lightest)"};
  @media screen and (min-width: ${mobileWidth}px) {
    aspect-ratio: 2;
    height: 100%;
    width: 100%;
  }
  transition: background-color var(--ifm-transition-fast)
    var(--ifm-transition-timing-default);

  &:hover {
    background-color: ${({ isDarkMode }) =>
      isDarkMode
        ? "var(--ifm-color-secondary-contrast-background)"
        : "var(--ifm-color-secondary)"};
  }
`;

export default {
  grid,
  content,
  title,
  tagWrapper,
  tag,
};
