import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mobileWidth } from "@site/src/style/values";

const header = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const subtitleWrapper = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const CareerSubtitle = styled.h2<CareerTitleProps>`
  color: var(--ifm-color-primary-dark);
  [data-theme="dark"] & {
    color: var(--ifm-color-primary-light);
  }
  font-weight: 400;
  font-size: ${({ emphasize }) => (emphasize ? "1.25rem" : "1rem")};
  @media screen and (min-width: ${mobileWidth}px) {
    font-size: ${({ emphasize }) => (emphasize ? "1.5rem" : "1.25rem")};
  }
`;

export const CareerPeriod = styled.h3<CareerTitleProps>`
  font-size: ${({ emphasize }) => (emphasize ? "1rem" : "0.75rem")};
  @media screen and (min-width: ${mobileWidth}px) {
    font-size: ${({ emphasize }) => (emphasize ? "1.5rem" : "1.25rem")};
  }
`;

const body = css`
  width: 100%;
`;

export interface DetailEntryProps {
  dense?: boolean;
  marginLeft?: string;
  marginRight?: string;
}

export const DetailEntry = styled.li<DetailEntryProps>`
  /* color: var(--ifm-font-color-base); */
  color: var(--ifm-color-secondary-contrast-foreground);
  font-weight: 400;
  list-style-position: outside;
  line-height: 1.5;
  word-spacing: ${({ dense }) => (dense ? "unset" : "5px")};
  margin-top: ${({ dense }) => (dense ? "0" : "var(--ifm-heading-margin-top)")};
  margin-bottom: ${({ dense }) =>
    dense ? "0" : "var(--ifm-heading-margin-bottom)"};
  margin-left: ${({ marginLeft }) => marginLeft || "0"};
  margin-right: ${({ marginRight }) => marginRight || "0"};
  font-size: ${({ dense }) => (dense ? "0.75rem" : "1rem")};
  @media screen and (min-width: ${mobileWidth}px) {
    font-size: ${({ dense }) => (dense ? "1rem" : "1.25rem")};
  }
`;

const detailEntryWrapper = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export interface CareerContainerProps {
  divider?: boolean;
  padding?: string;
  cursorPointer?: boolean;
}

export const CareerContainer = styled.div<CareerContainerProps>`
  border-top: ${({ divider }) =>
    divider ? "2px solid var(--ifm-toc-border-color)" : "0"};
  padding: ${({ padding }) => padding || "3rem 0"};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: ${({ cursorPointer }) => (cursorPointer ? "pointer" : "unset")};
`;

export interface CareerTitleProps {
  emphasize?: boolean;
}

export const CareerTitle = styled.h2<CareerTitleProps>`
  --ifm-heading-color: var(--ifm-color-primary-contrast-foreground);

  font-weight: 700;
  line-height: 1;
  font-size: ${({ emphasize }) => (emphasize ? "2rem" : "1.5rem")};
  @media screen and (min-width: ${mobileWidth}px) {
    line-height: var(--ifm-heading-line-height);
    font-size: ${({ emphasize }) => (emphasize ? "2.5rem" : "2rem")};
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default {
  header,
  subtitleWrapper,
  body,
  detailEntryWrapper,
};
