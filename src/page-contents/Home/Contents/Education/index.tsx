import React from "react";
import SectionLayout from "../../Layout/SectionLayout";
import { translate } from "@docusaurus/Translate";
import values from "./values";
import EducationItem from "./EducationItem";

const Education = () => {
  return (
    <SectionLayout
      title={translate({
        id: "pages.Home.Contents.Education.title",
        message: "학력 사항",
      })}
    >
      {values.educations.map((education, index) => (
        <EducationItem key={`education--${index}`} education={education} />
      ))}
    </SectionLayout>
  );
};

export default Education;
