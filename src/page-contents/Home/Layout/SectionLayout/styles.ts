import { css } from "@emotion/react";
import styled from "@emotion/styled";

const styles = {
  container: (containerSpacing?: string) => css`
    padding: ${containerSpacing || "2rem 0"};
  `,
};

export interface TitleProps {
  verticalMargin?: string;
  color?: string;
  mixBlendMode?: string;
}

export const Title = styled.h2<TitleProps>`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 900;
  text-align: center;
  letter-spacing: 1px;
  color: ${({ color }) => color || "var(--ifm-heading-color)"};
  margin: ${({ verticalMargin: margin }) => margin || "6rem auto"};
  mix-blend-mode: ${({ mixBlendMode }) => mixBlendMode || "unset"};
`;

export default styles;
