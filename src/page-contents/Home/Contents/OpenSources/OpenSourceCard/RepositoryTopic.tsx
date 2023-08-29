import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIsDarkMode from "@site/src/hooks/useIsDarkMode";
import values, { DisplayableTopic } from "../values";
import styles from "../styles";
import cardStyles from "./styles";
import utils from "./utils";
import TopicWrapper from "./TopicWrapper";

interface RepositoryTopicProps {
  type: DisplayableTopic;
}

const RepositoryTopic: React.FC<RepositoryTopicProps> = ({ type }) => {
  const isDarkMode = useIsDarkMode();
  const topic = values.displayableTopics[type];
  if (typeof topic.icon === "object") {
    return (
      <TopicWrapper topicType={type}>
        <div css={cardStyles.faTopicInner}>
          <FontAwesomeIcon
            size="xl"
            color={styles.iconColor(isDarkMode)}
            icon={topic.icon}
          />
        </div>
      </TopicWrapper>
    );
  }
  const Icon = topic.icon;
  return (
    <TopicWrapper topicType={type}>
      <div css={cardStyles.topicInner}>
        {utils.iconIsMonotone(Icon) ? (
          // @ts-ignore
          <Icon
            color={styles.iconColor(isDarkMode)} // Intentional linebreak for `ts-ignore`
            size={styles.svgIconSize} // Intentional linebreak for `ts-ignore`
          />
        ) : (
          // @ts-ignore
          <Icon
            colors={styles.iconColors} // Intentional linebreak for `ts-ignore`
            size={styles.svgIconSize} // Intentional linebreak for `ts-ignore`
          />
        )}
      </div>
    </TopicWrapper>
  );
};

export default RepositoryTopic;
