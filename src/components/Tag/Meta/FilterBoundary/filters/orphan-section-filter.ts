/* eslint-disable no-undef */
import { ContentFilter } from "./types";

export class OrphanSectionFilter implements ContentFilter {
  private childrenRef: NodeListOf<ChildNode>;
  private nodeToEraseRef: Set<ChildNode>;

  initialize(nodeToErase, children) {
    this.childrenRef = children;
    this.nodeToEraseRef = nodeToErase;
  }

  apply(node, i) {
    if (node.tagName !== "H3") return;
    const nextItem = this.childrenRef.item(i + 1) as HTMLElement | null;
    if (nextItem && nextItem.tagName !== "H3") return;
    this.nodeToEraseRef.add(node);
  }
}
