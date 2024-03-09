import React from "react";
// @ts-ignore
import Whisper from "rsuite/Whisper";
// @ts-ignore
import Tooltip from "rsuite/Tooltip";
import { css } from "@emotion/react";
import { stacks } from "./values";

const TechStacks = () => {
  return (
    <div
      css={css`
        width: 100%;
        display: grid;
        grid-gap: 10.5px;
        grid-template-columns: repeat(auto-fill, minmax(21px, 1fr));
        margin-bottom: 1rem;
      `}
    >
      {stacks
        .filter(({ disable }) => !disable)
        .map(({ name, homepage, logo }, index) => (
          <Whisper
            key={`stack--${index}`}
            placement="bottom"
            trigger="hover"
            speaker={<Tooltip>{name}</Tooltip>}
          >
            <a href={homepage} target="_blank" rel="noreferrer">
              {logo()}
            </a>
          </Whisper>
        ))}
    </div>
  );
};

export default TechStacks;
