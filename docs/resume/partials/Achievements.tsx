import React from "react";
import { pipe } from "fp-ts/function";
import { mapWithIndex, filter } from "fp-ts/Array";
import { skills } from "@site/src/page-contents/Home/Contents/SoftSkills/values";

const Achievements: React.FC = () => {
  return (
    <ul>
      {pipe(
        skills,
        filter(({ type }) => type === "achievement"),
        mapWithIndex((index, { title }) => (
          <li key={`achievement--${index}`}>{title}</li>
        )),
      )}
    </ul>
  );
};

export default Achievements;
