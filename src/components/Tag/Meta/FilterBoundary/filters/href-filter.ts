/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { ContentFilter } from "./types";

/**
 * Currently not used
 */
export class HrefFilter implements ContentFilter {
  initialize() {
    // No initialization needed
  }

  apply(node: HTMLAnchorElement) {
    // if (node.tagName !== "A") return;
    // // Remove internal links
    // if (!node.href.includes("http")) {
    //   node.removeAttribute("href");
    // }
  }
}
