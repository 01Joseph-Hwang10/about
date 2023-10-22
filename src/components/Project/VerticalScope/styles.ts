import { css } from "@emotion/react";

const container = css`
  display: grid;
  grid-template-columns: 3fr 7fr;
  margin-bottom: 5rem;
`;

const aside = css`
  padding: 0;
  padding-right: 1.5rem;
`;

const hr = css`
  height: 1px;
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
`;

const title = css`
  margin: 0;
  padding: 0;
`;

const titleAttachment = css`
  font-size: 1rem;
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0;
  font-weight: 400;
`;

const subtitle = css`
  font-size: 0.8rem;
  margin: 0;
  margin-top: 0 !important;
  padding: 0;
  color: var(--ifm-color-emphasis-600) !important;
`;

export default {
  container,
  aside,
  hr,
  title,
  titleAttachment,
  subtitle,
};
