import React from "react";
import styles from "./styles";

interface FigureProps {
  id?: string;
  src: string;
  alt?: string;
  caption?: string;
}

const Figure: React.FC<FigureProps> = ({ id: customId, src, alt, caption }) => {
  const id =
    customId ??
    (alt ? `figure-${alt.toLowerCase().replace(" ", "-")}` : undefined);
  return (
    <figure id={id} css={styles.figure}>
      <img src={src} alt={alt} style={{ width: "100%" }} />

      {caption && (
        // @ts-ignore
        <figcaption align="center">
          <b>{caption}</b>
        </figcaption>
      )}
    </figure>
  );
};

export default Figure;
