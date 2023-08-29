import "@site/src/style/devices.min.css";
import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import OpenSources from "./OpenSources";
import Contact from "./Contact";
import SectionGroup from "../Layout/SectionGroup";
import AboutMe from "./AboutMe";
import MeInANutshell from "./MeInANutshell";
import TechStacks from "./TechStacks";
import SoftSkills from "./SoftSkills";
import MajorProjects from "./MajorProjects";
import PersonalProjects from "./PersonalProjects";

const HomepageContent: React.FC = () => {
  return (
    <>
      <SectionGroup id="About">
        <AboutMe />
        <MeInANutshell />
      </SectionGroup>
      <SectionGroup id="Career">
        <Education />
        <Experience />
      </SectionGroup>
      <SectionGroup id="Skillsets">
        <TechStacks />
        <SoftSkills />
      </SectionGroup>
      <SectionGroup id="Projects">
        <MajorProjects />
        <PersonalProjects />
        <OpenSources />
      </SectionGroup>
      <SectionGroup id="Contact">
        <Contact />
      </SectionGroup>
    </>
  );
};

export default HomepageContent;
