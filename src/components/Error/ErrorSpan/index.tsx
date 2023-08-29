import React from "react";
import styles from "./styles";
import { SerializedStyles, css } from "@emotion/react";

interface ErrorSpanProps {
  message?: string;
  fill?: boolean;
  /**
   * @description
   * If defined, it overrides @param {boolean} fill prop.
   */
  width?: string;
  /**
   * @description
   * If defined, it overrides @param {boolean} fill prop.
   */
  height?: string;
  /**
   * @description
   * If defined, it overrides @param {boolean} fill, @param {string} width, @param {string} height props.
   */
  css?: SerializedStyles;
}

const ErrorSpan: React.FC<ErrorSpanProps> = ({
  fill,
  message = "Something is wrong :(",
  width = fill ? "100%" : "unset",
  height = fill ? "100%" : "unset",
  css: customCss = css`
    ${styles.errorSpan}
    width: ${width};
    height: ${height};
  `,
}) => {
  return (
    <div css={customCss}>
      <span css={styles.errorText}>{message}</span>
    </div>
  );
};

export default ErrorSpan;
