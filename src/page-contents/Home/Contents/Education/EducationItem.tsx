import React from "react";
import { Education } from "./values";
import CareerItem from "@site/src/components/CareerItem";

interface EducationItemProps {
  education: Education;
  divider?: boolean;
  emphasize?: boolean;
  padding?: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  education,
  emphasize,
  divider,
  padding,
}) => {
  return (
    <CareerItem
      career={education}
      padding={padding}
      divider={divider ?? true}
      emphasize={emphasize ?? true}
    />
  );
};

export default EducationItem;
