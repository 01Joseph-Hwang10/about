import { MajorProject } from "../../types";

const description: MajorProject["description"] = `
MYPY는 개인 프로젝트로, 간단한 파이썬 스크립트를 UI를 가진 애플리케이션으로 변환해주는 애플리케이션이자 이를 제공하는 웹 서비스입니다.
"웹 개발에 관한 지식이 없는 ML 엔지니어나 Python 프로그래머도 쉽게 파이썬 스크립트를 UI가 포함된 애플리케이션을 만들 수 있도록 할 수 없을까?" 라는 생각에서 시작했습니다.
처음에 목표했던 그림보다는 많이 부족한 결과물이었지만, 프로젝트를 진행하면서 Python의 동작 방식과 네트워크 통신에 관한 기초적인 이해를 크게 높일 수 있었습니다.
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
