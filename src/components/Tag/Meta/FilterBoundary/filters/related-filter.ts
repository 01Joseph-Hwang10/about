/* eslint-disable no-undef */
import { ContentFilter } from "./types";

export class RelatedFilter implements ContentFilter {
  private childrenRef: NodeListOf<ChildNode>;
  private nodeToEraseRef: Set<ChildNode>;

  initialize(nodeToErase, children) {
    this.childrenRef = children;
    this.nodeToEraseRef = nodeToErase;
  }

  apply(node: HTMLElement, i: number) {
    if (node.tagName === "H5" && node.innerText.includes("Related")) {
      // H5 tag itself, containing "Related" text
      this.nodeToEraseRef.add(node);
      // Unordered list after H5 tag
      this.nodeToEraseRef.add(this.childrenRef.item(i + 1) as HTMLElement);
    }
  }
}
