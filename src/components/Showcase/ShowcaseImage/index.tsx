import { css } from "@emotion/react";
import React, { useRef } from "react";
import styles from "./styles";
import MobileFrame from "@site/src/components/Frame/Mobile";
import useResponsiveRect from "@site/src/hooks/useResponsiveRect";
import DesktopFrame from "@site/src/components/Frame/Desktop";
import { ImageMetadata } from "@site/src/page-contents/Home/Contents/MajorProjects/types";

interface ShowcaseImageProps {
  image: ImageMetadata;
}

const ShowcaseImage: React.FC<ShowcaseImageProps> = ({ image }) => {
  const { src, frame } = image;
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const { height } = useResponsiveRect(imageContainerRef);
  return (
    <div
      ref={imageContainerRef}
      css={css`
        ${styles.background}
        &:before {
          background-image: url(${src});
        }
      `}
    >
      <img src="/img/logo.svg" css={styles.placeholderIcon} />
      {!frame && <img src={src} css={styles.imageFit} />}
      {frame === "mobile" && (
        <MobileFrame zoom={height / (MobileFrame.viewBoxHeight + 25) || 1}>
          <img src={src} css={styles.imageFull} />
        </MobileFrame>
      )}
      {frame === "desktop" && (
        <DesktopFrame zoom={height / DesktopFrame.viewBoxHeight || 1}>
          <img src={src} css={styles.imageFull} />
        </DesktopFrame>
      )}
    </div>
  );
};

export default ShowcaseImage;
