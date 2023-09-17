import React from "react";
import Markdown from "../../Markdown";
import AdmonitionNoteIcon from "./AdmonitionNoteIcon";
import styles, {
  AdmonitionContent,
  AdmonitionHeading,
  AdmonitionIcon,
  AdmonitionNote,
} from "./styles";

export interface ProjectDescriptionProps {
  description: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  description,
}) => {
  return (
    <AdmonitionNote>
      <div></div> {/* Placeholder */}
      <AdmonitionHeading>
        <AdmonitionIcon>
          <AdmonitionNoteIcon />
        </AdmonitionIcon>
        노트
      </AdmonitionHeading>
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
