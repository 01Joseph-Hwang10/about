import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faLightbulb,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

export interface Nutshell {
  title: string;
  description: string;
  icon: IconDefinition;
}

const nutshells: Nutshell[] = [
  {
    title: "Start-ups",
    description:
      "스타트업과 창업에 관심이 많습니다. 심층 인터뷰 등의 시장조사를 통해 잠재적 Pain Point를 찾고 린 스타트업 방법론에 기반해 MVP를 개발해나가는 과정을 즐깁니다.",
    icon: faLightbulb,
  },
  {
    title: "Lean Programming",
    description:
      "최소의 자원으로 최대의 효과를 추구합니다. 기능을 구현할 때는 그 목적을 항상 검토하고, 구현에 있어 불필요한 프로세스가 있는지를 유심히 살펴봅니다.",
    icon: faCode,
  },
  {
    title: "Code Aesthetics",
    description:
      "가독성이 높은 코드, 유지보수가 용이한 코드를 지향합니다. OOP를 비롯한 다양한 디자인 패턴을 적재적소에 활용해 처음 보는 코드라도 금방 이해하고 기여할 수 있게끔 노력합니다.",
    icon: faPaintBrush,
  },
];

export default {
  nutshells,
};
