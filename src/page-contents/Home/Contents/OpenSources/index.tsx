import React from "react";
import SectionLayout from "../../Layout/SectionLayout";
import { translate } from "@docusaurus/Translate";
import OpenSourceList from "./OpenSourceList";

const OpenSources = () => {
  return (
    <SectionLayout
      title={translate({
        id: "pages.Home.Contents.OpenSources.title",
        message: "오픈소스 프로젝트",
      })}
    >
      <OpenSourceList />
    </SectionLayout>
  );
};

export default OpenSources;
