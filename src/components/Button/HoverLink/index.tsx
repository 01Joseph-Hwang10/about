import { SerializedStyles, css } from "@emotion/react";
import React, { useState } from "react";

interface HoverLinkProps {
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  // eslint-disable-next-line no-unused-vars
  children: (onHover: boolean) => React.ReactNode;
  css?: SerializedStyles;
}

const HoverLink: React.FC<HoverLinkProps> = ({
  href,
  children,
  target = "_blank",
  rel = "noreferrer",
  css: customCss = css`
    transition: all var(--ifm-transition-fast)
      var(--ifm-transition-timing-default);
    &:hover {
      transform: scale(1.05);
    }
  `,
}) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      css={customCss}
    >
      {children(onHover)}
    </a>
  );
};

export default HoverLink;
