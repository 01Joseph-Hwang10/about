/* eslint-disable no-undef */
import { ContentFilter } from "./types";

export class SubsectionFilter implements ContentFilter {
  private childrenRef: NodeListOf<ChildNode>;
  private nodeToEraseRef: Set<ChildNode>;
  private readonly names: string[];

  constructor(names: string | string[]) {
    this.names = typeof names === "string" ? [names] : names;
  }

  initialize(nodeToErase, children) {
    this.childrenRef = children;
    this.nodeToEraseRef = nodeToErase;
  }

  apply(node: HTMLElement, i: number) {
    const nodeIsSubsection =
      node.tagName === "H5" &&
      this.names
        .map((name) => node.innerText.includes(name))
        .reduce((acc, cur) => acc || cur, false);
    if (nodeIsSubsection) {
      // H5 tag itself, containing "Related" text
      this.nodeToEraseRef.add(node);
      // Unordered list after H5 tag
      this.nodeToEraseRef.add(this.childrenRef.item(i + 1) as HTMLElement);
    }
  }
}
