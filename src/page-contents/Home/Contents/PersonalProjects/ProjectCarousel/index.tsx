import "@site/src/utils/carouselUtils";
import React from "react";
import settings from "./settings";
import { SliderWrapper } from "./styles";
import Slider from "@ant-design/react-slick";

interface ProjectCarouselProps {
  children?: React.ReactNode;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ children }) => {
  return (
    <SliderWrapper>
      <Slider {...settings}>{children}</Slider>
    </SliderWrapper>
  );
};

export default ProjectCarousel;
