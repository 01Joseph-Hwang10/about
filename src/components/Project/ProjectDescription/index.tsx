import React from "react";
import Markdown from "../../Markdown";
import styles, { AdmonitionContent, AdmonitionNote } from "./styles";

export interface ProjectDescriptionProps {
  description: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  description,
}) => {
  return (
    <AdmonitionNote>
      <div></div> {/* Placeholder */}
      <AdmonitionContent>
        <div></div> {/* Placeholder */}
        <div css={styles.markdownWrapper}>
          <Markdown>{description}</Markdown>
        </div>
      </AdmonitionContent>
    </AdmonitionNote>
  );
};

export default ProjectDescription;
