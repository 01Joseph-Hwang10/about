import React, { ReactElement } from "react";
import NxIcon from "@site/src/components/Icon/svg/NxIcon";
import MSWIcon from "@site/src/components/Icon/svg/MSWIcon";
import StencilJSIcon from "@site/src/components/Icon/svg/StencilJSIcon";
import StyledComponentsIcon from "@site/src/components/Icon/svg/StyledComponentsIcon";
import RecoilIcon from "@site/src/components/Icon/svg/RecoilIcon";

interface TechStack {
  key: string;
  name: string;
  homepage: string;
  logo: string | ReactElement;
  disable?: boolean;
}

const iconSize = 27.5;
const iconColor = "var(--ifm-color-primary-contrast-foreground)";
const iconColorSecondary = "var(--ifm-color-secondary-contrast-foreground)";

const moreStacks: TechStack[] = [
  {
    key: "webpack",
    name: "Webpack",
    homepage: "https://webpack.js.org/",
    logo: "devicon-webpack-plain",
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
    key: "babel",
    name: "Babel",
    homepage: "https://babeljs.io/",
    logo: "devicon-babel-plain",
  },
  {
    key: "nx",
    name: "Nx",
    homepage: "https://nx.dev/",
    logo: <NxIcon size={iconSize} color={iconColor} />,
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
    logo: <MSWIcon size={iconSize} colors={[iconColor, iconColorSecondary]} />,
  },
  {
    key: "storybook",
    name: "Storybook",
    homepage: "https://storybook.js.org/",
    logo: "devicon-storybook-plain",
  },
  {
    key: "pytest",
    name: "Pytest",
    homepage: "https://pytest.org/",
    logo: "devicon-pytest-plain",
  },
  {
    key: "github-actions",
    name: "Github Actions",
    homepage: "https://docs.github.com/ko/actions",
    logo: "devicon-githubactions-plain",
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
  {
    key: "gcp",
    name: "GCP",
    homepage: "https://cloud.google.com/",
    logo: "devicon-googlecloud-plain",
  },
  {
    key: "aws",
    name: "AWS",
    homepage: "https://aws.amazon.com/",
    logo: "devicon-amazonwebservices-plain",
  },
  {
    key: "linux",
    name: "Linux",
    homepage: "https://www.linux.org/",
    logo: "devicon-linux-plain",
  },
  {
    key: "postgresql",
    name: "PostgreSQL",
    homepage: "https://www.postgresql.org/",
    logo: "devicon-postgresql-plain",
  },
  {
    key: "mongodb",
    name: "MongoDB",
    homepage: "https://www.mongodb.com/",
    logo: "devicon-mongodb-plain",
  },
  {
    key: "graphql",
    name: "GraphQL",
    homepage: "https://graphql.org/",
    logo: "devicon-graphql-plain",
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
    key: "stenciljs",
    name: "Stencil.js",
    homepage: "https://stenciljs.com/",
    logo: <StencilJSIcon size={iconSize} color={iconColor} />,
  },
  {
    key: "emotion",
    name: "Emotion",
    homepage: "https://emotion.sh/",
    logo: <></>,
    disable: true,
  },
  {
    key: "styled-components",
    name: "Styled Components",
    homepage: "https://styled-components.com/",
    logo: <StyledComponentsIcon size={iconSize} color={iconColor} />,
  },
  {
    key: "tailwindcss",
    name: "Tailwind CSS",
    homepage: "https://tailwindcss.com/",
    logo: "devicon-tailwindcss-plain",
  },
  {
    key: "scss",
    name: "SCSS",
    homepage: "https://sass-lang.com/",
    logo: "devicon-sass-original",
  },
  {
    key: "d3",
    name: "D3",
    homepage: "https://d3js.org/",
    logo: "devicon-d3js-plain",
  },
  {
    key: "recoil",
    name: "Recoil",
    homepage: "https://recoiljs.org/",
    logo: <RecoilIcon size={iconSize} color={iconColor} />,
  },
  {
    key: "redux",
    name: "Redux",
    homepage: "https://redux.js.org/",
    logo: "devicon-redux-original",
  },
  {
    key: "fastapi",
    name: "FastAPI",
    homepage: "https://fastapi.tiangolo.com/",
    logo: "devicon-fastapi-plain",
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
    logo: <></>,
  },
  {
    key: "poetry",
    name: "Poetry",
    homepage: "https://python-poetry.org/",
    logo: "devicon-poetry-plain",
  },
  {
    key: "pnpm",
    name: "Pnpm",
    homepage: "https://pnpm.io/",
    logo: "devicon-pnpm-plain",
  },
];

export { moreStacks };

export default {
  moreStacks,
};

/*

Bundlers:
- Webpack
- Rollup
- Vite

Transpilers:
- Babel

Monorepos:
- Nx

Testing:
- Jest
- Cypress
- MSW
- Storybook
- Pytest

CI/CD:
- Github Actions

Containerization:
- Docker

IaC:
- Terraform

Cloud:
- GCP
- AWS

Compute:
- Linux

Databases:
- PostgreSQL
- MongoDB

APIs:
- REST
- GraphQL

Data:
- NumPy
- Pandas
- Scikit-learn

Frontend:
- Stencil.js

Frontend - UI:
- Emotion
- Tailwind CSS
- SCSS
- D3

Frontend - State Management:
- Recoil
- Redux

Backend - Frameworks:
- FastAPI
- NestJS
- PayloadCMS

Package Managers:
- Poetry
- Pnpm

*/
