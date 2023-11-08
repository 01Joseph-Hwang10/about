import { GithubRepo } from "@site/src/api/get-repos";
import React from "react";
import utils from "./utils";
import values, {
  DisplayablePublicRepository,
  DisplayableTopic,
} from "../values";
import PublicRepositoryIcon from "./PublicRepositoryIcon";
import RepositoryTopic from "./RepositoryTopic";
import styles from "./styles";
import { css } from "@emotion/react";
import useIsDarkMode from "@site/src/hooks/useIsDarkMode";

interface OpenSourceCardProps {
  repo: GithubRepo;
}

const OpenSourceCard: React.FC<OpenSourceCardProps> = ({ repo }) => {
  const isDarkMode = useIsDarkMode();
  const publicRepoType = utils.getRepositoryType(
    repo.homepage ?? "",
  ) as DisplayablePublicRepository;
  const repoThemeColor = utils.getRepositoryThemeColor(
    publicRepoType,
    isDarkMode,
  );
  const repoUrl = repo.homepage ?? repo.html_url;
  const onClick = () => {
    if (typeof window === "undefined") return;
    window.open(repoUrl, "_blank");
  };
  return (
    <div
      onClick={onClick}
      css={css`
        ${styles.card}
        ${styles.cardRippleColor(repoThemeColor)}
      `}
    >
      <div className="repository-wrapper" css={styles.repositoryWrapper}>
        <PublicRepositoryIcon type={publicRepoType} />
      </div>
      <div css={styles.contentWrapper}>
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          css={styles.titleWrapper}
        >
          <h2 css={styles.title}>{repo.name}</h2>
        </a>
        <p css={styles.description}>{repo.description}</p>
        <div css={styles.topicsContainer}>
          {repo.topics
            .filter((topic) => !!values.displayableTopics[topic])
            .map((topic, index) => (
              <RepositoryTopic
                key={`topic--${index}`}
                type={topic as DisplayableTopic}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default OpenSourceCard;
