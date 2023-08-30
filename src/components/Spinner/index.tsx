import { SerializedStyles } from "@emotion/react";
import clsx from "clsx";
import React from "react";
import { Oval } from "react-loader-spinner";
// @ts-ignore
import styles from "./styles.module.scss";

interface SpinnerProps {
  /**
   * @description
   * If true, set of rules defined by {@link styles.fill} will be applied.
   */
  fill?: boolean;
  className?: string;
  /**
   * @description
   * If defined, it overrides @param {boolean} fill prop.
   */
  css?: SerializedStyles;
  primaryColor?: string;
  secondaryColor?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  fill,
  className,
  primaryColor = "var(--ifm-color-secondary-contrast-foreground)",
  secondaryColor = "var(--ifm-color-secondary-contrast-background)",
  css,
}) => {
  return (
    <div className={clsx(className, fill && styles.fill)} css={css}>
      <Oval
        height={80}
        width={80}
        color={primaryColor}
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor={secondaryColor}
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Spinner;
