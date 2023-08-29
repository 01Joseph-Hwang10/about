import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mobileWidth } from "@site/src/style/values";

const loading = css`
  width: 100%;
  height: 750px;

  @media screen and (min-width: ${mobileWidth}px) {
    height: 500px;
  }
`;

export const PersonalProjectsWrapper = styled.section`
  margin-top: 100px;

  width: 100%;
  height: 100%;

  .slick-slide {
    padding: 10px;
  }
`;

export default {
  loading,
};
