import React from "react";
import SectionLayout from "../../Layout/SectionLayout";
import PaintBackground from "@site/src/components/PaintBackground";
import useIsDarkMode from "@site/src/hooks/useIsDarkMode";
import ProjectCarousel from "./ProjectCarousel";
import ProjectCard from "./ProjectCard";
import Spinner from "@site/src/components/Spinner";
import styles, { PersonalProjectsWrapper } from "./styles";
import values from "./values";
import ErrorSpan from "@site/src/components/Error/ErrorSpan";
import useIsMobile from "@site/src/hooks/useIsMobile";
import useGetRepos from "@site/src/hooks/api/useGetRepos";

const PersonalProjects = () => {
  const isMobile = useIsMobile();
  const isDarkMode = useIsDarkMode();
  const { data: repos, isLoading, isError } = useGetRepos();

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
