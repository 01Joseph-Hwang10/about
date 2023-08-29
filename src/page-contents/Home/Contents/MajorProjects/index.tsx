import React from "react";
import SectionLayout from "../../Layout/SectionLayout";
import { translate } from "@docusaurus/Translate";
import values from "./values";
import ProjectShowcase from "./ProjectShowcase";

const MajorProjects = () => {
  return (
    <SectionLayout
      title={translate({
        id: "pages.Home.Contents.MajorProjects.title",
        message: "주요 프로젝트",
      })}
    >
      {values.majorProjects.map((project, index) => (
        <ProjectShowcase key={`project-showcase--${index}`} project={project} />
      ))}
    </SectionLayout>
  );
};

export default MajorProjects;
