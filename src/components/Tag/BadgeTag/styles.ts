import styled from "@emotion/styled";

export interface BadgeProps {
  color: string;
  textColor?: string;
  margin?: string;
  fontSize?: string;
}

export const Badge = styled.span<BadgeProps>`
  --badge-font-size: ${({ fontSize }) => fontSize || "0.75rem"};
  margin: ${({ margin }) => margin || "inherit"};
  background-color: ${({ color }) => color};
  color: ${({ textColor }) => textColor || "inherit"};
  display: inline-block;
  border: var(--ifm-badge-border-width) solid var(--ifm-badge-border-color);
  border-radius: var(--ifm-badge-border-radius);
  font-weight: var(--ifm-font-weight-bold);
  line-height: 1;
  font-size: var(--badge-font-size);
  padding: calc(var(--badge-font-size) * 0.25)
    calc(var(--badge-font-size) * 0.5);
`;
