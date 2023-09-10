import React from "react";
import styles, { ElevatedImage, FlatImage } from "./styles";
import { css } from "@emotion/react";

interface FigureProps {
  src: string;
  appearance?: "flat" | "elevated";
  id?: string;
  alt?: string;
  caption?: string;
}

const Figure: React.FC<FigureProps> = ({
  src,
  alt,
  caption,
  id: customId,
  appearance = "elevated",
}) => {
  const id =
    customId ??
    (alt ? `figure-${alt.toLowerCase().replace(" ", "-")}` : undefined);
  return (
    <figure
      id={id}
      css={css`
        ${appearance === "flat" && "margin: 0;"}
        ${styles.figure}
      `}
    >
      {appearance === "elevated" ? (
        <ElevatedImage src={src} alt={alt} />
      ) : (
        <FlatImage src={src} alt={alt} />
      )}

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
