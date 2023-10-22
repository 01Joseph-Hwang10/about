import { css } from "@emotion/react";
import React from "react";

interface Props {
  children?: React.ReactNode;
  markdown?: boolean;
  content?: React.ReactNode;
  title?: string;
  titleAttachment?: string;
  subtitle?: string;
}

const VerticalScope: React.FC<Props> = ({
  content,
  title,
  titleAttachment,
  subtitle,
  children,
  markdown = true,
}) => {
  return (
    <section
      className="vertical-scope"
      css={css`
        display: grid;
        grid-template-columns: 3fr 7fr;
        margin-bottom: 5rem;
      `}
    >
      <aside
        css={css`
          padding: 0;
          padding-right: 1.5rem;
        `}
      >
        <hr
          css={css`
            height: 1px;
            margin: 0;
            margin-bottom: 1rem;
            padding: 0;
          `}
        />
        {content && content}
        {!content && title && (
          <h2
            css={css`
              margin: 0;
              padding: 0;
            `}
          >
            {title}
          </h2>
        )}
        {titleAttachment && (
          <span
            css={css`
              font-size: 1rem;
              margin: 0;
              margin-bottom: 0.5rem;
              padding: 0;
              font-weight: 400;
            `}
          >
            {"/ "}
            {titleAttachment}
          </span>
        )}
        {!content && subtitle && (
          <h6
            css={css`
              font-size: 0.8rem;
              margin: 0;
              margin-top: 0 !important;
              padding: 0;
              color: var(--ifm-color-emphasis-600) !important;
            `}
          >
            {subtitle}
          </h6>
        )}
      </aside>
      {/* @ts-ignore */}
      <div markdown={Number(markdown)}>{children}</div>
    </section>
  );
};

export default VerticalScope;
