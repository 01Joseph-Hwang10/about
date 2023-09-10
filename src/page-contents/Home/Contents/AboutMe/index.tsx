import React from "react";
import SectionLayout from "../../Layout/SectionLayout";
import { translate } from "@docusaurus/Translate";
import styles from "./styles";
import OutlinedAvatar from "@site/src/components/Avatar/OutlinedAvatar";
import PaintBackground from "@site/src/components/PaintBackground";
import useIsDarkMode from "@site/src/hooks/useIsDarkMode";
import { css } from "@emotion/react";
import { mobileWidth } from "@site/src/style/values";
import values from "./values";
import Markdown from "@site/src/components/Markdown";

const AboutMe = () => {
  const isDarkMode = useIsDarkMode();
  return (
    <SectionLayout
      title={translate({
        id: "pages.Home.Contents.AboutMe.title",
        message: "안녕하세요, 황현규입니다 😃",
      })}
      verticalMargin="0 0 12rem 0"
    >
      <PaintBackground
        isDarkMode={isDarkMode}
        skewY={-3}
        css={css`
          margin-top: -6rem;
          height: calc(100% + 12rem);
          @media screen and (min-width: ${mobileWidth}px) {
            height: 75%;
          }
        `}
      />
      <article className="about-me-article" css={styles.article}>
        <OutlinedAvatar size="230px" src="/img/my-picture.jpg" />
        <div css={styles.description}>
          <Markdown>{values.description}</Markdown>
        </div>
      </article>
    </SectionLayout>
  );
};

export default AboutMe;
