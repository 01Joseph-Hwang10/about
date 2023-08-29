import { useEffect, useState } from "react";
import { getNavbarHeight } from "../theme/Navbar/utils/navbarUtils";
import useIsBrowser from "@docusaurus/useIsBrowser";

const useNavbarHeight = (): number | undefined => {
  const isBrowser = useIsBrowser();
  const [navbarHeight, setNavbarHeight] = useState<number>();

  useEffect(() => {
    if (isBrowser) {
      setNavbarHeight(getNavbarHeight());
    }
  }, [isBrowser]);

  return navbarHeight;
};

export default useNavbarHeight;
