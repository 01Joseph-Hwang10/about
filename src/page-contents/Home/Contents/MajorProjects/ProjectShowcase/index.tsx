import React from "react";
import styles, {
  ProjectContent,
  ProjectDetail,
  ProjectPreview,
  ProjectWrapper,
} from "./styles";
import ShowcaseCarousel from "@site/src/components/Showcase/ShowcaseCarousel";
import { MajorProject } from "../types";
import Markdown from "@site/src/components/Markdown";
import ProjectLinks from "./ProjectLinks";

interface ProjectShowcaseProps {
  project: MajorProject;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project }) => {
  return (
    <ProjectWrapper>
      <ProjectContent>
        <ProjectDetail>
          <div className="project__detail-container">
            <h2 css={styles.title}>{project.title}</h2>
            <Markdown>{project.description}</Markdown>
            <ProjectLinks links={project.links} />
          </div>
        </ProjectDetail>

        <ProjectPreview>
          <ShowcaseCarousel images={project.images} />
        </ProjectPreview>
      </ProjectContent>
    </ProjectWrapper>
  );
};

export default ProjectShowcase;
