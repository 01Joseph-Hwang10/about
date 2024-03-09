import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mobileWidth } from "@site/src/style/values";

export const ContactCardContainer = styled.div`
  width: 100%;
  @media screen and (min-width: ${mobileWidth}px) {
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
  }
`;

export const ContactIconWrapper = styled.div`
  width: 100%;

  padding: 1rem;
  @media screen and (min-width: ${mobileWidth}px) {
    padding: 1rem 1rem 0 1rem;
  }
`;

export const ContactTitle = styled.h2<{ isDarkMode?: boolean }>`
  color: ${({ isDarkMode }) =>
    isDarkMode
      ? "var(--ifm-font-color-base)"
      : "var(--ifm-color-secondary-contrast-foreground)"};
  padding: 0 1rem;
  word-break: keep-all;
  margin: 0;
  @media screen and (min-width: ${mobileWidth}px) {
    margin: 2rem 0;
  }
`;

export const ContactDescription = styled.p`
  font-size: 0.75rem;
  word-break: keep-all;
  color: var(--ifm-color-secondary-darkest);
  padding: 0 1rem;
`;

export const ContactInfo = styled.h3`
  font-weight: 400;
  word-break: keep-all;
  --ifm-heading-color: var(--ifm-color-info);
  padding: 0 1rem;
`;

const button = css`
  width: 100%;
`;

const contentWrapper = css`
  width: 100%;
`;

const cardWrapper = css`
  align-items: center;
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (min-width: ${mobileWidth}px) {
    padding: 0 6rem 6rem 6rem;
  }
`;

const card = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default {
  button,
  contentWrapper,
  cardWrapper,
  card,
};
