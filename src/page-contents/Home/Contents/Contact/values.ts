export interface ContactMethod {
  icon: string;
  title: string;
  description?: string;
  info: string;
  href: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: "call",
    title: "전화로 문의하기",
    description:
      "(한국 시간 기준 평일 오전 10시부터 오후 7시까지 전화 응답률이 높습니다)",
    info: "+82 10-9048-9550",
    href: "tel:+82-10-9048-9550",
  },
  {
    icon: "outgoing_mail",
    title: "이메일로 문의하기",
    info: "joseph95501@gmail.com",
    href: "mailto:joseph95501@gmail.com",
  },
];

export default {
  contactMethods,
};
