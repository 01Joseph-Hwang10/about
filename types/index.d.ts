/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { SerializedStyles } from "@emotion/react";

declare module "react" {
  interface Attributes extends React.Attributes {
    css?: SerializedStyles;
  }
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.md*" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
