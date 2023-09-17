import { TagColorScheme } from "@site/src/components/Tag/Tags/types";
import techStackValues from "@site/src/page-contents/Home/Contents/TechStacks/values";
import softSkillValues from "@site/src/page-contents/Home/Contents/SoftSkills/values";

const featuredStackNames = new Set(
  techStackValues.featuredStacks.map((stack) => stack.name),
);

const skillsetColorScheme = new Proxy({} as Record<string, TagColorScheme>, {
  get: function (target, prop) {
    if (featuredStackNames.has(prop as string)) {
      return {
        backgroundColor: "var(--ifm-color-primary)",
        textColor: softSkillValues.skillTagTextColor,
      };
    }
    if (
      techStackValues.supportingStacks?.["utility"]?.words?.includes(
        prop as string,
      )
    ) {
      return {
        backgroundColor: (isDarkMode) =>
          isDarkMode
            ? "var(--ifm-color-success-darker)"
            : "var(--ifm-color-success)",
        textColor: softSkillValues.skillTagTextColor,
      };
    }
    if (
      techStackValues.supportingStacks?.["communication"]?.words?.includes(
        prop as string,
      )
    ) {
      return {
        backgroundColor: (isDarkMode) => (isDarkMode ? "#FD8A99" : "#FF9EAA"),
        textColor: softSkillValues.skillTagTextColor,
      };
    }
    return {
      backgroundColor: "var(--ifm-color-secondary-darkest)",
      textColor: "var(--ifm-color-secondary-lightest)",
    };
  },
});

export class Skillsets {
  public values: string[];
  constructor() {
    this.values = [];
    for (const [key, value] of Object.entries(
      techStackValues.supportingStacks,
    )) {
      const featuredStack = techStackValues.featuredStacks.find(
        (stack) => stack.key === key,
      );
      if (!featuredStack?.disabled) {
        this.values.push(featuredStack.name);
      }
      this.values.push(...value.words);
    }
  }
}

export default {
  skillsetColorScheme,
};
