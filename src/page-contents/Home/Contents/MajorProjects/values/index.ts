import { ProjectLink } from "../types";
import majorProjects from "./projects";

const titleOfLinkType: Record<ProjectLink["type"], string> = {
  github: "GitHub",
  "career-description": "경력 기술서",
  "live-demo": "Live Demo",
};

export default {
  titleOfLinkType,
  majorProjects,
};
