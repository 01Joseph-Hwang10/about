import React from "react";
import SectionLayout from "../../Layout/SectionLayout";
import PaintBackground from "@site/src/components/PaintBackground";
import useIsDarkMode from "@site/src/hooks/useIsDarkMode";
import ProjectCarousel from "./ProjectCarousel";
import { useQuery } from "react-query";
import ProjectCard from "./ProjectCard";
import Spinner from "@site/src/components/Spinner";
import styles, { PersonalProjectsWrapper } from "./styles";
import values from "./values";
import { GET_REPOS_QUERY_KEY, getRepos } from "@site/src/api/get-repos";
import ErrorSpan from "@site/src/components/Error/ErrorSpan";
import useIsMobile from "@site/src/hooks/useIsMobile";

const PersonalProjects = () => {
  const isMobile = useIsMobile();
  const isDarkMode = useIsDarkMode();
  const {
    data: repos,
    isLoading,
    isError,
  } = useQuery(GET_REPOS_QUERY_KEY, getRepos);

  return (
    <SectionLayout>
      <PersonalProjectsWrapper>
        <PaintBackground isDarkMode={isDarkMode} skewY={-3} />
        {isLoading && <Spinner css={styles.loading} />}
        {!isLoading && !isError && (
          <ProjectCarousel>
            {repos
              .filter((repo) => !values.projectsToExclude.has(repo.name))
              .map((repo) => (
                <ProjectCard key={repo.id} node={repo} />
              ))}
          </ProjectCarousel>
        )}
        {!isLoading && isError && (
          <ErrorSpan width="100%" height={isMobile ? "500px" : "750px"} />
        )}
      </PersonalProjectsWrapper>
    </SectionLayout>
  );
};

export default PersonalProjects;
