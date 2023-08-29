import React from "react";
import values from "./values";
import MeInANutshellItem from "./MeInANutshellItem";
import styles from "./styles";
import useIsMobile from "@site/src/hooks/useIsMobile";

interface MeInANutshellItemsProps {
  mode?: "mobile" | "desktop" | "auto";
}

const MeInANutshellItems: React.FC<MeInANutshellItemsProps> = ({
  mode = "auto",
}) => {
  const isMobile = useIsMobile();
  const gridContainerStyle =
    mode === "mobile" || (mode === "auto" && isMobile)
      ? styles.gridContainerMobile
      : styles.gridContainerDesktop;
  return (
    <div css={gridContainerStyle}>
      {values.nutshells.map((nutshell, index) => (
        <MeInANutshellItem key={`nutshell--${index}`} nutshell={nutshell} />
      ))}
    </div>
  );
};

export default MeInANutshellItems;
