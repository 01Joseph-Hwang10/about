import styled from "@emotion/styled";
import gradients from "@site/src/style/gradients";

interface PaintBackgroundProps {
  isDarkMode?: boolean;
  /**
   * @description SkewY in degrees
   */
  skewY?: number;
  background?: string;
  height?: string;
  margin?: string;
}

const getSkewY = ({ skewY }: PaintBackgroundProps) => `${skewY || 0}deg`;

const getBackground = ({ isDarkMode, background }: PaintBackgroundProps) => {
  if (background) return background;
  return isDarkMode
    ? "var(--ifm-color-secondary-contrast-background)"
    : gradients.primary();
};

const PaintBackground = styled.div<PaintBackgroundProps>`
  position: absolute;
  left: 0;
  margin: ${({ margin }) => margin || "unset"};
  width: 100%;
  min-height: 500px;
  height: ${({ height }) => height || "unset"};
  background: ${(props) => getBackground(props)};
  transition: background var(--ifm-transition-fast)
    var(--ifm-transition-timing-default);
  transform: skewY(${(props) => getSkewY(props)});
  z-index: -1;
  pointer-events: none;
`;

export default PaintBackground;
