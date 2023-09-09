/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { ContentFilter } from "./types";

export class HrefFilter implements ContentFilter {
  initialize() {
    // No initialization needed
  }

  apply(node: HTMLAnchorElement) {
    console.log(node);
    if (node.tagName !== "A") return;
    // Replace origin to `https://01joseph-hwang10.github.io`
    if (!node.href.startsWith("https")) return;
    const url = new URL(node.href);
    node.setAttribute("target", "_blank");
    node.setAttribute(
      "href",
      url.href.replace(url.origin, "https://01joseph-hwang10.github.io"),
    );
  }
}
