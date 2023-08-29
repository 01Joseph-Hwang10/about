import type {
  ReactMarkdownOptions,
  // @ts-ignore
} from "react-markdown/lib/react-markdown";
import DynamicTargetLink from "./DynamicTargetLink";

const settings: Omit<ReactMarkdownOptions, "children"> = {
  components: {
    a: DynamicTargetLink,
  },
};

export default settings;
