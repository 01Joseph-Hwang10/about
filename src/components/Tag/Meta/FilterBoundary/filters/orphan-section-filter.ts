/* eslint-disable no-undef */
import { ContentFilter } from "./types";

export class OrphanSectionFilter implements ContentFilter {
  private childrenRef: NodeListOf<ChildNode>;
  private nodeToEraseRef: Set<ChildNode>;

  initialize(nodeToErase, children) {
    this.childrenRef = children;
    this.nodeToEraseRef = nodeToErase;
  }

  apply(node: HTMLElement, i: number) {
    if (!this.isOrphanable(node)) return;
    const nextItem = this.childrenRef.item(i + 1) as HTMLElement | null;
    if (nextItem && !this.isOrphanable(nextItem)) return;
    this.nodeToEraseRef.add(node);
  }

  private isOrphanable(node: HTMLElement) {
    return node.classList.contains("orphanable");
  }
}
