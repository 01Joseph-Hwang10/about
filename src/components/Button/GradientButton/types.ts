import { SerializedStyles } from "@emotion/react";
import React from "react";

export interface GradientButtonProps {
  children?: React.ReactNode;
  /**
   * @description
   * The margin of the button.
   * If @param {SerializedStyles} css is defined, it overrides this parameter.
   */
  margin?: string;
  /**
   * @description
   * Custom styles for the icon.
   *
   * If defined, it overrides parameters related to styling.
   */
  css?: SerializedStyles;
  className?: string;
}
