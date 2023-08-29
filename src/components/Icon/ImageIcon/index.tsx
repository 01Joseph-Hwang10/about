import React from "react";
import { SerializedStyles, css } from "@emotion/react";

interface ImageIconProps {
  src: string;
  alt?: string;
  size?: string;
  css?: SerializedStyles;
}

const ImageIcon: React.FC<ImageIconProps> = ({
  src,
  alt,
  css: customCss,
  size = "3rem",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width="100%"
      height="100%"
      css={css`
        width: ${size};
        height: ${size};
        ${customCss}
      `}
    />
  );
};

export default ImageIcon;
