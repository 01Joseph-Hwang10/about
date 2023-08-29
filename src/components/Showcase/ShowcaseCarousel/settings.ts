import { mobileWidth } from "@site/src/style/values";
import { Settings } from "@ant-design/react-slick";

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  swipeToSlide: true,
  arrows: true,
  accessibility: false,
  responsive: [
    {
      breakpoint: Number(mobileWidth),
      settings: {
        arrows: false,
        speed: 500,
      },
    },
  ],
};

export default settings;
