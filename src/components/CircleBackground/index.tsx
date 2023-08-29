import React from "react";
import styles, {
  CircleBackgroundBody,
  CircleBackgroundBodyProps,
} from "./styles";

interface CircleBackgroundProps extends CircleBackgroundBodyProps {
  children?: React.ReactNode;
  className?: string;
}

const CircleBackground: React.FC<CircleBackgroundProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={className} css={styles.flex}>
      <CircleBackgroundBody {...props}>{children}</CircleBackgroundBody>
    </div>
  );
};

export default CircleBackground;
