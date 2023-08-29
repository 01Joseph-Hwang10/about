import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

interface WordCloudProviderProps {
  children?: React.ReactNode;
}

const WordCloudProvider: React.FC<WordCloudProviderProps> = ({ children }) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};

export default WordCloudProvider;
