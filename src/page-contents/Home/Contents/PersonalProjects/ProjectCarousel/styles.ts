import styled from "@emotion/styled";
import { mobileWidth } from "@site/src/style/values";

export const SliderWrapper = styled.div`
  padding-bottom: 10rem;
  padding-left: 0;
  padding-right: 0;
  padding-top: 15rem;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  @media screen and (min-width: ${mobileWidth}px) {
    padding-top: 7.5rem;
  }
`;
