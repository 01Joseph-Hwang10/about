import React from "react";
import styles from "./styles";

interface Props {
  children?: React.ReactNode;
  /**
   * @description
   * Whether to enable markdown syntax for the content
   *
   * @default true
   */
  markdown?: boolean;
  /**
   * @description
   * The content to be rendered in the aside
   *
   * This property takes precedence over
   * {@link title}, {@link titleAttachment} and {@link subtitle}
   */
  content?: React.ReactNode;
  /**
   * @description
   * The title of the vertical scope.
   */
  title?: string;
  /**
   * @description
   * The attachment of the title
   * which will be appended with a slash
   */
  titleAttachment?: string;
  /**
   * @description
   * The subtitle of the vertical scope
   */
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
    <section className="vertical-scope" css={styles.container}>
      <aside css={styles.aside}>
        <hr css={styles.hr} />
        {content && content}
        {!content && title && <h2 css={styles.title}>{title}</h2>}
        {titleAttachment && (
          <span css={styles.titleAttachment}>
            {"/ "}
            {titleAttachment.split("&").map((attachment, index) => (
              <React.Fragment key={`vertical-scope--${title}--${index}`}>
                {index > 0 && (
                  <>
                    <br />
                    {"& "}
                  </>
                )}
                {attachment}
              </React.Fragment>
            ))}
          </span>
        )}
        {!content && subtitle && <h6 css={styles.subtitle}>{subtitle}</h6>}
      </aside>
      {/* @ts-ignore */}
      <div markdown={Number(markdown)}>{children}</div>
    </section>
  );
};

export default VerticalScope;
