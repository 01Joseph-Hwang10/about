import { css } from "@emotion/react";
import styled from "@emotion/styled";

const inline = css`
  display: inline;
`;

const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface CircleBackgroundBodyProps {
  size: string;
  color?: string;
  linearGradient?: string;
}

export const CircleBackgroundBody = styled.div<CircleBackgroundBodyProps>`
  display: flex;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  justify-content: center;
  align-items: center;
  background: ${({ linearGradient }) => linearGradient};
  background-color: ${({ color }) => color};
  border-radius: 50%;
`;

export default {
  inline,
  flex,
};
