import React from "react";
import styles, { Title } from "./styles";

interface SectionLayoutProps {
  id?: string;
  title?: string;
  titleSpacing?: string;
  containerSpacing?: string;
  children: React.ReactNode;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
  id,
  title,
  children,
  titleSpacing,
  containerSpacing,
}) => {
  return (
    <div id={id} className="container" css={styles.container(containerSpacing)}>
      {title && <Title verticalMargin={titleSpacing}>{title}</Title>}
      {children}
    </div>
  );
};

export default SectionLayout;
