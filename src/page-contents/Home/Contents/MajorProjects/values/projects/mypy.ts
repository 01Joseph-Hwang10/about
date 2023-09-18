import { MajorProject } from "../../types";

const description: MajorProject["description"] = `
MYPY는 Django와 Next.js를 이용해 개발한 개인 프로젝트로, 간단한 파이썬 스크립트를 UI를 가진 애플리케이션으로 변환해주는 애플리케이션이자 이를 제공하는 웹 서비스입니다.
"웹 개발에 관한 지식이 없는 ML 엔지니어나 Python 프로그래머도 쉽게 파이썬 스크립트를 UI가 포함된 애플리케이션을 만들 수 있도록 할 수 없을까?" 라는 생각에서 시작된 프로젝트입니다.
애플리케이션은 기본적인 Data Type에 대한 Input/Output을 지원하여 사용자가 Python 빌트인 \`input()\` 함수를 이용해 원하는 Input/Output을 지정해 Python 스크립트를 배포하면 이를 간단한 Input/Output Form을 포함하는 UI가 있는 애플리케이션으로 변환합니다.
`;

const images: MajorProject["images"] = [
  { src: "/img/projects/mypy/splash.jpg", mode: "landscape" },
  { src: "/img/projects/mypy/example-code.jpg", mode: "landscape" },
  {
    src: "https://raw.githubusercontent.com/01Joseph-Hwang10/mypy/master/examples/demonstration1.PNG",
    mode: "landscape",
  },
  {
    src: "https://raw.githubusercontent.com/01Joseph-Hwang10/mypy/master/examples/demonstration2.PNG",
    mode: "landscape",
  },
  {
    src: "https://raw.githubusercontent.com/01Joseph-Hwang10/mypy/master/examples/demonstration3.PNG",
    mode: "landscape",
  },
];

const links: MajorProject["links"] = [
  {
    type: "github",
    url: "https://github.com/01Joseph-Hwang10/mypy",
  },
];

const mypy: MajorProject = {
  id: "mypy",
  title: "MYPY",
  description,
  images,
  links,
};

export default mypy;
