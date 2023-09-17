import React from "react";
import ProjectTitle, { ProjectTitleProps } from "../ProjectTitle";
import ProjectDescription, {
  ProjectDescriptionProps,
} from "../ProjectDescription";

interface ProjectOverviewProps
  extends ProjectTitleProps,
    ProjectDescriptionProps {}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  description,
  ...props
}) => {
  return (
    <div className="project-overview orphanable">
      <ProjectTitle {...props} />
      <ProjectDescription description={description} />
    </div>
  );
};

export default ProjectOverview;
