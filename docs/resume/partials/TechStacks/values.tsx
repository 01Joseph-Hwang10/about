import React from "react";
import NxIcon from "@site/src/components/Icon/svg/NxIcon";
import MSWIcon from "@site/src/components/Icon/svg/MSWIcon";
import StencilJSIcon from "@site/src/components/Icon/svg/StencilJSIcon";
import StyledComponentsIcon from "@site/src/components/Icon/svg/StyledComponentsIcon";
import RecoilIcon from "@site/src/components/Icon/svg/RecoilIcon";
import PayloadCMSIcon from "@site/src/components/Icon/svg/PayloadCMSIcon";
import {
  iconSize,
  getDuotoneIconColors,
  getMonotoneIconColor,
  IconProps,
} from "./styles";
import ReactQueryIcon from "@site/src/components/Icon/svg/ReactQueryIcon";
import NodeJSIcon from "@site/src/components/Icon/svg/NodeJSIcon";

interface TechStack {
  key: string;
  name: string;
  homepage: string;
  logo: string | React.FC<IconProps>;
  disable?: boolean;
  highlight?: boolean;
}

const moreStacks: TechStack[] = [
  {
    key: "html",
    name: "HTML",
    homepage: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    logo: "devicon-html5-plain",
  },
  {
    key: "css",
    name: "CSS",
    homepage: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    logo: "devicon-css3-plain",
  },
  {
    key: "scss",
    name: "SCSS",
    homepage: "https://sass-lang.com/",
    logo: "devicon-sass-original",
    disable: true,
  },
  {
    key: "tailwindcss",
    name: "Tailwind CSS",
    homepage: "https://tailwindcss.com/",
    logo: "devicon-tailwindcss-plain",
    disable: true,
  },
  {
    key: "javascript",
    name: "JavaScript",
    homepage: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    logo: "devicon-javascript-plain",
  },
  {
    key: "typescript",
    name: "TypeScript",
    homepage: "https://www.typescriptlang.org/",
    logo: "devicon-typescript-plain",
    highlight: true,
  },
  {
    key: "npm",
    name: "npm",
    homepage: "https://www.npmjs.com/",
    logo: "devicon-npm-original-wordmark",
  },
  {
    key: "pnpm",
    name: "pnpm",
    homepage: "https://pnpm.io/",
    logo: "devicon-pnpm-plain",
  },
  {
    key: "nx",
    name: "Nx",
    homepage: "https://nx.dev/",
    logo: (props) => (
      <NxIcon size={iconSize} color={getMonotoneIconColor(props)} />
    ),
  },
  {
    key: "webpack",
    name: "Webpack",
    homepage: "https://webpack.js.org/",
    logo: "devicon-webpack-plain",
  },
  {
    key: "babel",
    name: "Babel",
    homepage: "https://babeljs.io/",
    logo: "devicon-babel-plain",
  },
  {
    key: "rollup",
    name: "Rollup",
    homepage: "https://rollupjs.org/",
    logo: "devicon-rollup-plain",
  },
  {
    key: "vitejs",
    name: "Vite",
    homepage: "https://vitejs.dev/",
    logo: "devicon-vitejs-plain",
  },
  {
    key: "stenciljs",
    name: "Stencil.js",
    homepage: "https://stenciljs.com/",
    logo: (props) => (
      <StencilJSIcon size={iconSize} color={getMonotoneIconColor(props)} />
    ),
  },
  {
    key: "react",
    name: "React",
    homepage: "https://react.dev/",
    logo: "devicon-react-original",
    highlight: true,
  },
  {
    key: "react-router",
    name: "React Router",
    homepage: "https://reactrouter.com/",
    logo: "devicon-reactrouter-plain",
  },
  {
    key: "material-ui",
    name: "Material-UI",
    homepage: "https://mui.com/material-ui/",
    logo: "devicon-materialui-plain",
  },
  {
    key: "emotion",
    name: "Emotion",
    homepage: "https://emotion.sh/",
    logo: () => <></>,
    disable: true,
  },
  {
    key: "styled-components",
    name: "Styled Components",
    homepage: "https://styled-components.com/",
    logo: (props) => (
      <StyledComponentsIcon
        size={iconSize}
        color={getMonotoneIconColor(props)}
      />
    ),
  },
  {
    key: "d3",
    name: "D3",
    homepage: "https://d3js.org/",
    logo: "devicon-d3js-plain",
  },
  {
    key: "react-query",
    name: "React Query",
    homepage: "https://tanstack.com/query/latest/docs/framework/react/overview",
    logo: (props) => (
      <ReactQueryIcon size={iconSize} color={getMonotoneIconColor(props)} />
    ),
  },
  {
    key: "recoil",
    name: "Recoil",
    homepage: "https://recoiljs.org/",
    logo: (props) => (
      <RecoilIcon
        size={iconSize}
        sizeBase="height"
        color={getMonotoneIconColor(props)}
      />
    ),
  },
  {
    key: "redux",
    name: "Redux",
    homepage: "https://redux.js.org/",
    logo: "devicon-redux-original",
  },
  {
    key: "jest",
    name: "Jest",
    homepage: "https://jestjs.io/",
    logo: "devicon-jest-plain",
  },
  {
    key: "cypress",
    name: "Cypress",
    homepage: "https://www.cypress.io/",
    logo: "devicon-cypressio-plain",
  },
  {
    key: "msw",
    name: "MSW",
    homepage: "https://mswjs.io/",
    logo: (props) => (
      <MSWIcon size={iconSize} colors={getDuotoneIconColors(props)} />
    ),
  },
  {
    key: "storybook",
    name: "Storybook",
    homepage: "https://storybook.js.org/",
    logo: "devicon-storybook-plain",
  },
  {
    key: "nodejs",
    name: "Node.js",
    homepage: "https://nodejs.org/",
    logo: (props) => (
      <NodeJSIcon
        size={iconSize}
        sizeBase="height"
        color={getMonotoneIconColor(props)}
      />
    ),
    highlight: true,
  },
  {
    key: "nestjs",
    name: "NestJS",
    homepage: "https://nestjs.com/",
    logo: "devicon-nestjs-original",
  },
  {
    key: "payloadcms",
    name: "PayloadCMS",
    homepage: "https://payloadcms.com/",
    logo: (props) => (
      <PayloadCMSIcon
        size={iconSize}
        sizeBase="height"
        color={getMonotoneIconColor(props)}
      />
    ),
  },
  {
    key: "json",
    name: "JSON",
    homepage: "https://www.json.org/json-en.html",
    logo: "devicon-json-plain",
  },
  {
    key: "graphql",
    name: "GraphQL",
    homepage: "https://graphql.org/",
    logo: "devicon-graphql-plain",
  },
  {
    key: "mongodb",
    name: "MongoDB",
    homepage: "https://www.mongodb.com/",
    logo: "devicon-mongodb-plain",
  },
  {
    key: "postgresql",
    name: "PostgreSQL",
    homepage: "https://www.postgresql.org/",
    logo: "devicon-postgresql-plain",
  },
  {
    key: "python",
    name: "Python",
    homepage: "https://www.python.org/",
    logo: "devicon-python-plain",
    highlight: true,
  },
  {
    key: "pypi",
    name: "Python Package Index",
    homepage: "https://pypi.org/",
    logo: "devicon-pypi-plain",
  },
  {
    key: "poetry",
    name: "Poetry",
    homepage: "https://python-poetry.org/",
    logo: "devicon-poetry-plain",
  },
  {
    key: "pytest",
    name: "Pytest",
    homepage: "https://pytest.org/",
    logo: "devicon-pytest-plain",
  },
  {
    key: "fastapi",
    name: "FastAPI",
    homepage: "https://fastapi.tiangolo.com/",
    logo: "devicon-fastapi-plain",
  },
  {
    key: "numpy",
    name: "NumPy",
    homepage: "https://numpy.org/",
    logo: "devicon-numpy-plain",
  },
  {
    key: "pandas",
    name: "Pandas",
    homepage: "https://pandas.pydata.org/",
    logo: "devicon-pandas-plain",
  },
  {
    key: "scikit-learn",
    name: "Scikit-learn",
    homepage: "https://scikit-learn.org/",
    logo: "devicon-scikitlearn-plain",
  },
  {
    key: "gcp",
    name: "Google Cloud Platform",
    homepage: "https://cloud.google.com/",
    logo: "devicon-googlecloud-plain",
    highlight: true,
  },
  {
    key: "aws",
    name: "Amazon Web Services",
    homepage: "https://aws.amazon.com/",
    logo: "devicon-amazonwebservices-plain",
  },
  {
    key: "github-actions",
    name: "Github Actions",
    homepage: "https://docs.github.com/ko/actions",
    logo: "devicon-githubactions-plain",
  },
  {
    key: "linux",
    name: "Linux",
    homepage: "https://www.linux.org/",
    logo: "devicon-linux-plain",
  },
  {
    key: "docker",
    name: "Docker",
    homepage: "https://www.docker.com/",
    logo: "devicon-docker-plain",
  },
  {
    key: "terraform",
    name: "Terraform",
    homepage: "https://www.terraform.io/",
    logo: "devicon-terraform-plain",
  },
];

export { moreStacks };

export default {
  moreStacks,
};
