import React from "react";
import SectionLayout from "../../Layout/SectionLayout";
import { translate } from "@docusaurus/Translate";
import MeInANutshellItems from "./MeInANutshellItems";

const MeInANutshell = () => {
  return (
    <SectionLayout
      title={translate({
        id: "pages.home.contents.meInANutshell.title",
        message: "저는 이런 것들을 좋아합니다",
      })}
    >
      <MeInANutshellItems />
    </SectionLayout>
  );
};

export default MeInANutshell;
