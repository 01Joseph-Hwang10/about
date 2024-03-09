export interface FeaturedStack {
  key: string;
  name: string;
  disabled?: boolean;
}

const featuredStacks: FeaturedStack[] = [
  { key: "typescript", name: "Typescript" },
  { key: "python", name: "Python" },
  { key: "react", name: "React" },
  { key: "nodejs", name: "NodeJS" },
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
  nodejs: "/img/node-js.svg",
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
      "PNPM",
      "Nx",
    ],
    seed: 9,
  },
  python: {
    words: [
      "Numpy",
      "Pandas",
      "Scikit Learn",
      "PyTorch",
      "FastAPI",
      "PyTest",
      "Poetry",
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
  nodejs: {
    words: [
      "Express",
      "Jest",
      "NestJS",
      "REST",
      "GraphQL",
      "ORM",
      "MSW",
      "PayloadCMS",
      "puppeteer",
      "Verdaccio",
    ],
    seed: 25,
  },
  gcp: {
    words: [
      "SQL",
      "MongoDB",
      "Cloud Run",
      "Cloud Build",
      "Artifact Registry",
      "Compute Engine",
      "Cloud Logging",
      "Terraform",
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
