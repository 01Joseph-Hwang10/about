import Spinner from "@site/src/components/Spinner";
import useGetRepos from "@site/src/hooks/api/useGetRepos";
import React from "react";
import styles from "./styles";
import values from "./values";
import OpenSourceCard from "./OpenSourceCard";
import ErrorSpan from "@site/src/components/Error/ErrorSpan";

interface Props {
  repoToInclude?: Set<string>;
}

const OpenSourceList: React.FC<Props> = ({
  repoToInclude = values.openSourceProjects,
}) => {
  const { data: repos, isLoading, isError, error } = useGetRepos();
  console.log(error);
  return (
    <div className="wrapper">
      {isLoading && <Spinner fill />}
      {!isLoading && !isError && (
        <div css={styles.grid}>
          {repos
            .filter((repo) => repoToInclude.has(repo.name))
            .map((repo, index) => (
              <OpenSourceCard key={`open-source--${index}`} repo={repo} />
            ))}
        </div>
      )}
      {!isLoading && isError && <ErrorSpan fill />}
    </div>
  );
};

export default OpenSourceList;
