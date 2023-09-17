export interface FeaturedStack {
  key: string;
  name: string;
  disabled?: boolean;
}

const featuredStacks: FeaturedStack[] = [
  { key: "typescript", name: "Typescript" },
  { key: "python", name: "Python" },
  { key: "react", name: "React" },
  { key: "nestjs", name: "NestJS" },
  { key: "gcp", name: "Cloud Computing" },
  { key: "utility", name: "Utility", disabled: true },
  { key: "communication", name: "Communication", disabled: true },
];

const icons: Record<string, string> = {
  typescript:
    "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg",
  python:
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  react: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  nestjs:
    "https://camo.githubusercontent.com/5f54c0817521724a2deae8dedf0c280a589fd0aa9bffd7f19fa6254bb52e996a/68747470733a2f2f6e6573746a732e636f6d2f696d672f6c6f676f2d736d616c6c2e737667",
  gcp: "https://www.gstatic.com/pantheon/images/welcome/supercloud.svg",
};

interface SupportingStack {
  words: string[];
  /**
   * @description
   * Seed for generating random number used to determine each word's position and size.
   * Those are selected arbitrarily.
   */
  seed?: number;
}

const supportingStacks: Record<FeaturedStack["key"], SupportingStack> = {
  typescript: {
    words: [
      "HTML5",
      "CSS3",
      "ES6",
      "CommonJS",
      "Webpack",
      "Babel",
      "Rollup",
      "Vite",
      "Lerna",
    ],
    seed: 9,
  },
  python: {
    words: [
      "Numpy",
      "Pandas",
      "Scikit Learn",
      "Django",
      "Flask",
      "PyTest",
      "Selenium",
      "Sphinx",
    ],
    seed: 19,
  },
  react: {
    words: [
      "NextJS",
      "Redux",
      "RTK Query",
      "TailwindCSS",
      "MUI",
      "Emotion",
      "Cypress",
      "Storybook",
      "StencilJS",
      "D3",
      "Figma",
    ],
    seed: 3,
  },
  nestjs: {
    words: [
      "Express",
      "Jest",
      "Swagger",
      "TypeORM",
      "Typedoc",
      "SQL",
      "Firestore",
    ],
    seed: 25,
  },
  gcp: {
    words: [
      "Firebase",
      "Cloud Run",
      "Cloud Build",
      "Cloud Storage",
      "Cloud Logging",
      "Cloud Compute Engine",
      "Docker",
      "Linux",
    ],
    seed: 3,
  },
  utility: {
    words: ["Git", "Github", "Slack", "Notion"],
  },
  communication: {
    words: ["Korean (Native)", "English (TOEFL iBT 98 @ 2023.02)"],
  },
};

export default {
  featuredStacks,
  icons,
  supportingStacks,
};
