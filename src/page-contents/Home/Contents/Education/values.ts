import { Career } from "@site/src/components/CareerItem/types";

export type Education = Omit<Career, "subtitle">;

const educations: Education[] = [
  {
    id: "UNIST",
    title: "울산과학기술원",
    details: ["컴퓨터공학과 학사과정 (주전공)", "경영과학부 학사과정 (부전공)"],
    period: "2021.03 - 휴학 중",
    onClick: () => {
      if (typeof window === "undefined") return;
      window.open("https://www.unist.ac.kr/", "_blank");
    },
  },
];

export { educations };

export default {
  educations,
};
