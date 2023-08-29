import { css } from "@emotion/react";
import { mobileWidth } from "@site/src/style/values";

const article = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 180px;

  @media screen and (min-width: ${mobileWidth}px) {
    margin-top: 200px;
    flex-direction: row;
    margin-bottom: 30px;
  }

  // 1200px is arbitrary value.
  // We need to define more reasonable value.
  //
  // TODO: 노트북보다 더 큰 모니터로 접속했을 때
  // 컨텐츠 배치가 자연스러운지 확인하기
  @media screen and (min-width: 1200px) {
    margin-top: 200px;
  }
`;

const description = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 1;
  padding-top: 2.5rem;
  @media screen and (min-width: ${mobileWidth}px) {
    font-size: 1.1rem;
    padding-top: 1rem;
    padding-left: 5rem;
  }
  p {
    color: var(--ifm-color-secondary-contrast-background);
    [data-theme="dark"] & {
      color: var(--ifm-font-color-base);
    }
  }
`;

export default {
  article,
  description,
};
