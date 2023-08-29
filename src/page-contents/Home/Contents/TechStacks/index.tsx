import React, { useState } from "react";
import SectionLayout from "../../Layout/SectionLayout";
import { translate } from "@docusaurus/Translate";
import values from "./values";
import WordCloudProvider from "./WordCloud/Provider";
import WordCloud from "./WordCloud";
import styles from "./styles";
import StackItem from "./StackItem";
import useIsMobile from "@site/src/hooks/useIsMobile";

const TechStacks: React.FC = () => {
  const isMobile = useIsMobile();
  const [focusedStack, setFocusedStack] = useState<string>(
    values.featuredStacks[0].key,
  );
  const { words, seed } = values.supportingStacks[focusedStack];

  return (
    <WordCloudProvider>
      <WordCloud words={words} seed={seed} />
      <SectionLayout
        title={translate({
          id: "pages.Home.Contents.TechStacks.title",
          message: "기술 스택",
        })}
        containerSpacing={isMobile ? "2rem 0 6rem 0" : "6rem 0 12rem 0"}
      >
        <div className="stack-container" css={styles.stackContainer}>
          {values.featuredStacks
            .filter((stack) => !stack.disable)
            .map((stack, index) => (
              <StackItem
                key={`featured-stack--${index}`}
                stack={stack}
                focusedStack={focusedStack}
                onMouseOver={() => setFocusedStack(stack.key)}
              />
            ))}
        </div>
      </SectionLayout>
    </WordCloudProvider>
  );
};

export default TechStacks;
