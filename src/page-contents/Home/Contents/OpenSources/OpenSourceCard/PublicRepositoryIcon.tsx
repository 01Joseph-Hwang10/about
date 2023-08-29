import React from "react";
import values, { DisplayablePublicRepository } from "../values";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles";
import useIsDarkMode from "@site/src/hooks/useIsDarkMode";

interface PublicRepositoryIconProps {
  type: DisplayablePublicRepository;
}

const PublicRepositoryIcon: React.FC<PublicRepositoryIconProps> = ({
  type,
}) => {
  const isDarkMode = useIsDarkMode();
  const publicRepository = values.displayablePublicRepositories[type];
  return (
    <FontAwesomeIcon
      // Unknown's icon is bigger than others
      size={type === "unknown" ? "xl" : "2x"}
      color={styles.iconColor(isDarkMode)}
      icon={publicRepository.icon}
    />
  );
};

export default PublicRepositoryIcon;
