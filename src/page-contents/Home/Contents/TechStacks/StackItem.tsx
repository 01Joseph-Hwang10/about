import React from "react";
import values, { FeaturedStack } from "./values";
import useIsMobile from "@site/src/hooks/useIsMobile";
import styles, { StackName } from "./styles";
import ImageIcon from "@site/src/components/Icon/ImageIcon";
import useIsDarkMode from "@site/src/hooks/useIsDarkMode";

interface StackItemProps {
  focusedStack?: string;
  onMouseOver?: () => void;
  stack: FeaturedStack;
  iconSize?: string;
}

const StackItem: React.FC<StackItemProps> = ({
  onMouseOver,
  stack,
  focusedStack,
  iconSize,
}) => {
  const isMobile = useIsMobile();
  const isDarkMode = useIsDarkMode();
  return (
    <div
      className="stack-item"
      onMouseOver={onMouseOver}
      css={styles.stackItem}
    >
      <ImageIcon
        src={values.icons[stack.key]}
        alt={stack.key}
        size={iconSize ?? (isMobile ? "4rem" : "6rem")}
      />
      <StackName
        className="stack-name"
        focusedStack={focusedStack}
        stack={stack.key}
        isDarkMode={isDarkMode}
      >
        {stack.name}
      </StackName>
    </div>
  );
};

export default StackItem;
