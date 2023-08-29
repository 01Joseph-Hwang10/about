import React from "react";
// @ts-ignore
import ReactMarkdown from "react-markdown";
import settings from "./settings";

interface MarkdownProps {
  children: string;
}

const Markdown: React.FC<MarkdownProps> = ({ children }) => {
  return <ReactMarkdown {...settings}>{children}</ReactMarkdown>;
};

export default Markdown;
