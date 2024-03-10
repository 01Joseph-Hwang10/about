import React from "react";
import Whisper from "rsuite/Whisper";
import Tooltip from "rsuite/Tooltip";
import styles, { DevIcon } from "./styles";
import { moreStacks } from "./values";
import useIsDarkMode from "@site/src/hooks/useIsDarkMode";

const TechStacks: React.FC = () => {
  const isDarkMode = useIsDarkMode();
  return (
    <div>
      <div css={styles.container}>
        {moreStacks
          .filter(({ disable }) => !disable)
          .map(({ name, homepage, logo, highlight }, index) => (
            <React.Fragment key={`more-stacks--${index}`}>
              <Whisper
                placement="bottom"
                trigger="hover"
                speaker={<Tooltip>{name}</Tooltip>}
              >
                <div css={styles.iconWrapper}>
                  <a
                    href={homepage}
                    target="_blank"
                    rel="noreferrer"
                    css={styles.link}
                  >
                    {(() => {
                      if (typeof logo === "string") {
                        return (
                          <DevIcon
                            className={logo}
                            isDarkMode={isDarkMode}
                            highlight={highlight}
                          />
                        );
                      }
                      const Icon = logo;
                      return (
                        <Icon isDarkMode={isDarkMode} highlight={highlight} />
                      );
                    })()}
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
