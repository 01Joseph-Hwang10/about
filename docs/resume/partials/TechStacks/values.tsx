import React, { ReactElement } from "react";
import TypescriptIcon from "@site/src/components/Icon/svg/TypescriptIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import useIsDarkMode from "@site/src/hooks/useIsDarkMode";
import NxIcon from "@site/src/components/Icon/svg/NxIcon";
import VerdaccioIcon from "@site/src/components/Icon/svg/VerdaccioIcon";
import PytestIcon from "@site/src/components/Icon/svg/PytestIcon";
import NumpyIcon from "@site/src/components/Icon/svg/NumpyIcon";
import ViteIcon from "@site/src/components/Icon/svg/ViteIcon";
import PandasIcon from "@site/src/components/Icon/svg/PandasIcon";
import ScikitLearnIcon from "@site/src/components/Icon/svg/ScikitLearnIcon";
import FastAPIIcon from "@site/src/components/Icon/svg/FastAPIIcon";
import NestJSIcon from "@site/src/components/Icon/svg/NestJSIcon";

interface TechStack {
  key: string;
  name: string;
  homepage: string;
  disable?: boolean;
  logo: () => ReactElement;
}

const iconColor = "var(--ifm-color-primary-contrast-foreground)";
const iconColorSecondary = "var(--ifm-color-info-contrast-background)";
const iconColorContrast = "var(--ifm-color-primary-contrast-background)";

const svgIconSize = 24;

const useFaIconColor = () => {
  const isDarkMode = useIsDarkMode();
  return isDarkMode
    ? "var(--ifm-font-color-base)"
    : "var(--ifm-color-primary-contrast-foreground)";
};

const stacks: TechStack[] = [
  {
    key: "typescript",
    name: "TypeScript",
    homepage: "https://www.typescriptlang.org/",
    logo: () => (
      <TypescriptIcon
        size={svgIconSize}
        colors={[iconColor, iconColorContrast]}
      />
    ),
  },
  {
    key: "nx",
    name: "Nx",
    homepage: "https://nx.dev/",
    logo: () => <NxIcon size={svgIconSize} color={iconColor} />,
  },
  {
    key: "verdaccio",
    name: "Verdaccio",
    homepage: "https://verdaccio.org/",
    disable: true,
    logo: () => <VerdaccioIcon size={svgIconSize} color={iconColor} />,
  },
  {
    key: "react",
    name: "React",
    homepage: "https://reactjs.org/",
    logo: () => (
      <FontAwesomeIcon size="xl" color={useFaIconColor()} icon={faReact} />
    ),
  },
  {
    key: "vite",
    name: "Vite",
    homepage: "https://vitejs.dev/",
    logo: () => (
      <ViteIcon size={svgIconSize} colors={[iconColor, iconColorSecondary]} />
    ),
  },
  {
    key: "nodejs",
    name: "Node.js",
    homepage: "https://nodejs.org/",
    logo: () => (
      <FontAwesomeIcon size="xl" color={useFaIconColor()} icon={faNodeJs} />
    ),
  },
  {
    key: "nestjs",
    name: "NestJS",
    homepage: "https://nestjs.com/",
    logo: () => <NestJSIcon size={svgIconSize} color={iconColor} />,
  },
  {
    key: "python",
    name: "Python",
    homepage: "https://www.python.org/",
    logo: () => (
      <FontAwesomeIcon size="xl" color={useFaIconColor()} icon={faPython} />
    ),
  },
  {
    key: "numpy",
    name: "Numpy",
    homepage: "https://numpy.org/",
    logo: () => <NumpyIcon size={svgIconSize} color={iconColor} />,
  },
  {
    key: "pandas",
    name: "Pandas",
    homepage: "https://pandas.pydata.org/",
    logo: () => <PandasIcon size={svgIconSize} color={iconColor} />,
  },
  {
    key: "scikit-learn",
    name: "Scikit Learn",
    homepage: "https://scikit-learn.org/",
    logo: () => (
      <ScikitLearnIcon
        size={svgIconSize}
        colors={[iconColor, iconColorSecondary]}
      />
    ),
  },
  {
    key: "fastapi",
    name: "FastAPI",
    homepage: "https://fastapi.tiangolo.com/",
    logo: () => <FastAPIIcon size={svgIconSize} color={iconColor} />,
  },
  {
    key: "pytest",
    name: "Pytest",
    homepage: "https://docs.pytest.org/en/stable/",
    logo: () => <PytestIcon size={svgIconSize} color={iconColor} />,
  },
];

export { stacks };

export default {
  stacks,
};

/*
- Typescript
  - Nx
  // - Verdaccio
  - Python
  // - Pytest
  // - FastAPI
  - Numpy
  - Pandas
  - Scikit-learn
- React
  // - D3
  // - Cypress
  // - Webpack
  - Rollup
  // - Babel
  - Emotion
  - Vite
  - StencilJS
  - Storybook
  // - Figma
  - Puppeteer
  // - TailwindCSS 
  // - Sass
  - Redux
  - Recoil
- Node.js
  - Jest
  - GraphQL
  - MSW
  - PayloadCMS
  - NestJS
- Google Cloud Platform
  - MongoDB
  - Docker
  - Terraform
  - Github Actions
  - Linux
- Slack
- Notion
 */
