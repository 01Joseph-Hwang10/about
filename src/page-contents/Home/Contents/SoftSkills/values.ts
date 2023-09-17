import { TagColorScheme } from "@site/src/components/Tag/Tags/types";

const skillTags = [
  "communication",
  "project-management",
  "service-planning",
  "utility",
] as const;

export type SkillTag = (typeof skillTags)[number];

const skillTagTextColor = (isDarkMode?: boolean) =>
  isDarkMode ? "var(--ifm-font-color-base)" : "var(--ifm-color-emphasis-0)";

const skillTagColors: Record<SkillTag, TagColorScheme> = {
  communication: {
    backgroundColor: (isDarkMode) => (isDarkMode ? "#FD8A99" : "#FF9EAA"),
    textColor: skillTagTextColor,
  },
  "project-management": {
    backgroundColor: (isDarkMode) =>
      isDarkMode
        ? "var(--ifm-color-primary-darker)"
        : "var(--ifm-color-primary)",
    textColor: skillTagTextColor,
  },
  "service-planning": {
    backgroundColor: (isDarkMode) =>
      isDarkMode
        ? "var(--ifm-color-warning-darker)"
        : "var(--ifm-color-warning)",
    textColor: skillTagTextColor,
  },
  utility: {
    backgroundColor: (isDarkMode) =>
      isDarkMode
        ? "var(--ifm-color-success-darker)"
        : "var(--ifm-color-success)",
    textColor: skillTagTextColor,
  },
};

export interface SkillSummary {
  title: string;
  link?: string;
  tags: SkillTag[];
  type: "achievement" | "utility";
  disabled?: boolean;
}

const skills: SkillSummary[] = [
  {
    title: "2022 울산청년창업사관학교 수료",
    link: "https://start.kosmes.or.kr/yh_mai001_001.do",
    tags: ["project-management", "service-planning"],
    type: "achievement",
  },
  {
    title: "2022 창업유망 300 밸류-Up 프로그램 수료",
    link: "http://www.u300.kr/",
    tags: ["project-management", "communication"],
    type: "achievement",
  },
  {
    title: "동남권실험실창업혁신단 주관 UNIST-Pre 아이코어 프로그램 장려상",
    tags: ["communication", "service-planning"],
    type: "achievement",
  },
  {
    title: "2022 울산 스마트 해상물류 창업 오디션 예선 프로그램 수료",
    link: "http://www.usmac.or.kr/",
    tags: ["project-management", "service-planning"],
    type: "achievement",
  },
  {
    title: "2022 울산 스마트 해상물류 창업 오디션 본선 프로그램 수료",
    link: "http://www.usmac.or.kr/",
    tags: ["project-management", "communication"],
    type: "achievement",
  },
  {
    title: "English (TOEFL iBT 98@2023.02)",
    tags: ["communication"],
    type: "utility",
  },
  {
    title: "Git/Github",
    tags: ["utility"],
    type: "utility",
  },
  {
    title: "Slack",
    tags: ["utility"],
    type: "utility",
  },
  {
    title: "Notion",
    tags: ["utility", "project-management"],
    type: "utility",
  },
  {
    title: "경기콘텐츠진흥원 주관 2021 애자일 해커톤 우수상",
    tags: ["service-planning", "communication"],
    type: "achievement",
    disabled: true,
  },
  {
    title: "한국관광공사 & 카카오 주관 2021 관광데이터 활용 공모전 장려상",
    tags: ["project-management", "service-planning"],
    type: "achievement",
    disabled: true,
  },
  {
    title: "2021 울산지역대학 YOUTH 창업우수 아이디어 경진대회 대상",
    tags: ["project-management", "service-planning"],
    type: "achievement",
    disabled: true,
  },
  {
    title: "3rd PATHHACK : 쉬운 해커톤 스폰서상",
    tags: ["service-planning", "communication"],
    type: "achievement",
    disabled: true,
  },
  {
    title: "JUNCTION ASIA 2022 참가자",
    tags: ["service-planning", "communication"],
    type: "achievement",
    disabled: true,
  },
];

export default {
  skills,
  skillTags,
  skillTagTextColor,
  skillTagColors,
};
