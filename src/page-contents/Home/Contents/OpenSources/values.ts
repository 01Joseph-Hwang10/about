import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faDocker,
  faGitAlt,
  faGithub,
  faNodeJs,
  faNpm,
  faPython,
  faReact,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import CIcon from "@site/src/components/Icon/svg/CIcon";
import CppIcon from "@site/src/components/Icon/svg/CppIcon";
import FirebaseIcon from "@site/src/components/Icon/svg/FirebaseIcon";
import JSONIcon from "@site/src/components/Icon/svg/JSONIcon";
import JupyterIcon from "@site/src/components/Icon/svg/JupyterIcon";
import PreactIcon from "@site/src/components/Icon/svg/PreactIcon";
import TailwindCssIcon from "@site/src/components/Icon/svg/TailwindCssIcon";
import TypescriptIcon from "@site/src/components/Icon/svg/TypescriptIcon";
import SVGIcon from "@site/src/components/Icon/svg/base/SVGIcon";

const openSourceProjects = new Set([
  "static-webpage-with-auth",
  "clsc",
  "pclc",
  "jtd-codebuild",
  "jupyter-cpp-kernel",
  "cafe24api-client",
]);

/**
 * @description
 * Repository here means a GitHub repository.
 */
export interface RepositoryTopic {
  name: string;
  icon: IconDefinition | typeof SVGIcon;
}

const displayableTopics = {
  git: <RepositoryTopic>{
    name: "git",
    icon: faGitAlt,
  },
  github: <RepositoryTopic>{
    name: "github",
    icon: faSquareGithub,
  },
  python: <RepositoryTopic>{
    name: "python",
    icon: faPython,
  },
  "jupyter-notebook": <RepositoryTopic>{
    name: "jupyter-notebook",
    icon: JupyterIcon,
  },
  cpp: <RepositoryTopic>{
    name: "cpp",
    icon: CppIcon,
  },
  c: <RepositoryTopic>{
    name: "c",
    icon: CIcon,
  },
  typescript: <RepositoryTopic>{
    name: "typescript",
    icon: TypescriptIcon,
  },
  nodejs: <RepositoryTopic>{
    name: "nodejs",
    icon: faNodeJs,
  },
  firebase: <RepositoryTopic>{
    name: "firebase",
    icon: FirebaseIcon,
  },
  react: <RepositoryTopic>{
    name: "react",
    icon: faReact,
  },
  preact: <RepositoryTopic>{
    name: "preact",
    icon: PreactIcon,
  },
  tailwindcss: <RepositoryTopic>{
    name: "tailwindcss",
    icon: TailwindCssIcon,
  },
  json: <RepositoryTopic>{
    name: "json",
    icon: JSONIcon,
  },
};

export type DisplayableTopic = keyof typeof displayableTopics;

/**
 * @description
 * Repository here means a public repository
 * that we commonly use them
 * when installing third-party packages. (e.g. npm, pip)
 */
export interface PublicRepository {
  name: string;
  icon: IconDefinition;
}

const displayablePublicRepositories = {
  npm: <PublicRepository>{
    name: "npm",
    icon: faNpm,
  },
  dockerhub: <PublicRepository>{
    name: "dockerhub",
    icon: faDocker,
  },
  github: <PublicRepository>{
    name: "github",
    icon: faGithub,
  },
  unknown: <PublicRepository>{
    name: "unknown",
    icon: faTerminal,
  },
  pypi: <PublicRepository>{
    name: "pypi",
    icon: faPython,
  },
};

export type DisplayablePublicRepository =
  keyof typeof displayablePublicRepositories;

export default {
  openSourceProjects,
  displayableTopics,
  displayablePublicRepositories,
};
