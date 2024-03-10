import React from "react";
import styles from "./styles";

import "rsuite/dist/rsuite-no-reset.min.css";

const ContentWrapper: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="container">
      <main css={styles.main}>{children}</main>
    </div>
  );
};

export default ContentWrapper;
