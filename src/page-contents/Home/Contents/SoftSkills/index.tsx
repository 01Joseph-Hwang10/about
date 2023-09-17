import React, { useRef } from "react";
import SectionLayout from "../../Layout/SectionLayout";
import { translate } from "@docusaurus/Translate";
import values from "./values";
import styles from "./styles";
import SkillCard from "./SkillCard";
import PaintBackground from "@site/src/components/PaintBackground";
import useIsMobile from "@site/src/hooks/useIsMobile";
import useIsDarkMode from "@site/src/hooks/useIsDarkMode";
import useResponsiveRect from "@site/src/hooks/useResponsiveRect";

const SoftSkills = () => {
  const isMobile = useIsMobile();
  const isDarkMode = useIsDarkMode();

  const softSkillGridRef = useRef<HTMLDivElement>(null);
  const { height: gridHeight } = useResponsiveRect(softSkillGridRef);

  return (
    <SectionLayout
      title={translate({
        id: "pages.Home.Contents.SoftSkills.title",
        message: "소프트 스킬 & 유틸리티",
      })}
    >
      {!isMobile && (
        <PaintBackground
          background={
            isDarkMode
              ? "var(--ifm-background-surface-color)"
              : "var(--ifm-color-secondary-lightest)"
          }
          height={`${gridHeight}px`}
        />
      )}
      <div ref={softSkillGridRef} css={styles.grid}>
        {values.skills
          .filter((skill) => !skill.disabled)
          .map((skill, index) => (
            <SkillCard key={`soft-skill--${index}`} skill={skill} />
          ))}
      </div>
    </SectionLayout>
  );
};

export default SoftSkills;
