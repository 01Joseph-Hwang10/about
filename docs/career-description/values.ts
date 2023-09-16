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

export type Tag = (typeof tags)[number] | string;

const greyColorScheme: TagColorScheme = {
  backgroundColor: "var(--ifm-color-secondary-darkest)",
  textColor: "var(--ifm-color-secondary-lightest)",
};

const redColorScheme: TagColorScheme = {
  backgroundColor: "var(--ifm-color-danger)",
  textColor: softSkillValues.skillTagTextColor,
};

const orangeColorScheme: TagColorScheme = {
  backgroundColor: (isDarkMode) =>
    isDarkMode
      ? "var(--ifm-color-warning-darkest)"
      : "var(--ifm-color-warning)",
  textColor: softSkillValues.skillTagTextColor,
};

const blueColorScheme: TagColorScheme = {
  backgroundColor: "var(--ifm-color-primary)",
  textColor: softSkillValues.skillTagTextColor,
};

const skyblueColorScheme: TagColorScheme = {
  backgroundColor: (isDarkMode) =>
    isDarkMode ? "var(--ifm-color-info-darkest)" : "var(--ifm-color-info)",
  textColor: softSkillValues.skillTagTextColor,
};

const brownColorScheme: TagColorScheme = {
  backgroundColor: "brown",
  textColor: softSkillValues.skillTagTextColor,
};

const purpleColorScheme: TagColorScheme = {
  backgroundColor: "purple",
  textColor: softSkillValues.skillTagTextColor,
};

const blackColorScheme: TagColorScheme = {
  backgroundColor: "black",
  textColor: softSkillValues.skillTagTextColor,
};

const greenColorScheme: TagColorScheme = {
  backgroundColor: (isDarkMode) =>
    isDarkMode ? "var(--ifm-color-success-darker)" : "var(--ifm-color-success)",
  textColor: softSkillValues.skillTagTextColor,
};

const coralColorScheme: TagColorScheme = {
  backgroundColor: "coral",
  textColor: softSkillValues.skillTagTextColor,
};

const darkTurquoiseColorScheme: TagColorScheme = {
  backgroundColor: "darkturquoise",
  textColor: softSkillValues.skillTagTextColor,
};

const tagColorScheme: Record<Tag, TagColorScheme> = {
  ...softSkillValues.skillTagColors,
  // General
  troubleshooting: redColorScheme,
  optimization: orangeColorScheme,
  feature: blueColorScheme,
  automation: skyblueColorScheme,
  improvement: brownColorScheme,

  // Front-end specific
  frontend: purpleColorScheme,
  ["UI/UX"]: coralColorScheme,
  publishing: darkTurquoiseColorScheme,

  // Back-end specific
  backend: blackColorScheme,

  // DevOps specific
  devops: greenColorScheme,

  // Companies
  "@shepherd23": greyColorScheme,
  "@labis": greyColorScheme,
  "@tripbuilder": greyColorScheme,
};

export default {
  tags,
  tagColorScheme,
};
