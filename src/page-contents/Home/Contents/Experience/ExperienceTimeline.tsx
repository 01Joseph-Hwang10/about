import "rsuite/dist/rsuite-no-reset.min.css";
import "./style.scss";
import useIsMobile from "@site/src/hooks/useIsMobile";
import React from "react";
import Timeline from "rsuite/Timeline";
import BlockIcon from "@rsuite/icons/Block";
import CheckOutlineIcon from "@rsuite/icons/CheckOutline";
import values from "./values";
import ExperienceCard from "./ExperienceCard";

interface ExperienceTimelineProps {
  isMobile?: boolean;
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  isMobile: customIsMobile,
}) => {
  const isMobile = useIsMobile();
  return (
    <Timeline
      align={isMobile || customIsMobile ? "left" : "alternate"}
      className="experience-timeline"
    >
      {values.experiences.map((experience, index) => (
        <Timeline.Item
          key={`experience--${index}`}
          className="experience-timeline__item"
          dot={experience.active ? <CheckOutlineIcon /> : <BlockIcon />}
        >
          <ExperienceCard experience={experience} />
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default ExperienceTimeline;
