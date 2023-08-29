import { useWindowSize } from "@docusaurus/theme-common";

const useIsMobile = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize === "mobile";

  return isMobile;
};

export default useIsMobile;
