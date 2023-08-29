import useIsDarkMode from "@site/src/hooks/useIsDarkMode";
import React from "react";
import values, { SkillSummary } from "./values";
import styles, { SkillCardWrapper } from "./styles";
import Tags from "@site/src/components/Tag/Tags";

interface SkillCardProps {
  skill: SkillSummary;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const isDarkMode = useIsDarkMode();
  return (
    <SkillCardWrapper
      cursorPointer={!!skill.link}
      isDarkMode={isDarkMode}
      onClick={() => {
        if (typeof window === "undefined") return;
        window.open(skill.link, "_blank");
      }}
    >
      <div css={styles.content}>
        <h3 css={styles.title}>{skill.title}</h3>
        <Tags
          id="soft-skill-tags"
          tags={skill.tags}
          tagMargin="0.5rem 0.5rem 0 0"
          tagColorScheme={values.skillTagColors}
        />
      </div>
    </SkillCardWrapper>
  );
};

export default SkillCard;
