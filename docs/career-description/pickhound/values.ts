import { TagColorScheme } from "@site/src/components/Tag/Tags/types";
import pickhound from "@site/src/page-contents/Home/Contents/MajorProjects/values/projects/pickhound";
import values from "../values";

const tags = [
  ...values.tags,
  "recommendation-API",
  "bandit-engine",
  "admin-dashboard",
  "banner-manager",
] as const;

type Tag = (typeof tags)[number];

const tagColorScheme: Record<Tag, TagColorScheme> = {
  ...values.tagColorScheme,
  "recommendation-API": {
    backgroundColor: "var(--ifm-color-secondary-darkest)",
    textColor: "var(--ifm-color-secondary-lightest)",
  },
  "bandit-engine": {
    backgroundColor: "var(--ifm-color-secondary-darkest)",
    textColor: "var(--ifm-color-secondary-lightest)",
  },
  "admin-dashboard": {
    backgroundColor: "var(--ifm-color-secondary-darkest)",
    textColor: "var(--ifm-color-secondary-lightest)",
  },
  "banner-manager": {
    backgroundColor: "var(--ifm-color-secondary-darkest)",
    textColor: "var(--ifm-color-secondary-lightest)",
  },
};

export default {
  pickhound,
  tagColorScheme,
};
