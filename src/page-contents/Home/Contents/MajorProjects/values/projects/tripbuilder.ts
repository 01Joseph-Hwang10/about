import { MajorProject } from "../../types";

const description: MajorProject["description"] = `
TripBuilder는 동명의 회사 [TripBuilder](#Career__Experience)에서 개발한 AI 기반 여행계획 추천 애플리케이션입니다.
처음으로 비전이 같은 팀원이 모여 시작한 창업 프로젝트로, 초기 스타트업에서의 실제 협업을 경험할 수 있었습니다.
특히 개발 측면에서, 코드 컨벤션과 커밋 컨벤션을 작성하여 팀원들과 공유하고, 브랜칭, PR, 코드 리뷰 등을 진행하며 소프트웨어 개발의 협업 흐름을 자세히 배울 수 있었습니다. 또한 부분적인 TDD를 진행하면서 유닛 테스트에 용이한 모듈화된 테스트 코드를 작성하는 등 코드 작성에 있어서도 많은 것을 배울 수 있었습니다.
`;

const images: MajorProject["images"] = [
  { src: "/img/projects/tripbuilder/splash.jpg", mode: "landscape" },
  {
    src: "https://user-images.githubusercontent.com/72839543/260765716-3adb8bd0-8ac1-4860-a750-f55af4199505.png",
    mode: "landscape",
  },
  {
    src: "https://user-images.githubusercontent.com/72839543/260765740-7dbe4057-aea5-4152-b835-e10fa10204a1.png",
    mode: "landscape",
  },
];

const links: MajorProject["links"] = [
  {
    type: "github",
    url: "https://github.com/01Joseph-Hwang10/Prototype2021",
  },
];

const tripbuilder: MajorProject = {
  title: "TripBuilder",
  description,
  images,
  links,
};

export default tripbuilder;
