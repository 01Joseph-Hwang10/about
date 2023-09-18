import { MajorProject } from "../../types";

const description: MajorProject["description"] = `
"여행 고? 시뮬레이션"은 [TripBuilder](https://www.tripbuilder.co.kr/)에서 개발한 설문조사 기반 여행성향 분석 웹 서비스입니다.
경기콘텐츠진흥원 주관 2021 애자일 해커톤에 참여하여 제작한 앱으로, 해커톤의 이름에 걸맞게 불필요한 기능을 배제하고, 
구현에도 가장 효율적인 방법을 찾기 위해 노력했습니다.
위 대회에서 본 애플리케이션을 개발하여 우수상을 수상했으며, 본 웹앱은 해커톤이 끝난 이후에도 기업 홍보 및 여행 성향 데이터 수집을 위해 계속적으로 사용되었습니다. 작성자의 퇴사 이후 작성자가 개발한 코드를 기반으로 TripBuilder에서 설문조사 웹페이지를 리뉴얼하였고, 새로운 설문조사 웹앱은 현재도 운영 중에 있습니다.
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
  id: "survey",
  title: "여행 고? 시뮬레이션",
  description,
  images,
  links,
  disabled: true,
};

export default survey;
