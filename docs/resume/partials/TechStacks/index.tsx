import React from "react";
import Whisper from "rsuite/Whisper";
import Tooltip from "rsuite/Tooltip";
import { css } from "@emotion/react";
import StackList from "@site/src/page-contents/Home/Contents/TechStacks/StackList";
import styles from "./styles";
import { moreStacks } from "./values";

const TechStacks: React.FC = () => {
  return (
    <div>
      <div css={styles.majorStackContainer}>
        <StackList iconSize="4rem" />
      </div>

      <div css={styles.moreStacksContainer}>
        {moreStacks
          .filter(({ disable }) => !disable)
          .map(({ name, homepage, logo }, index) => (
            <React.Fragment key={`more-stacks--${index}`}>
              <Whisper
                placement="bottom"
                trigger="hover"
                speaker={<Tooltip>{name}</Tooltip>}
              >
                <div
                  css={css`
                    padding: 0.25rem;
                  `}
                >
                  <a href={homepage} target="_blank" rel="noreferrer">
                    {typeof logo === "string" ? (
                      <i
                        className={logo}
                        css={css`
                          color: var(--ifm-color-primary-contrast-foreground);
                          font-size: 27.5px;
                        `}
                      ></i>
                    ) : (
                      logo
                    )}
                  </a>
                </div>
              </Whisper>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default TechStacks;
