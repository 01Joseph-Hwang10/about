import React from "react";
import SectionLayout from "../../Layout/SectionLayout";
import { translate } from "@docusaurus/Translate";
import Spinner from "@site/src/components/Spinner";
import ErrorSpan from "@site/src/components/Error/ErrorSpan";
import values from "./values";
import OpenSourceCard from "./OpenSourceCard";
import styles from "./styles";
import useGetRepos from "@site/src/hooks/api/useGetRepos";

const OpenSources = () => {
  const { data: repos, isLoading, isError } = useGetRepos();

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
