import { useColorMode } from "@docusaurus/theme-common";

const useIsDarkMode = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return isDarkMode;
};

export default useIsDarkMode;
