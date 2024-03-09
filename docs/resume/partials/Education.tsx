import React from "react";
import { educations } from "@site/src/page-contents/Home/Contents/Education/values";
import {
  AdmonitionContent,
  AdmonitionNote,
} from "@site/src/components/Project/ProjectDescription/styles";

const admonitionId = "resume-education-section";

const Education: React.FC = () => {
  return (
    <AdmonitionNote id={admonitionId}>
      <AdmonitionContent>
        {educations.map(({ title, period, details, onClick }, index) => (
          <div key={`education--${index}`}>
            <strong className="company-link" onClick={onClick}>
              {title} ({period})
            </strong>
            <ul style={{ margin: "1rem 0 0 0" }}>
              {details.map((detail, i) => (
                <li key={`education--${index}__detail--${i}`}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </AdmonitionContent>
    </AdmonitionNote>
  );
};

export default Education;
