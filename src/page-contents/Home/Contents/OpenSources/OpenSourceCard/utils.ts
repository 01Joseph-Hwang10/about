import MonotoneSVGIcon from "@site/src/components/Icon/svg/base/MonotoneSVGIcon";
import { DisplayablePublicRepository } from "../values";
import MultitoneSVGIcon from "@site/src/components/Icon/svg/base/MultitoneSVGIcon";
import SVGIcon from "@site/src/components/Icon/svg/base/SVGIcon";

const getRepositoryType = (
  repositoryUrl: string,
): DisplayablePublicRepository => {
  if (repositoryUrl.includes("npmjs.com")) return "npm";
  if (repositoryUrl.includes("docker.com")) return "dockerhub";
  if (repositoryUrl.includes("github.com")) return "github";
  return "unknown";
};

const getRepositoryThemeColor = (
  type: DisplayablePublicRepository,
  isDarkMode?: boolean,
) => {
  if (type === "npm")
    return isDarkMode
      ? "var(--ifm-color-danger-darkest)"
      : "var(--ifm-color-danger-lightest)";
  if (type === "dockerhub")
    return isDarkMode
      ? "var(--ifm-color-info-darkest)"
      : "var(--ifm-color-info-lightest)";
  if (type === "github")
    return isDarkMode
      ? "var(--ifm-color-secondary-contrast-background)"
      : "var(--ifm-color-secondary-darkest)";
  return isDarkMode
    ? "var(--ifm-color-success-darkest)"
    : "var(--ifm-color-success-lightest)";
};

const iconIsMonotone = (
  icon: typeof SVGIcon,
): icon is typeof MonotoneSVGIcon => {
  return icon.type() === MonotoneSVGIcon;
};

const iconIsMultitone = (
  icon: typeof SVGIcon,
): icon is typeof MultitoneSVGIcon => {
  return icon.type() === MultitoneSVGIcon;
};

export default {
  getRepositoryType,
  getRepositoryThemeColor,
  iconIsMonotone,
  iconIsMultitone,
};
