import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mobileWidth } from "@site/src/style/values";

export const ProjectWrapper = styled.section`
  margin: 8rem 0;
`;

export const ProjectContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 170px 1fr;
  grid-template-rows: 1fr;
  align-items: center;
`;

export const ProjectDetail = styled.div`
  padding: 4rem;
  background-color: var(--ifm-background-surface-color);

  box-shadow: var(--ifm-global-shadow-md);
  [data-theme="dark"] & {
    box-shadow: var(--ifm-global-shadow-lw);
  }

  border-radius: 1rem;

  /* min-height: 350px; */

  grid-column: 1 / 3;
  grid-row: 1;

  h2 {
    margin-bottom: 25px;
  }

  .project__detail-container {
    width: 75%;

    p {
      line-height: 170%;
      min-height: 220px;
    }
  }

  @media screen and (max-width: ${mobileWidth}px) {
    min-height: unset;
    grid-column: 1 / 4;
    grid-row: unset;
    padding: 30px 30px;
    .project__detail-container {
      width: 100%;

      p {
        min-height: unset;
      }
    }
  }
`;

export const ProjectPreview = styled.div`
  grid-column: 2 / 4;
  grid-row: 1;
  position: relative;
  right: -20px;

  @media screen and (max-width: ${mobileWidth}px) {
    right: 0;
    grid-column: 1 / 4;
    margin-bottom: 20px;
  }
`;

export const Tags = styled.div`
  @media screen and (max-width: ${mobileWidth}px) {
    display: none;
  }

  margin: 10px;
  color: var(--ifm-color-primary);
  display: flex;
  font-size: 24px;

  svg,
  i {
    margin-right: 25px;
  }
`;

const title = css`
  font-size: 1.75rem;
  color: var(--ifm-color-primary-contrast-foreground);
`;

export default {
  title,
};
