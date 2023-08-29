import React from "react";
import { Parallax } from "react-scroll-parallax";
import styles from "./styles";
import { SeedRandom } from "@site/src/utils/randomUtils";
import { css } from "@emotion/react";
import values from "./values";
import useIsDarkMode from "@site/src/hooks/useIsDarkMode";
import BrowserOnly from "@docusaurus/BrowserOnly";

interface WordCloudProps {
  words: string[];
  /**
   * @description Seed for generating random numbers
   */
  seed?: number;
}

const WordCloud: React.FC<WordCloudProps> = ({ words, seed }) => {
  const isDarkMode = useIsDarkMode();
  const random = new SeedRandom(seed);
  return (
    <BrowserOnly>
      {() => (
        <Parallax speed={-10} css={styles.parallax}>
          {words.map((word, index) => (
            <p
              key={`wordcloud-word--${index}`}
              css={styles.word(
                isDarkMode,
                css`
                  font-size: ${random.nextInt(...values.wordFontSize())}px;
                  top: ${random.nextInt(...values.wordTopRange())}%;
                  left: ${random.nextInt(...values.wordLeftRange())}px;
                `,
              )}
            >
              {word}
            </p>
          ))}
        </Parallax>
      )}
    </BrowserOnly>
  );
};

export default WordCloud;
