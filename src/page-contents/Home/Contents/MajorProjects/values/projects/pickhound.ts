import { MajorProject } from "../../types";

const description: MajorProject["description"] = `
PickHound는 [쉐퍼드23](https://www.shepherd23.com/)에서 개발한 Cafe24 온라인 쇼핑몰을 대상으로 하는 **상품 추천 플러그인**입니다.
[**Contextual Bandit**](https://towardsdatascience.com/contextual-bandits-and-reinforcement-learning-6bdfeaece72a)에 기반해 팝업 배너를 통해 각 쇼핑몰의 상품을 사용자 개인의 선호, 취향 등을 고려한 개인화 상품 추천을 제공합니다.
베타 테스팅 단계를 거치고 있으며, 현재 **60곳 이상의 실사용 고객사의 25k 가량의 쇼핑몰 방문객에게 상품 추천 서비스를 제공**하고 있습니다.
**서비스의 기획, 개발, 운영을 총체적으로 담당**하면서, 심층 인터뷰 및 고객 데이터 수집을 통한 피드백 수집, 플러그인 및 추천 시스템 개발 및 유지보수, 서비스 운영을 진행하고 있습니다.
이러한 과업을 진행하며 현재도 수많은 기술적, 사업적 문제를 맞닥뜨리고, 이를 해결해나가는 과정에서 많은 배움과 성장을 얻고 있습니다.
`;

const images: MajorProject["images"] = [
  { src: "/img/projects/pickhound/splash.jpg", mode: "landscape" },
  {
    src: "/img/projects/pickhound/demonstration-desktop.jpg",
    mode: "landscape",
  },
  {
    src: "/img/projects/pickhound/demonstration-mobile.jpg",
    mode: "portrait",
    frame: "mobile",
  },
  {
    src: "/img/projects/pickhound/admin-dashboard-main.jpg",
    mode: "landscape",
  },
  {
    src: "/img/projects/pickhound/admin-dashboard-banner-design-1.jpg",
    mode: "landscape",
  },
  {
    src: "/img/projects/pickhound/admin-dashboard-banner-design-2.jpg",
    mode: "landscape",
  },
];

const links: MajorProject["links"] = [
  {
    type: "live-demo",
    url: "https://store.cafe24.com/kr/apps/17367",
  },
];

const pickhound: MajorProject = {
  id: "pickhound",
  title: "PickHound",
  description,
  images,
  links,
};

export default pickhound;
