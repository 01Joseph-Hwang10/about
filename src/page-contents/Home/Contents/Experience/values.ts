import { Career } from "@site/src/components/CareerItem/types";

export interface Experience extends Required<Career> {
  active?: boolean;
}

const companyLinks = {
  tripbuilder: "http://www.tripbuilder.co.kr/",
  labis: "https://www.labis.co.kr/",
  shepherd23: "https://www.shepherd23.com/",
};

const experiences: Experience[] = [
  {
    id: "tripbuilder",
    title: "트립빌더",
    subtitle: "개발팀 / Front-end Developer",
    period: "2021.07 - 2021.12",
    details: [
      "AI 기반 여행 계획 추천 모바일 앱 `TripBuilder` 개발 참여",
      "Clustering 기반 여행 성향 분석 설문조사 웹앱 `여행 고? 시뮬레이션` 개발",
    ],
    onClick: () => {
      if (typeof window === "undefined") return;
      window.open(companyLinks.tripbuilder, "_blank");
    },
  },
  {
    id: "labis",
    title: "랩이즈",
    subtitle: "개발팀 / Development Lead & Co-Founder",
    period: "2021.12 - 2022.11",
    details: [
      "하드웨어 기반의 블록 코딩 교육 솔루션 `LearnQue` 기획 및 개발",
      "투자 유치를 위한 IR 활동 및 엑셀러레이팅 프로그램 참여",
    ],
    onClick: () => {
      if (typeof window === "undefined") return;
      window.open(companyLinks.labis, "_blank");
    },
  },
  {
    id: "shepherd23",
    title: "쉐퍼드23",
    subtitle: "개발팀 / Product Manager & Software Engineer",
    period: "2022.07 - 현재 재직중",
    details: [
      "E-Commerce 쇼핑몰을 위한 개인화 상품 추천 플러그인 [PickHound](https://store.cafe24.com/kr/apps/17367) 기획 및 개발",
      "협업 체계 구축 및 지속적인 업무 프로세스 개선",
    ],
    active: true,
    onClick: () => {
      if (typeof window === "undefined") return;
      window.open(companyLinks.shepherd23, "_blank");
    },
  },
];

export default {
  experiences,
  companyLinks,
};
