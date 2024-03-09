import { MajorProject } from "../../types";

const description: MajorProject["description"] = `
LearnQue는 [랩이즈](https://www.labis.co.kr/)에서 개발한 완전 모듈형 드론 기반의 체감형 블록코딩 교육 솔루션으로,
단순히 드론 조종, 기본 프로그래밍에서 끝나는 것이 아니라 택배모듈, 소방모듈 등 실제 현장에서 만나볼 수 있는 교육을 지향하였습니다.
공동창업자로써 심층 인터뷰와 정책 동향에 기반한 설득력있는 투자 유치 활동으로 울산청년창업사관학교, 창업 300 밸류-UP 등 국가/민자 엑셀러레이팅 프로그램을 유치, 수료하였으며, 이 과정에서 창업과 벤쳐 업계에 관한 심도 있는 이해를 가질 수 있었습니다.
또한 하이브리드 애플리케이션을 개발하며, 블록코딩 UI, 블록코드 컴파일러, 시리얼 통신 등 처음 접하는 문제를 해결해 나가는 과정에서 기술적으로 많은 것을 배울 수 있었습니다.
`;

const images: MajorProject["images"] = [
  { src: "/img/projects/learnque/splash.jpg", mode: "landscape" },
  {
    src: "/img/projects/learnque/overview.jpg",
    mode: "landscape",
  },
  {
    src: "/img/projects/learnque/configure-drone.jpg",
    mode: "landscape",
  },
  {
    src: "/img/projects/learnque/block-coding.jpg",
    mode: "landscape",
  },
];

const links: MajorProject["links"] = [
  {
    type: "github",
    url: "https://github.com/01Joseph-Hwang10/dbcav3",
  },
];

const learnque: MajorProject = {
  id: "learnque",
  title: "LearnQue",
  description,
  images,
  links,
};

export default learnque;
