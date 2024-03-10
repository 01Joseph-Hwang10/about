import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const iconSize = 32;

const container = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 2.5rem 0 2.5rem;
`;

const iconWrapper = css`
  margin: 0.25rem 0.35rem;
  min-width: ${iconSize}px;
  min-height: ${iconSize}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface IconProps {
  isDarkMode?: boolean;
  highlight?: boolean;
}

export const getMonotoneIconColor = (props?: IconProps) => {
  const { isDarkMode, highlight } = props || {};
  if (highlight) {
    return "var(--ifm-color-primary-contrast-foreground)";
  } else {
    return isDarkMode
      ? "var(--ifm-color-secondary-contrast-background)"
      : "var(--ifm-color-secondary-dark)";
  }
};

export const getDuotoneIconColors = (props?: IconProps) => {
  const { isDarkMode, highlight } = props || {};
  if (highlight) {
    return [
      "var(--ifm-color-primary-contrast-foreground)",
      "var(--ifm-color-primary-contrast-background)",
    ];
  } else {
    return isDarkMode
      ? [
          "var(--ifm-color-secondary-contrast-background)",
          "var(--ifm-color-secondary-contrast-foreground)",
        ]
      : ["var(--ifm-color-secondary-dark)", "var(--ifm-color-secondary-light)"];
  }
};

export const DevIcon = styled.i<IconProps>`
  color: ${(props) => getMonotoneIconColor(props)};
  font-size: ${iconSize}px;
`;

export default {
  iconSize,
  container,
  iconWrapper,
};
