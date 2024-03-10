import React from "react";
import values from "./values";
import StackItem from "./StackItem";

interface Props {
  focusedStack?: string;
  // eslint-disable-next-line no-unused-vars
  setFocusedStack?: (stack: string) => void;
  iconSize?: string;
}

const StackList: React.FC<Props> = ({
  iconSize,
  focusedStack,
  setFocusedStack,
}) => {
  return values.featuredStacks
    .filter((stack) => !stack.disabled)
    .map((stack, index) => (
      <StackItem
        key={`featured-stack--${index}`}
        iconSize={iconSize}
        stack={stack}
        focusedStack={focusedStack}
        onMouseOver={() => setFocusedStack?.(stack.key)}
      />
    ));
};

export default StackList;
