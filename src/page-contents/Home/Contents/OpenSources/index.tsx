import React from "react";
import SectionLayout from "../../Layout/SectionLayout";
import { translate } from "@docusaurus/Translate";
import { useQuery } from "react-query";
import { GET_REPOS_QUERY_KEY, getRepos } from "@site/src/api/get-repos";
import Spinner from "@site/src/components/Spinner";
import ErrorSpan from "@site/src/components/Error/ErrorSpan";
import values from "./values";
import OpenSourceCard from "./OpenSourceCard";
import styles from "./styles";

const OpenSources = () => {
  const {
    data: repos,
    isLoading,
    isError,
  } = useQuery(GET_REPOS_QUERY_KEY, getRepos);

  return (
    <SectionLayout
      title={translate({
        id: "pages.Home.Contents.OpenSources.title",
        message: "오픈소스 프로젝트",
      })}
    >
      <div className="wrapper">
        {isLoading && <Spinner fill />}
        {!isLoading && !isError && (
          <div css={styles.grid}>
            {repos
              .filter((repo) => values.openSourceProjects.has(repo.name))
              .map((repo, index) => (
                <OpenSourceCard key={`open-source--${index}`} repo={repo} />
              ))}
          </div>
        )}
        {!isLoading && isError && <ErrorSpan fill />}
      </div>
    </SectionLayout>
  );
};

export default OpenSources;
