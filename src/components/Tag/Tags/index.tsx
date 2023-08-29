import React from "react";
import { TagColorScheme } from "./types";
import BadgeTag from "../BadgeTag";
import styles from "./styles";
import useIsDarkMode from "@site/src/hooks/useIsDarkMode";
import { randomId } from "@site/src/utils/randomUtils";
import clsx from "clsx";

interface TagsProps {
  id: string;
  tags: string[];
  metadata?: string[];
  tagColorScheme: Record<string, TagColorScheme>;
  tagMargin?: string;
}

const Tags: React.FC<TagsProps> = ({
  id,
  tags,
  metadata = [],
  tagColorScheme,
  tagMargin = "0 0.5rem 0.5rem 0",
}) => {
  const isDarkMode = useIsDarkMode();
  const keyPrefix = id || randomId();
  return (
    <div
      id={id}
      css={styles.tagWrapper}
      className={clsx(metadata.length > 0 && "metadata-tags", ...metadata)}
    >
      {tags.map((tag, index) => {
        const backgroundColor = tagColorScheme[tag].backgroundColor;
        const textColor = tagColorScheme[tag].textColor;
        return (
          <BadgeTag
            tag={tag}
            margin={tagMargin}
            key={`${keyPrefix}__tag--${index}`}
            color={
              typeof backgroundColor === "function"
                ? backgroundColor(isDarkMode)
                : backgroundColor
            }
            textColor={
              typeof textColor === "function"
                ? textColor(isDarkMode)
                : textColor
            }
          />
        );
      })}
    </div>
  );
};

export default Tags;
