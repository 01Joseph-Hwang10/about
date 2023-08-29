import CareerItem from "@site/src/components/CareerItem";
import React from "react";
import { Experience } from "./values";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="experience-card-wrapper">
      <CareerItem career={experience} padding="0.5rem 0 2rem 0" dense={true} />
    </div>
  );
};

export default ExperienceCard;
