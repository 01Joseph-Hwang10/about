import { css } from "@emotion/react";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

const card = css`
  position: relative;
  padding: 2rem;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const contents = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const title = css`
  margin-bottom: 1rem;
  color: var(--ifm-color-primary-contrast-foreground);
`;

const description = css`
  font-size: 0.75rem;
  color: var(--ifm-color-secondary-contrast-foreground);
  overflow: hidden;
`;

const actions = css`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default {
  card,
  contents,
  title,
  description,
  actions,
};
