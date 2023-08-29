import React from "react";
import SectionLayout from "../../Layout/SectionLayout";
import { translate } from "@docusaurus/Translate";
import useIsMobile from "@site/src/hooks/useIsMobile";
import PaintBackground from "@site/src/components/PaintBackground";
import useIsDarkMode from "@site/src/hooks/useIsDarkMode";
import ExperienceTimeline from "./ExperienceTimeline";

const Experience: React.FC = () => {
  const isDarkMode = useIsDarkMode();
  const isMobile = useIsMobile();
  return (
    <SectionLayout
      id="Career__Experience"
      title={translate({
        id: "pages.Home.Contents.Experience.title",
        message: "경력 사항",
      })}
      titleSpacing="0 0 10rem 0"
    >
      <PaintBackground
        background={
          isDarkMode
            ? "var(--ifm-background-surface-color)"
            : "var(--ifm-color-secondary-lightest)"
        }
        height={isMobile ? "650px" : "750px"}
        skewY={-3}
        margin={isMobile ? "-100px 0 0 0" : "-75px 0 0 0"}
      />
      <ExperienceTimeline />
    </SectionLayout>
  );
};

export default Experience;
