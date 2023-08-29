import { mobileWidth } from "@site/src/style/values";
import { Settings } from "@ant-design/react-slick";

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: true,
  centerMode: true,
  centerPadding: "40px",
  swipeToSlide: true,
  arrows: false,
  accessibility: false,
  responsive: [
    {
      breakpoint: Number(mobileWidth),
      settings: {
        speed: 500,
        slidesToShow: 1,
        centerPadding: "15px",
        dots: false,
      },
    },
  ],
};

export default settings;
