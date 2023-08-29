import React from "react";
// @ts-ignore
import Whisper from "rsuite/Whisper";
// @ts-ignore
import Tooltip from "rsuite/Tooltip";
import { DisplayableTopic } from "../values";
import styles from "./styles";
import { variableishToSpacedPascal } from "@site/src/utils/stringUtils";

interface TopicWrapperProps {
  topicType: DisplayableTopic;
  children?: React.ReactElement;
}

const TopicWrapper: React.FC<TopicWrapperProps> = ({ topicType, children }) => {
  return (
    <div css={styles.topicWrapper}>
      <Whisper
        placement="bottom"
        trigger="hover"
        speaker={<Tooltip>{variableishToSpacedPascal(topicType)}</Tooltip>}
      >
        {children}
      </Whisper>
    </div>
  );
};

export default TopicWrapper;
