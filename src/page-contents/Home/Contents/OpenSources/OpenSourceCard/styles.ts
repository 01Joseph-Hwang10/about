import { css } from "@emotion/react";
import { mobileWidth } from "@site/src/style/values";

const topicWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;
`;

const topicInner = css``;

const faTopicInner = css`
  margin-bottom: 7.5px;
`;

const cardPadding = "1rem";

const cardRippleColor = (backgroundColor: string) => css`
  &:before {
    background-color: ${backgroundColor};
  }
`;

const card = css`
  position: relative;
  border: 2px solid var(--ifm-color-secondary-contrast-foreground);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: ${cardPadding};

  @media screen and (min-width: ${mobileWidth}px) {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
  }

  overflow: hidden;

  &:before {
    border-radius: 50%;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    z-index: -2;
  }

  cursor: pointer;

  @media screen and (min-width: ${mobileWidth}px) {
    &:hover {
      &:before {
        transition: all 0.5s ease-out;
        width: 300%;
        height: 300%;
        margin-top: -100%;
        margin-right: -100%;
      }

      .repository-wrapper {
        --icon-translate: calc(50% - ${cardPadding});
        top: var(--icon-translate);
        right: var(--icon-translate);
        transform: scale(5);
        opacity: 0.25;
      }
    }
  }
`;

const repositoryWrapper = css`
  position: absolute;
  top: 1rem;
  right: 1rem;
  transition: all var(--ifm-transition-fast) ease-out;
  z-index: -1;
`;

const contentWrapper = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const title = css`
  @media screen and (max-width: ${mobileWidth}px) {
    max-width: 85%;
  }
`;

const description = css`
  font-size: 0.75rem;
  @media screen and (max-width: ${mobileWidth}px) {
    max-width: 85%;
  }
`;

const topicsContainer = css`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export default {
  topicWrapper,
  topicInner,
  faTopicInner,
  card,
  cardRippleColor,
  repositoryWrapper,
  contentWrapper,
  title,
  description,
  topicsContainer,
};
