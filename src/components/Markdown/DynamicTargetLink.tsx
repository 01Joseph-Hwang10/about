import React, { AnchorHTMLAttributes } from "react";

type DynamicTargetLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const DynamicTargetLink = ({
  children,
  href,
  target = href.startsWith("http") ? "_blank" : undefined,
  ...props
}: DynamicTargetLinkProps) => {
  return (
    <a href={href} target={target} {...props}>
      {children}
    </a>
  );
};

export default DynamicTargetLink;
