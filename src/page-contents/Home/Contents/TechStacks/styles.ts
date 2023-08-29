import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mobileWidth } from "@site/src/style/values";

const stackContainer = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: ${mobileWidth}px) {
    // 3n is arbitrary value actually.
    // Need to choose more reasonable value
    .stack-item:nth-child(3n) {
      flex-basis: 100%;
    }
  }
`;

const stackItem = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: transform var(--ifm-transition-fast)
    var(--ifm-transition-timing-default);

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    .stack-name {
      opacity: 1;
    }
  }
`;

interface StackNameProps {
  stack: string;
  focusedStack: string;
  isDarkMode?: boolean;
}

export const StackName = styled.p<StackNameProps>`
  transition: opacity var(--ifm-transition-fast)
    var(--ifm-transition-timing-default);
  opacity: ${({ focusedStack, stack }) => (focusedStack === stack ? 1 : 0)};
  text-align: center;
  white-space: nowrap;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ isDarkMode }) =>
    isDarkMode ? "var(--ifm-font-color-base)" : "var(--ifm-color-primary)"};

  @media screen and (min-width: ${mobileWidth}px) {
    font-size: 1rem;
  }
`;

export default {
  stackContainer,
  stackItem,
};
