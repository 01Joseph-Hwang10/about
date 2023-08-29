import { MajorProject } from "../../types";

const description: MajorProject["description"] = `
FLGlance는 "TODO 에 SNS 기능이 추가되면 재밌지 않을까?" 하는 생각에 시작한 개인 프로젝트입니다. 처음으로 "나만의 온전한 기획, 디자인, 개발을 통해 만든 프로젝트" 이며, 처음으로 "서비스를 개발, 출시 및 운영" 할 수 있었던 경험이기도 합니다. 애플리케이션에는 TODO 기능, SNS 기능 등이 포함되어 있습니다. 서비스를 기획하고 개발하여 출시까지 하는 일련의 과정을 통해, 창업가로서, 그리고 개발자로서 많은 것을 배울 수 있었습니다. 특히, 애플리케이션을 배포하는 과정에서 \`psycopg2\`와 Python Alpine 이미지에 호환성 문제가 있었습니다. 이를 해결하는 과정에서 StackOverflow에 질문을 올렸으나, 답변이 없어 결국 3일 간의 디버깅을 거쳐 직접 해결하여 [self-answer](https://stackoverflow.com/questions/66254669/why-psycopg2-keep-spitting-out-this-error/66261371)를 작성하였습니다. 현재 이 [self-answer](https://stackoverflow.com/questions/66254669/why-psycopg2-keep-spitting-out-this-error/66261371)는 6k 이상의 조회수를 기록하고 있고, 많은 사람들에게 도움이 되었음을 생각하면 매우 보람찬 경험이라고 할 수 있겠습니다.
`;

const images: MajorProject["images"] = [
  { src: "/img/projects/flglance/splash.jpg", mode: "landscape" },
  {
    src: "/img/projects/flglance/desktop-project-1.jpg",
    mode: "landscape",
  },
  {
    src: "/img/projects/flglance/desktop-project-2.jpg",
    mode: "landscape",
  },
  {
    src: "/img/projects/flglance/desktop-project-3.jpg",
    mode: "landscape",
  },
  {
    src: "/img/projects/flglance/mobile-project-1.jpg",
    mode: "portrait",
    frame: "mobile",
  },
  {
    src: "/img/projects/flglance/mobile-project-2.jpg",
    mode: "portrait",
    frame: "mobile",
  },
];

const links: MajorProject["links"] = [
  {
    type: "github",
    url: "https://github.com/01Joseph-Hwang10/To-Do_Glass",
  },
];

const flglance: MajorProject = {
  title: "FLGlance",
  description,
  images,
  links,
};

export default flglance;
