import React from "react";
import { kebabCaseToSpacedPascal } from "@site/src/utils/stringUtils";
import { Badge, BadgeProps } from "./styles";
import { css } from "@emotion/react";

interface BadgeTagProps extends BadgeProps {
  tag: string;
  implementation?: "infima" | "custom";
}

const BadgeTag: React.FC<BadgeTagProps> = ({
  tag,
  implementation = "infima",
  ...props
}) => {
  if (implementation === "infima") {
    return (
      <span
        className="badge"
        css={css`
          margin: ${props.margin || "inherit"};
          background-color: ${props.color};
          color: ${props.textColor || "inherit"};
        `}
      >
        {kebabCaseToSpacedPascal(tag)}
      </span>
    );
  } else {
    return <Badge {...props}>{kebabCaseToSpacedPascal(tag)}</Badge>;
  }
};

export default BadgeTag;
