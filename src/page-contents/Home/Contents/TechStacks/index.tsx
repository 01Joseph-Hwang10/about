import React, { useState } from "react";
import SectionLayout from "../../Layout/SectionLayout";
import { translate } from "@docusaurus/Translate";
import values from "./values";
import WordCloudProvider from "./WordCloud/Provider";
import WordCloud from "./WordCloud";
import useIsMobile from "@site/src/hooks/useIsMobile";
import StackList from "./StackList";
import styles from "./styles";

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
          <StackList
            focusedStack={focusedStack}
            setFocusedStack={setFocusedStack}
          />
        </div>
      </SectionLayout>
    </WordCloudProvider>
  );
};

export default TechStacks;
