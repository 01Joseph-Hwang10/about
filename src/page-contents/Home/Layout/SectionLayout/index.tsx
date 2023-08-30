import React from "react";
import styles, { Title, TitleProps } from "./styles";

interface SectionLayoutProps extends TitleProps {
  id?: string;
  title?: string;
  containerSpacing?: string;
  children: React.ReactNode;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
  id,
  title,
  children,
  containerSpacing,
  ...titleProps
}) => {
  return (
    <div id={id} className="container" css={styles.container(containerSpacing)}>
      {title && <Title {...titleProps}>{title}</Title>}
      {children}
    </div>
  );
};

export default SectionLayout;
