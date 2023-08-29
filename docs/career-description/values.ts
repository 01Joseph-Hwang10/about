import { TagColorScheme } from "@site/src/components/Tag/Tags/types";
import softSkillValues from "@site/src/page-contents/Home/Contents/SoftSkills/values";

const tags = [
  ...softSkillValues.skillTags,
  "troubleshooting",
  "optimization",
  "feature",
  "automation",
  "improvement",
  "frontend",
  "backend",
  "devops",
  "@shepherd23",
  "@labis",
  "@tripbuilder",
] as const;

export type Tag = (typeof tags)[number];

const tagColorScheme: Record<Tag, TagColorScheme> = {
  ...softSkillValues.skillTagColors,
  troubleshooting: {
    backgroundColor: "var(--ifm-color-danger)",
    textColor: softSkillValues.skillTagTextColor,
  },
  optimization: {
    backgroundColor: (isDarkMode) =>
      isDarkMode
        ? "var(--ifm-color-warning-darkest)"
        : "var(--ifm-color-warning)",
    textColor: softSkillValues.skillTagTextColor,
  },
  feature: {
    backgroundColor: "var(--ifm-color-primary)",
    textColor: softSkillValues.skillTagTextColor,
  },
  automation: {
    backgroundColor: (isDarkMode) =>
      isDarkMode ? "var(--ifm-color-info-darkest)" : "var(--ifm-color-info)",
    textColor: softSkillValues.skillTagTextColor,
  },
  improvement: {
    backgroundColor: "brown",
    textColor: softSkillValues.skillTagTextColor,
  },
  frontend: {
    backgroundColor: "purple",
    textColor: softSkillValues.skillTagTextColor,
  },
  backend: {
    backgroundColor: "black",
    textColor: softSkillValues.skillTagTextColor,
  },
  devops: {
    backgroundColor: (isDarkMode) =>
      isDarkMode
        ? "var(--ifm-color-success-darker)"
        : "var(--ifm-color-success)",
    textColor: softSkillValues.skillTagTextColor,
  },
  "@shepherd23": {
    backgroundColor: "var(--ifm-color-secondary-darkest)",
    textColor: "var(--ifm-color-secondary-lightest)",
  },
  "@labis": {
    backgroundColor: "var(--ifm-color-secondary-darkest)",
    textColor: "var(--ifm-color-secondary-lightest)",
  },
  "@tripbuilder": {
    backgroundColor: "var(--ifm-color-secondary-darkest)",
    textColor: "var(--ifm-color-secondary-lightest)",
  },
};

export default {
  tags,
  tagColorScheme,
};
