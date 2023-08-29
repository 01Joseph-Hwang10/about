import "@site/src/utils/carouselUtils";
import "./style.scss";
import Slider from "@ant-design/react-slick";
import React from "react";
import settings from "./settings";
import ShowcaseImage from "../ShowcaseImage";
import { ImageMetadata } from "@site/src/page-contents/Home/Contents/MajorProjects/types";
import { Settings } from "@ant-design/react-slick";

interface ShowcaseCarouselProps {
  images: ImageMetadata[];
  settings?: Settings;
}

const ShowcaseCarousel: React.FC<ShowcaseCarouselProps> = ({
  images,
  settings: customSettings,
}) => {
  const mergedSettings = { ...settings, ...customSettings };
  return (
    <Slider {...mergedSettings}>
      {images.map((image, index) => (
        <ShowcaseImage
          key={`project-showcase__image--${index}`}
          image={image}
        />
      ))}
    </Slider>
  );
};

export default ShowcaseCarousel;
