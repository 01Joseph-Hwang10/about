import { MajorProject } from "../../types";

const description: MajorProject["description"] = `
"여행 고? 시뮬레이션"은 [TripBuilder](#Career__Experience)에서 개발한 설문조사 기반 여행성향 분석 웹 서비스입니다.
경기콘텐츠진흥원 주관 2021 애자일 해커톤에 참여하여 제작한 앱으로, 해커톤의 이름에 걸맞게 불필요한 기능을 배제하고, 
구현에도 가장 효율적인 방법을 찾기 위해 노력했습니다.
`;

const images: MajorProject["images"] = [
  {
    src: "https://raw.githubusercontent.com/01Joseph-Hwang10/hackathon_frontend/main/examples/stti-start.png",
    mode: "portrait",
    frame: "mobile",
  },
  {
    src: "https://raw.githubusercontent.com/01Joseph-Hwang10/hackathon_frontend/main/examples/stti-first.png",
    mode: "portrait",
    frame: "mobile",
  },
  {
    src: "https://raw.githubusercontent.com/01Joseph-Hwang10/hackathon_frontend/main/examples/stti-second-1.png",
    mode: "portrait",
    frame: "mobile",
  },
  {
    src: "https://raw.githubusercontent.com/01Joseph-Hwang10/hackathon_frontend/main/examples/stti-second-2.png",
    mode: "portrait",
    frame: "mobile",
  },
  {
    src: "https://raw.githubusercontent.com/01Joseph-Hwang10/hackathon_frontend/main/examples/stti-second-3.png",
    mode: "portrait",
    frame: "mobile",
  },
];

const links: MajorProject["links"] = [
  {
    type: "career-description",
    url: "/career-description/tripbuilder",
  },
  {
    type: "live-demo",
    url: "https://hackathon-frontend-aa5d6jz8b-teamtripbuilder.vercel.app/",
  },
  {
    type: "github",
    url: "https://github.com/01Joseph-Hwang10/hackathon_frontend",
  },
];

const survey: MajorProject = {
  title: "여행 고? 시뮬레이션",
  description,
  images,
  links,
};

export default survey;
