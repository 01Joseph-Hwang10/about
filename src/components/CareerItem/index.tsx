import React from "react";
import { Career } from "./types";
import styles, {
  CareerContainer,
  CareerContainerProps,
  CareerPeriod,
  CareerTitle,
  CareerTitleProps,
  DetailEntry,
  DetailEntryProps,
  CareerSubtitle,
} from "./styles";
import Markdown from "../Markdown";

interface CareerItemProps
  extends CareerTitleProps,
    DetailEntryProps,
    CareerContainerProps {
  career: Career;
}

const CareerItem: React.FC<CareerItemProps> = ({
  career,
  emphasize,
  dense,
  ...props
}) => {
  return (
    <CareerContainer className="career-item" {...props}>
      <div className="career-item__title" css={styles.header}>
        <CareerTitle onClick={career.onClick} emphasize={emphasize}>
          {career.title}
        </CareerTitle>
        <CareerPeriod emphasize={emphasize}>{career.period}</CareerPeriod>
      </div>
      {career.subtitle && (
        <div
          className="career-item__subtitle-wrapper"
          css={styles.subtitleWrapper}
        >
          <CareerSubtitle>{career.subtitle}</CareerSubtitle>
        </div>
      )}
      <ul className="career-item__body" css={styles.body}>
        {career.details.map((detail, index) => (
          <DetailEntry
            key={`education__detail--${career.id}-${index}`}
            className="career-item__detail"
            dense={dense}
          >
            <Markdown>{detail}</Markdown>
          </DetailEntry>
        ))}
      </ul>
    </CareerContainer>
  );
};

export default CareerItem;
