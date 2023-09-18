import { MajorProject } from "../../types";

const description: MajorProject["description"] = `
Typescript로 작성한 개인 포트폴리오 웹페이지 입니다. 
[Docusaurus](https://docusaurus.io/)를 사용하여 제작하였고, Github Pages를 통해 배포하였습니다.
기존에 Notion을 이용해 제작한 포트폴리오 페이지가 너무 단조롭고 나 자신을 제대로 표현하지 못한다고 생각했고, 나의 지향과 가치관을 담은 나만의 포트폴리오 페이지를 만들고 싶어서 제작하게 되었습니다.
`;

const about: MajorProject = {
  id: "about",
  title: "01joseph-hwang10.github.io",
  description,
  images: [],
  links: [],
  disabled: true,
};

export default about;
